import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'


const Details = (props) => {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  const renderSomething = () => (<Image size='medium' src={Images.westworldLogo}/>)

  const renderHost = () => (<HostInfo currentHost={props.currentHost} />)

  return(
    <Segment id="details" className="HQComps">
      {props.currentHost === null ? renderSomething() : renderHost()}

    </Segment>
  )
}

export default Details
