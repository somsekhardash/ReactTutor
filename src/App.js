import React, { Component } from 'react';
import Intro from './pages/intro';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

var Home = ()=> {
  return <div> This is my Home </div>
}


class App extends Component {
  constructor(){
      super();
      this.state = {som :"som"}
    }

    
  render() {
    //let som = "som";
    setTimeout(()=> {
      this.setState({som:"somsekhardash"})
    },3000)
    return (
      <Router>
        <div className="App">
          My App {this.state.som}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/som" component={Intro} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
