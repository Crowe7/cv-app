import React, { Component } from 'react'
import JobExp from './JobExp'
import GeneralInfo from './GeneralInfo'
// might have to create a state here that renders the main exp if on true and cv if on false, and pass that to the header so the switch is a child oh main still

type MyProps = {
  Mode: boolean | undefined
}
export default class Main extends Component<MyProps> {
  render() {
    const {Mode} = this.props
    function changeMode() {
      if(Mode) {
        return <div>
                <GeneralInfo/>
                <JobExp/>
               </div>
      } else {
        return <div>PlaceHolder</div>
      }
    }

    return (
      changeMode()
    )
  }
}
