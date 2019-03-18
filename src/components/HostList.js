import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {
  function renderHosts(){
    return props.hosts.map((host, id) => {
      return <Host host={host} key={host.id} image={host.imageUrl} handleClick={props.handleClick}/>
    })
  }

  return(
    <Card.Group itemsPerRow={6}>
      {renderHosts()}
    </Card.Group>
  )
}

export default HostList
