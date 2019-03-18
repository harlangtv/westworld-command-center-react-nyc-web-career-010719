import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {

  return(
    /* NOTE: The className "host selected" renders a different style than simply "host". */
    <Card
      className="host selected"
      onClick={()=>{props.handleClick(props.host)}}
      image={props.image}
      id={props.id}
      raised
    />
  )
}

export default Host
