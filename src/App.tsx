import React from 'react';
import 'animate.css/animate.min.css';
import ScrollToTop from "react-router-scroll-top";
import {HashRouter as Router, Route} from 'react-router-dom';
import {Header} from './components/header';
import {Footer} from './components/footer';
import {Home} from './pages/home';
import {Team} from './pages/team';
import {Blog} from './pages/blog';
import {Agriculture} from "./pages/content/agriculture";
import {Forestry} from "./pages/content/forestry";
import {BlogPost} from "./pages/blog-post";

const App: React.FC = () => {
  return (
    <div className='flex-wrapper'>
      <Router>
        <ScrollToTop>
        <Header/>
        {/*<AnimatedSwitch*/}
        {/*  atEnter={{opacity: 0}}*/}
        {/*  atLeave={{opacity: 0}}*/}
        {/*  atActive={{opacity: 1}}*/}
        {/*>*/}
          <Route path='/' exact component={Home}/>
          <Route path='/team' exact component={Team}/>
          <Route path='/blog' exact component={Blog}/>
          <Route path='/agriculture' exact component={Agriculture}/>
          <Route path='/forestry' exact component={Forestry}/>
          <Route path='/blog/:id' exact component={BlogPost}/>
        {/*</AnimatedSwitch>*/}
        <Footer/>
        </ScrollToTop>
      </Router>
    </div>
  );
};

export default App;
