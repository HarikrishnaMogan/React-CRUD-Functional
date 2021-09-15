import React from "react";
import Posts from "./Components/Posts";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import About from "./Components/about";
import Comments from "./Components/Subcomponents/comments";
function App()
{
    return(
        <>
        <BrowserRouter>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts/:id" component={Comments}/>
        <Route path="/posts" component={Posts} />
        <Route path="/about" component={About} />
        </Switch>
        </BrowserRouter>

        </>
    );
}
export default App;