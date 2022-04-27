import NavBar from "./Components/NavBar";
import Crud from "./Components/Crud";
import AddUser from "./Components/AddUser";
import AllUsers from "./Components/AllUsers";
import EditUser from "./Components/EditUser";
import NotFound from "./Components/NotFound";
import { BrowserRouter, Route, Switch } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path="/" component= {Crud} />
      <Route exact path="/all" component= {AllUsers} />
      <Route exact path="/add" component= {AddUser} />
      <Route exact path="/edit/:id" component={EditUser} />
      <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
