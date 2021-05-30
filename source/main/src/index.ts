import './style/index.css';
import App from './components/app';
import { registerMicroApps, start } from 'qiankun';

export default App;

function getActiveRule(prefix: string) {
  return (location: Location) => location.pathname.startsWith(`${prefix}`)
}

const isDev = process.env.NODE_ENV == "development";
registerMicroApps([
  {
    name: 'mvue3', // app name registered
    entry:  isDev ? '//localhost:8333/' : '/mvue3/',
    container: '#app',
    activeRule: '/c/mvue3',
  },
  {
    name: 'mvue2', // app name registered
    entry: isDev ? '//localhost:8222/' : '/mvue2/',
    container: '#app',
    activeRule: getActiveRule('/c/mvue2'),
    props: {
      testData: 'testdata'
    }
  },
  {
    name: 'mreact', // app name registered
    entry: isDev ? '//localhost:8444/' : '/mreact/',
    container: '#app',
    activeRule: getActiveRule('/c/mreact'),
    props: {
      testData: 'testdata'
    }
  },
]);

// start({ prefetch: false });