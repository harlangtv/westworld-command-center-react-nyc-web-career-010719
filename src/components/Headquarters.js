import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'


class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.
  constructor(props){
    super(props)
    this.state = {
      currentHost: null
    }
  }

  handleClick = (host) => {
    this.setState({currentHost: host})
  }
  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        {/* Something goes here.... */}
          <ColdStorage
            hosts={this.props.hosts}
            handleClick={this.handleClick}
            />
        </Grid.Column>

        <Grid.Column width={5}>
          <Details
            currentHost={this.state.currentHost} />
        </Grid.Column>
        <Grid.Column width={3}>
          <LogPanel />
        {/* and here. Take visual cues from the screenshot/video in the Readme. */}

        </Grid.Column>

      </Grid>
    )
  }
}

export default Headquarters;
