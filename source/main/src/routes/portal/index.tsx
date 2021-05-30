import { FunctionalComponent, h } from 'preact';
import { start } from 'qiankun';

const Portal: FunctionalComponent = () => {
  //@ts-ignore
  if (!window.qiankunStarted) {
    //@ts-ignore
    window.qiankunStarted = true;
    start({ prefetch: false });
  }
  return (<div class="container">
    <div  id="app"></div>
  </div>);
};

export default Portal;
