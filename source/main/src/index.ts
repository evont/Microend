import './style/index.css';
import App from './components/app';
import { registerMicroApps, start } from 'qiankun';

export default App;

function getActiveRule(prefix: string) {
  return (location: Location) => location.pathname.startsWith(`${prefix}`)
}

const isDev = process.env.NODE_ENV == "development";
console.log(isDev);
registerMicroApps([
  {
    name: 'mvue3', // app name registered
    entry:  isDev ? '//localhost:8333/' : '/mvue3/',
    container: '#subapp',
    activeRule: getActiveRule('/c/mvue3'),
  },
  {
    name: 'mvue2', // app name registered
    entry: isDev ? '//localhost:8222/' : '/mvue2/',
    container: '#subapp',
    activeRule: getActiveRule('/c/mvue2'),
    props: {
      testData: 'testdata'
    }
  },
]);

// start({ prefetch: false });