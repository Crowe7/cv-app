import React, { Component } from 'react'
import JobExp from './JobExp'
import GeneralInfo from './GeneralInfo'
// might have to create a state here that renders the main exp if on true and cv if on false, and pass that to the header so the switch is a child oh main still
export default class Main extends Component {



  render() {
    return (
      <div>
        <GeneralInfo/>
        <JobExp/>
      </div>
    )
  }
}
