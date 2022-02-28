import React, { Component } from 'react'
import {EducationInfo} from "./EducationExp"


type MyProps = {
    InfoCount: EducationInfo[],
    handleChange?: Function
    handleDelete?: Function
    handleDateChange?: Function
    handleEducationFlip?: Function
  }


export default class EducationBoxes extends Component {
  render() {
    return (
      <div>EducationBoxes</div>
    )
  }
}

