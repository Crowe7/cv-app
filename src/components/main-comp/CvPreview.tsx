import React, { Component } from 'react'
import { GeneralInfoState } from './Main'
import { JobInfo } from './Main'
import { EducationInfo } from './Main'

type MyProps = {
    JobInfo: JobInfo[],
    EducationInfo: EducationInfo[],
    GeneralInfo: GeneralInfoState,
}

export default class CvPreview extends Component<MyProps> {
  render() {
    const {JobInfo, EducationInfo, GeneralInfo} = this.props
    return (
      <div>Map out each bit of info then style</div>
    )
  }
}
