import './style/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from './pages/MainPage';
import Study from './pages/Study';
import './style/MainPage.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route path="/study" component={Study}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
