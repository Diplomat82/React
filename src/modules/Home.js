import React from 'react'
import About from './About.js'

// export default React.createClass({
//
//
//
//
//   Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   },
//
//   wow(e){
//     console.log("wow: ",e.target.value);
//     this.setState({wow: e.target.value});
//   },
//
//
//   render() {
//
//     const element = <this.Welcome name="Sara" />;
//     const stateInAction = this.state.wow;
//
//     return (
//       <section>
//         <h1>Home Page</h1>
//         {element}
//         <input
//           type="text"
//           name="user"
//           id="user"
//           placeholder="your name"
//           onChange={this.wow}
//           required
//         />
//       {stateInAction}
//       <About name="Sara"></About>
//
//       </section>
//     )
//   }
// })

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
