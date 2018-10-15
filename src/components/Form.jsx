import React, { Component } from 'react'
import '../css/Form.css'

class Form extends Component {
  constructor(){
    super()
    this.state = {
      selection: {},
      characters: [],
    }

    this.displayOptions = this.displayOptions.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  displayOptions(){
    return this.state.characters.map( (char, indx) => {
      return <option key={indx} value={indx}> {char.name}</option>
    })
  }

  handleSubmit(ev){
    ev.preventDefault()
    this.props.history.push( this.state.selection.name.replace(' ','_') )
  }

  handleSelect(ev){
    let indx = ev.target.value
    let newChar = this.state.characters[indx]
    this.setState({ selection: newChar })
  }

  componentDidMount(){
    fetch('https://swapi.co/api/people')
      .then( res => res.json() )
      .then( res => {
        this.setState({
          characters: res.results,
        })
      })
  }

  render(){
    return(
      <div className="sw-select">
        <h1>Lookup any Star Wars Character!</h1>
        <form id="sw-form" onSubmit={this.handleSubmit}>
          <select name="characters" onChange={this.handleSelect}>
            <option value="---" disabled>Choose a character</option>
            { this.displayOptions() }
          </select>
          <button type="submit">Go</button>
        </form>
      </div>
    )
  }
}

export default Form
