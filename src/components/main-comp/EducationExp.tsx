import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

export interface EducationInfo {
    School: string,
    Major: string,
    Degree: string,
    EducationStart: Date| null,
    EducationEnd: Date| null,
}

type MyState = {
    Info: EducationInfo,
    InfoCount: EducationInfo[]
}

export default class EducationExp extends Component {
  render() {
    return (
      <div>EducationExp</div>
    )
  }
}
