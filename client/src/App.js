import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./components/LandingPage/Landing";
import HomePage from "./components/HomePage/HomePage";
import DetailCountry from "./components/DetailCountry/DetailCountry";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/countries" component={HomePage} />
                    <Route exact path ="/activities"> soy form activities </Route>  {/*component={Activities}*/}
                    <Route exact path="/countries/:id" component={DetailCountry} />  {/*component={DetailCountry}*/}
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default App;
