import React, { Component, PropTypes } from 'react'

class ItemCard extends Component {
  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = props
  }

  render () {
    return (
      <h1>
        {this.state.name}
      </h1>
    )
  }

}

export default ItemCard
