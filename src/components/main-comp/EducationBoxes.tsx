import React, { Component } from 'react'
import {EducationInfo} from "./Main"


type MyProps = {
    InfoCount: EducationInfo[],
    handleChange?: Function
    handleDelete?: Function
    handleDateChange?: Function
    handleEducationFlip?: Function
  }


export default class EducationBoxes extends Component<MyProps> {
  render() {
    const {InfoCount} = this.props
    return (
      <div>
        {InfoCount.map((info) => {
            return <div key={info.ID}> chungus </div>
          })
        }
      </div>
    )
  }
}

