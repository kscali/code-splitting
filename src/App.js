import React from 'react';
// import logo from './logo.svg';
import Page1 from './components/Page1';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';
import AsyncComponent from './components/AsyncCompnent';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'page1',
      component: null
    };
  }

  onRouteChange = route => {
    this.setState({ route });
  };

  render() {
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === 'page2') {
      const AsyncPage2 = AsyncComponent(() => import('./components/Page2'));
      return <AsyncPage2 onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === 'page3') {
      const AsyncPage3 = AsyncComponent(() => import('./components/Page3'));
      return <AsyncPage3 onRouteChange={this.onRouteChange} />;
    }

    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />;
    // } else {
    //   return <this.state.component onRouteChange={this.onRouteChange} />;
    // }
  }
}

export default App;
