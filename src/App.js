import './style/App.css';
import './style/MainPage.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from './pages/MainPage';
import Study from './pages/Study';
import TechJob from './pages/TechList';
import TechDetail from './pages/TechDetail';
import Qna from './pages/QnaList';
import QnaDetail from './pages/QnaDetail';
import Community from './pages/CommunityList';
import CommunityDetail from './pages/CommunityDetail';
import Post from './pages/Post';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/study" component={Study}/>
          <Route exact path="/tech" component={TechJob}/>
          <Route exact path='/tech/postView/:no' component={TechDetail} />
          <Route exact path="/qna" component={Qna}/>
          <Route exact path='/qna/postView/:no' component={QnaDetail} />
          <Route exact path="/community" component={Community}/>
          <Route exact path='/community/postView/:no' component={CommunityDetail} />
          <Route path="/post" component={Post} />
          <Route path="/signup" component={Signup}/>
          <Route path="/mypage" component={Mypage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
