import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'


const WestworldMap = (props) => {

  function renderAreas(){
    console.log(props)
    return props.areas.map((area, id) => {
      return <Area name={area.name} limit={area.limit} auth_req={area.auth_req} key={area.id} />
    })
  }

  return (
    <Segment id="map" >
      {renderAreas()}
    </Segment>
  )
}

export default WestworldMap
