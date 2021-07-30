import './style/App.css';
import './style/MainPage.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from './pages/MainPage';
import Study from './pages/Study';
import TechJob from './pages/TechList';
import TechDetail from './pages/TechDetail';
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route path="/study" component={Study}/>
          <Route path="/techJob" component={TechJob}/>
          <Route exact path='/tech/postView/:no' component={TechDetail} />
          <Route path="/post" component={Post} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
