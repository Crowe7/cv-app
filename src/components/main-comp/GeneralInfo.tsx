import React, { Component } from 'react'

export interface GeneralInfoState {
    Name: string,
    PhoneNumber: string,
    Email: string,

}

type MyState = {
    Info: GeneralInfoState,
    InfoCount: GeneralInfoState[]
}

export default class GeneralInfo extends Component {
  render() {
    return (
      <div>GeneralInfo</div>
    )
  }
}
