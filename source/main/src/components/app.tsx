import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Home from '../routes/home';
import Portal from '../routes/portal';
import NotFoundPage from '../routes/notfound';
import Header from './header';

const App: FunctionalComponent = () => {
    return (
        <div id="preact_root">
            <Header />
            <div style="margin-top: 80px">
            <Router>
                <Route path="/" component={Home} />
                <Route path="/:app*" component={Portal} />
                <NotFoundPage default />
            </Router>
            </div>
        </div>
    );
};

export default App;
