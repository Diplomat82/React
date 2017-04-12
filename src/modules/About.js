import React from 'react'

export default React.createClass({
  render() {
    return (
      <section id="about">
        <h1>Ready, Set, React</h1>
        <p>This application makes a React.js application ready to run</p>
        <p>and {this.props.name} loves React</p>
      </section>
    )
  }
})
