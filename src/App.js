import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldContainer from './components/WestworldContainer'
import Headquarters from './components/Headquarters'


class App extends Component {

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  render(){
    return (
      <Segment id='app'>
          <WestworldContainer />
      </Segment>
    )
  }
}

export default App;
