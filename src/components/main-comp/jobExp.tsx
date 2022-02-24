import React, {Component} from "react";
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import JobExpBoxes from "./JobExpBoxes";
export interface JobInfo {
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
// this is a curried function 
  handleChange = (ID:string) => (e:any) => {
    const CurrentInfoCount = [...this.state.InfoCount]
    for(let i = 0; i < CurrentInfoCount.length; i++) {
      if(ID === CurrentInfoCount[i].ID) {
        //these are computed propery names [e.targer.name]
        CurrentInfoCount[i] = {...CurrentInfoCount[i], [e.target.name]: e.target.value};
        this.setState({InfoCount: CurrentInfoCount});
      }
    }
  }

  handleDelete = (ID:string) => {
    const CurrentInfoCount = [...this.state.InfoCount]
    for(let i = 0; i < CurrentInfoCount.length; i++) {
      if(ID === CurrentInfoCount[i].ID) {
        CurrentInfoCount.splice(i, 1);
        this.setState({InfoCount: CurrentInfoCount})
      }
    }
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
      <div>
        <JobExpBoxes InfoCount={this.state.InfoCount} handleChange={this.handleChange} handleDelete={this.handleDelete}/>
        <Button onClick={this.handleClick} variant="contained">Add Job</Button>
      </div>
    )
  }
}
