import { Route , Switch } from "react-router-dom";
import AllMeetUps from "./pages/AllMeetups"
import Favorites from "./pages/Favorites"
import NewMeetUp from "./pages/NewMeetUp"
import MainNavigation from "./components/MainNavigation"
import './App.css';

function App() {
  return (
    <div className="App">
      <MainNavigation/>
      <Switch>
        <Route path="/" exact={true}>
            <AllMeetUps/>
        </Route>

        <Route path="/new-meetup">
            <NewMeetUp/>
        </Route>

        <Route path="/favorites">
            <Favorites/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
