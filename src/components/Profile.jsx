import React, { Component } from 'react'
import '../css/Profile.css'

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      character: {},
      character_name: this.props.match.params.character_id.replace("_", " "),
      loaderIsVisible: true,
      listIsVisible: false
    }
  }

  componentDidMount(){
    const url = `https://swapi.co/api/people/`
    fetch(url)
      .then(res => res.json())
      .then(res => {
        res.results.forEach( character => {
          if (character.name === this.state.character_name){
            this.setState({
              character: character,
              loaderIsVisible: false,
              listIsVisible: true,
            })
            document.querySelector('.loader').classList.add("hidden")
            document.querySelector('.profile__list').classList.remove("hidden")
          }
        })
      })
  }

  render(){
    let profile = this.state.character
    return(
      <div className="profile">
        <div className="loader"></div>
        <div className="profile__list hidden">
          <dl>
            <dt>Name</dt>
            <dd>{profile.name}</dd>
          </dl>
          <dl>
            <dt>Height</dt>
            <dd>{profile.height}</dd>
          </dl>
          <dl>
            <dt>Mass</dt>
            <dd>{profile.mass}</dd>
          </dl>
          <dl>
            <dt>Hair Color</dt>
            <dd>{profile.hair_color}</dd>
          </dl>
          <dl>
            <dt>Skin Color</dt>
            <dd>{profile.skin_color}</dd>
          </dl>
          <dl>
            <dt>Eye Color</dt>
            <dd>{profile.eye_color}</dd>
          </dl>
          <dl>
            <dt>Birth Year</dt>
            <dd>{profile.birth_year}</dd>
          </dl>
          <dl>
            <dt>Gender</dt>
            <dd>{profile.gender}</dd>
          </dl>
        </div>
      </div>
    )
  }
}

export default Profile
