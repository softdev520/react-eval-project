import './header.scss'

import React, {Component} from 'react'

export default class Header extends Component {
  static propTypes = {}

  state = {}

  render () {
    return (
      <div styleName='header'>
        <h2>Welcome to Clear Capital React!</h2>
      </div>
    )
  }
}
