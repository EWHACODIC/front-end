import './style/App.css';
import './style/MainPage.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from './pages/MainPage';
import Study from './pages/Study';
import TotalRank from './pages/TotalRank';
import TotalStudy from './pages/TotalStudy';
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
          <Route exact path="/front-end" component={MainPage}/>
          <Route exact path="/front-end/study" component={Study}/>
          <Route exact path="/front-end/study/rank" component={TotalRank} />
          <Route exact path='/front-end/study/total' component={TotalStudy} />
          <Route exact path="/front-end/tech" component={TechJob}/>
          <Route exact path='/front-end/tech/postView/:no' component={TechDetail} />
          <Route exact path="/front-end/qna" component={Qna}/>
          <Route exact path='/front-end/qna/postView/:no' component={QnaDetail} />
          <Route exact path="/front-end/community" component={Community}/>
          <Route exact path='/front-end/community/postView/:no' component={CommunityDetail} />
          <Route path="/front-end/post" component={Post} />
          <Route path="/front-end/signup" component={Signup}/>
          <Route path="/front-end/mypage" component={Mypage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
