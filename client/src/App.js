import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TestPage from "./pages/TestPage";
import RawPage from "./pages/RawPage";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={RawPage} />
                    <Route exact path="/test" component={TestPage} />
                    <Route exact path="/mainpage" component={MainPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;