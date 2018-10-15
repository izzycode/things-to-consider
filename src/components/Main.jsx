import React, { Component } from 'react'
import Form from './Form'
import Profile from './Profile'
import { BrowserRouter,  Route } from  'react-router-dom'

import '../css/Main.css'

const Main = props => {
  return(
    <div className="star-wars">
      <header>
        <img src="https://i.imgur.com/SuvBCb2.png" alt="star wars logo" />
      </header>
      <main>
        <BrowserRouter>
          <div>
            <Route path="/" component={Form} />
            <Route
              path="/:character_id"
              render={ props => {
                return (<Profile {...props}
                  key={props.match.params.character_id}  />
                )
              }
            } />
          </div>
        </BrowserRouter>
      </main>
    </div>
  )
}

export default Main
