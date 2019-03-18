import React, { Component } from 'react'
import '../stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './WestworldMap'
import Headquarters from './Headquarters'


class WestworldContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      hosts: [],
      areas: []
    }
  }


  fetchHosts(){
    let hostsUrl = 'http://localhost:4000/hosts'
    fetch(hostsUrl)
      .then(res => res.json())
      .then(hosts =>{
        this.setState({ hosts })
    })
  }

  fetchAreas(){
    let areasUrl = 'http://localhost:4000/areas'
      fetch(areasUrl)
        .then(res => res.json())
        .then(areas => {
          this.setState({ areas })
        })
  }


  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  componentDidMount() {
    this.fetchHosts()
    this.fetchAreas()
  }
  render(){
    return (
      <Segment id='app'>
          <WestworldMap
            areas={this.state.areas}
            hosts={this.state.hosts}
            />
          <Headquarters
            areas={this.state.areas}
            hosts={this.state.hosts}
            />
      </Segment>
    )
  }
}

export default WestworldContainer;
