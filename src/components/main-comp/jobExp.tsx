import React, {Component} from "react";
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
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

  handleClick = () => {
    this.setState({
      InfoCount: this.state.InfoCount.concat(this.state.Info),
      Info: {
        Title: '',
        Employer: '',
        StartingDate: new Date(),
        EndingDate: new Date(),
        Exployed: false,
        JobInfo: '',
        ID: uuidv4()
      }
    });
    console.log(this.state.InfoCount);
  }

  render() {
    return (
      <Button onClick={() => {this.handleClick()}} variant="contained">Add Job</Button>
    )
  }
}
