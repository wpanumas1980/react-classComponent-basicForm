import React, { Component } from 'react'

export default class Register extends Component {
    state = {
        name: "",
        lastName:""
      }
    
    inputName=(e)=>{
        this.setState({name:e.target.value})
    }
    inputLastname=(e)=>{
        this.setState({lastName:e.target.value});
    }
    onSubmit = (e)=>{
        e.preventDefault();
        const{name,lastName} = this.state;
        alert(`${name},${lastName}`);
        this.reSetFrom();    
    }
    reSetFrom = ()=>{
        this.setState({name:""});
        this.setState({lastName:""});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="name" value={this.state.name} onChange={this.inputName}></input>
                    <input name="lastName" value={this.state.lastName} onChange={this.inputLastname}></input>
                    <button htmlFor="submit">OK</button>
                </form>
            </div>
        )
    }
}
