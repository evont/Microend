import { FunctionalComponent, h } from 'preact';
import { start } from 'qiankun';

const Portal: FunctionalComponent = () => {
  //@ts-ignore
  if (!window.qiankunStarted) {
    //@ts-ignore
    window.qiankunStarted = true;
    start();
  }
  return (<div id="subapp"></div>);
};

export default Portal;
