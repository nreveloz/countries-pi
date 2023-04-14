import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./components/LandingPage/Landing";
import HomePage from "./components/HomePage/HomePage";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/countries" component={HomePage} />
                    <Route path ="/activities" > soy activities </Route>  {/*component={Activities}*/}
                    <Route exact path="/countries/:id"> soy detail country </Route> {/*component={DetailCountry}*/}
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default App;
