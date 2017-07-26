import React, { Component } from 'react';

export default class RepoList extends Component {

  constructor(props){
    super(props)

    this.state = {
      profile: {},
      repos: []
    }
  }

  componentDidMount(){
    const username = this.props.match.params.username;

    console.log("OK lets get info for ", username)

    fetch(`https://api.github.com/users/${username}`)
    .then( r => r.json() )
    .then( data => this.setState({profile: data}) )

    fetch(`https://api.github.com/users/${username}/repos`)
    .then( r => r.json() )
    .then( repos => this.setState({repos: repos}))
  }
  render(){

    const username = this.props.match.params.username;
    return (
      <div>
        <h2>{username}</h2>
        <img src={this.state.profile.avatar_url}/>


        {this.state.repos.map( r => {
          return <div key={r.id}>{r.name}</div>
        })}
      </div>
    )
  }
}
