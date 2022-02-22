import React, {Component} from "react";
import { v4 as uuidv4 } from 'uuid';
interface JobInfo {
  Title: string
  Employer: string
  StartingDate: Date
  EndingDate: Date
  Exployed: boolean
  JobInfo: string
  ID: string
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
      JobInfo: '',
      ID: uuidv4()
    },
    InfoCount: [],
  }


  render() {
    return (
      <div>jobExp</div>
    )
  }
}
