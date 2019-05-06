import React, { Component } from 'react'
import User from './User'


export default class UserBoard extends Component {
  render() {
    return <div><h3>{ this.props.content }</h3>
          <User name="Chuck"  />
          <User name="Bruce"  />
          <User name="Arnold"  />
          <User name="Sly"  />

    </div>
  }
}

