import "./public-path";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./views/App";
import About from "./views/About";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Route, Switch, Link } from "react-router-dom";



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
function findMount(container) {
  return container ? container.querySelector('#app') : document.querySelector('#app')
}
function render(props) {
  const { container } = props;
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <ul><li><Link to="/">Home</Link></li><li><Link to="/about">about</Link></li></ul>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </HashRouter>
    </React.StrictMode>,
   findMount(container)
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(findMount(container));
}