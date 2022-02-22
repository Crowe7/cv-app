import React, {Component} from "react";

interface JobInfo {
  Title: string
  Employer: string
  StartingDate: Date
  EndingDate: Date
  Exployed: boolean
  JobInfo: string
}

type MyState = {
  Info: JobInfo
  InfoCount: JobInfo[]
}

export default class jobExp extends Component {
  state: MyState = {
    Info: {
      Title: '',
      Employer: '',
      StartingDate: new Date(),
      EndingDate: new Date(),
      Exployed: false,
      JobInfo: ''
    },
    InfoCount: [],
  }
  render() {
    return (
      <div>jobExp</div>
    )
  }
}
