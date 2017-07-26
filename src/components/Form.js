import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
export default class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      submitted: false
    }
    this.handleFormSubmission = this.handleFormSubmission.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
  }
  handleFormSubmission(event){
    event.preventDefault();
    // We want to redirect. So we set state so it renders a <Redirect/>
    this.setState({
      submitted: true
    })
  }
  handleUsernameChange(event){
    this.setState({
      username: event.target.value
    })
  }
  render(){

    if (this.state.submitted === true){
      return <Redirect to={`/users/${this.state.username}`} />
    }

    return (
      <form onSubmit={this.handleFormSubmission}>
        <div>

        <input type="text" value={this.state.username} onChange={this.handleUsernameChange} placeholder="GitHub Username"/>
        <input type="submit" value="View Repos"/>
        </div>

      </form>
    )
  }
}
