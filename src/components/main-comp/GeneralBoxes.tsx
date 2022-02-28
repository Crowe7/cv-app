import React, { Component } from 'react'
import {GeneralInfoState} from "./GeneralInfo"

type MyProps = {
    InfoCount: GeneralInfoState[],
    handleChange?: Function
    handleDelete?: Function
  }

export default class GeneralBoxes extends Component {
  render() {
    return (
      <div>GeneralBoxes</div>
    )
  }
}
