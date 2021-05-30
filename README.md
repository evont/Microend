# 微前端实践

本项目是作为微前端实践演示接入多技术栈及部署说明，主应用使用了轻量的 Preact，微应用则分别使用了 React、Vue2 和 Vue3。
[项目地址](https://github.com/evont/Microend)

## 测试说明

执行 `git clone https://github.com/evont/Microend.git` 将项目拉去到本地

在项目目录中，可以看到有`source` 和`www` 两个目录，其中`source` 对应的是多个微前端的源码，而`www` 则是部署后的目录，这里只是为了方便本地测试，上线时可以独立部署在不同服务器下

- 开发测试：

  在 `source` 目录中的各个项目中进行依赖安装，推荐使用 yarn，安装完成后即可分别执行相对应的开发脚本进行测试

- 部署测试：

  更改 `www/nginx.conf` 中的 root 为你自己本地的项目路径，确保你安装了 nginx 之后，执行
  `nginx -c /yourpath/microend/www/nginx.conf`命令，即使用对应的指定配置文件启动 nginx，就可以看到项目部署后的状态了。

  对应的，你也可以在修改源码之后将部署后的代码复制到对应的项目目录即可完成部署。

  如果你需要重启 nginx，则需执行`nginx -c /yourpath/microend/www/nginx.conf -s reload` 即可

## 开发说明

1. 注册微应用

    ```javascript
    // source/main/src/index.ts
    import { registerMicroApps, start } from "qiankun";
    // ...
    const isDev = process.env.NODE_ENV == "development";

    function getActiveRule(prefix: string) {
      return (location: Location) => location.pathname.startsWith(`${prefix}`);
    }

    registerMicroApps([
      {
        name: "mvue2", // app name registered
        entry: isDev ? "//localhost:8222/" : "/mvue2/",
        container: "#app",
        activeRule: "/c/mvue2",
        props: {
          testData: "testdata",
        },
      },
      {
        name: "mvue3", // app name registered
        entry: isDev ? "//localhost:8333/" : "/mvue3/",
        container: "#app",
        activeRule: getActiveRule("/c/mvue3"),
      },
      {
        name: "mreact", // app name registered
        entry: isDev ? "//localhost:8444/" : "/mreact/",
        container: "#app",
        activeRule: getActiveRule("/c/mreact"),
        props: {
          testData: "testdata",
        },
      },
    ]);

    // 如果container 已经在页面中，可以此时执行 start()，如果不在，也就是希望在主应用的路由页面中渲染，则先不执行
    // start({ prefetch: false });
    ```

    我们首先需要在主应用的入口文件中注册微应用，简单说明一下其中一些配置项的注意点：

      - `entry`：微应用的入口地址，也是微应用的真实访问路径，主应用通过 entry 的地址，去获取微应用的资源，然后插入到自身的对应 dom 中，假设主应用通过`a.com`访问，entry 为`/mvue2/`，则会在路径匹配到 `activeRule`时去获取 `a.com/mvue2/` 下的资源。

        因此，在整个项目都部署在同一个域名下时，这里需要注意尽量不要和`activeRule` 一样，否则刷新页面会进入到微应用中的页面中。如果微应用是其他域名的情况下，则可以和`activeRule` 一样;

        微应用的 `entry` 路径最后面的 `/` 不可省略

      - `activeRule`：微应用的激活规则，可以是一个函数或者一个字符串，当浏览器地址符合这个规则时，就会去激活该微应用，以上面代码为例子，`a.com/c/mvue2` 或`a.com/c/mvue2/about` 都会被激活，去获取`a.com/mvue2/` 下的资源。

      - `container`：该微应用在主应用中的插入点，可以用选择器或者 Element 实例

      - `props`：可以在这里传递数据给微应用，比如公共的工具函数，变量，或者根路由实例等等

2. 启动微应用

   注册完微应用，我们可以选择根据需求启动 app 了。
   
   当微应用的 container 是在主应用的 html 上已经存在的情况下，可以在`registerMicroApps` 后执行`start`。
   
   当希望微应用在主应用的路由页面下渲染时，我们需要将`start` 函数等到路由组件渲染完毕的时候才执行，且只执行一次。

     ```typescript
     // 用于渲染微应用的 Portal 组件
     import { start } from "qiankun";

     const Portal: FunctionalComponent = () => {
       if (!window.qiankunStarted) {
         window.qiankunStarted = true;
         start({ prefetch: false });
       }
       return (
         <div class="container">
           <div id="app"></div>
         </div>
       );
     };
     // 主应用根组件
     const App: FunctionalComponent = () => (
       <Router>
         <Route path="/" component={Home} />
         <Route path="/:app*" component={Portal} />
       </Router>
     );
     ```

3. 微应用项目开发

   - 路由导航

      在 vue-router 4.x 中`createWebHistory` 用到的`useHistoryStateNavigation` 方法中，有这么一段代码，导致了在进入了使用vue-router 4.x 的微应用之后，使用 History 改变 URL 都会被加上router 中设置的 `base`。为了解决这个问题，我们需要考虑要使用一个统一的路由实例来跳转，且vue-router 4.x 不能用`createWebHistory` 方法来创建路由

      ```javascript
      const url = hashIndex > -1
        ? (location.host && document.querySelector('base')
            ? base
            : base.slice(hashIndex)) + to
        : createBaseLocation() + base + to;
       try {
         // ...
            history[replace ? 'replaceState' : 'pushState'](state, '', url);
       }
       // ...
      ```
   -  资源路径问题
   
      我们通过注入来解决微应用动态载入的 脚本、样式、图片 等地址不正确的问题。`__webpack_public_path__` 可以参考webpack 的[公共路径](https://webpack.docschina.org/guides/public-path/)，需要注意的是，由于import 命令会被 JavaScript 引擎静态执行，优先于导入模块内的其他内容执行（参考[深入理解 ES6 模块机制](https://zhuanlan.zhihu.com/p/33843378?group_id=947910338939686912)一文），因此以下语句放在入口js 最顶部执行时是不会起作用的，所以要单独创建一个js 进行import。

      ```__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;```
    
## 部署说明

这里我们只讨论怎么部署在同一服务器下，因为部署在不同服务器下时，理论上只是改改配置的事，参考文档即可，下面是为了说明在主应用也在二级目录的情况下的配置。

在如下的`nginx.conf` 文件中，我们可以看到，主应用在`location /` 的情况下覆写了`root` 字段，指向了该二级目录，其余的`location` 则分别的使用了默认的配置，仅将默认的`index.html` 指向自身目录下的`index.html`， 这样我们就可以单独访问微应用的页面，也可以在主应用中加载微应用了。

另外，这里的`location` 的路径和微应用项目中 webpack 的 `publicPath` 的必须是同名的，否则就会访问不到对应的资源，另外，使用以下配置时，路径和目录也应该同名，否则`try_files` 就会匹配不到对应的目录

```nginx
http {
  include /usr/local/etc/nginx/mime.types;
  default_type application/octet-stream;
  server {
    listen       9998;
    server_name  localhost;
    index index.html;
    root   /yourpath/microend/www;

    location / {
      root /yourpath/microend/www/main;
      try_files $uri $uri/ /index.html;
    }

    location /mvue2 {
      try_files $uri $uri/ /mvue2/index.html;
    }

    location /mvue3 {
      try_files $uri $uri/ /mvue3/index.html ;
    }

    location /mreact {
      try_files $uri $uri/ /mreact/index.html;
    }

  }
 
}
```

至此，我们就可以完成多技术栈的微前端项目接入和部署了