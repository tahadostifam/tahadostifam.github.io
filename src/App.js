import AOS from 'aos';
import "aos/dist/aos.css";
import React from 'react';
import AboutMe from './components/about_me/about_me';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import RecentWorks from './components/recent_works/recent_works';
import Reviews from "./components/reviews/reviews";
import Services from './components/services/services';
import SplitLoader from './components/split_loader/split_loader';
AOS.init({
  once: true,
  mirror: true
});

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showLoader: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showLoader: false });
      console.log("mount done");
    }, 5000);
  }

  render() {
    return (
      <div className="App">
        {process.env.NODE_ENV === 'production' ?
          <SplitLoader show={this.state.showLoader} />
          : undefined}

        <Header />
        <Intro />
        <AboutMe />
        <Services />
        <RecentWorks />
        <Reviews />
      </div>
    );
  }
}

export default App;
