import React from 'react'
import { connect } from 'react-redux'


function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(React.createClass({
  render() {
    return (
      <div id="default-layout">
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}))
