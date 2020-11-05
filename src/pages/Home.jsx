import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Home.less'

export default class Home extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="title">
        home
      </div>
    )
  }
}
