import { resolve } from "path";

export default {
  /**
   * Function that mutates the original webpack config.
   * Supports asynchronous changes when a promise is returned (or it's an async function).
   *
   * @param {object} config - original webpack config.
   * @param {object} env - options passed to the CLI.
   * @param {WebpackConfigHelpers} helpers - object with useful helpers for working with the webpack config.
   * @param {object} options - this is mainly relevant for plugins (will always be empty in the config), default to an empty object
   **/
  webpack(config, env, helpers) {
    helpers.getPluginsByName(config, "HtmlWebpackPlugin").forEach(item => {
      item.plugin.options.minify = Object.assign(item.plugin.options.minify, {
        minifyJS: true
      });
      item.plugin.options.env = process.env.NODE_ENV;
      // console.log(item.plugin.options);
    });
    if (process.env.NODE_ENV === "production") {
      helpers.getPluginsByName(config, "MiniCssExtractPlugin").forEach(item => {
        item.plugin.options = Object.assign(
          item.plugin.options,
          {
            filename: "css/[contenthash:8].css",
            chunkFilename: "css/chunk.[contenthash:8].css"
          }
        );
      });

      config.output = Object.assign(config.output, {
        publicPath: '/',
        filename: "js/[name].[chunkhash:8].js",
        chunkFilename: "js/[name].chunk.[chunkhash:8].js"
      });
    }

    config.node.Buffer = true;
 

    // if (config.devServer) {
    //   config.devServer = Object.assign(config.devServer, {
    //     proxy: {
    //       "/passport": {
    //         target: "http://gfc-passport.api.gfc.vipc.ren",
    //         pathRewrite: {
    //           "^/passport": ""
    //         },
    //         changeOrigin: true,
    //         changeHost: true
    //       },
    //       "/charging": {
    //         target: "http://gfc-charging.api.gfc.vipc.ren",
    //         pathRewrite: {
    //           "^/charging": ""
    //         },
    //         changeOrigin: true,
    //         changeHost: true
    //       }
    //     }
    //   });
    // }
  }
};
