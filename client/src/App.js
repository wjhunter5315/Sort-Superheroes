import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TestPage from "./pages/TestPage/TestPage";
// import RawPage from "./pages/RawPage";
import ModalPage from "./pages/ModalPage";
import Detail from "./pages/Detail";
import Footer from "./components/Footer";
import APITest from "./pages/APITest";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/test" component={TestPage} />
                    <Route exact path="/heroes/:id" component={Detail} />
                    <Route exact path="/modal" component={ModalPage} />
                    <Route exact path="/apitest" component={APITest} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;