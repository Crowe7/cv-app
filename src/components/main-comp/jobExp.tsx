import React, {Component} from "react";
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import JobExpBoxes from "./JobExpBoxes";
import Box from '@mui/material/Box';

export interface JobInfo {
  Title: string
  Employer: string
  StartingDate: Date|null
  EndingDate: Date|null
  Employed: boolean
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
      Employed: false,
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

  handleDateChange = (ID:string, newValue:Date|null, dateName: string) => {
    const CurrentInfoCount = [...this.state.InfoCount]
    for(let i = 0; i < CurrentInfoCount.length; i++) {
      if(ID === CurrentInfoCount[i].ID) {
        CurrentInfoCount[i] = {...CurrentInfoCount[i], [dateName]: newValue};
        this.setState({InfoCount: CurrentInfoCount});
      }
    }
  }

  handleEmployedFlip = (ID:string) => (e:any) => {
    const CurrentInfoCount = [...this.state.InfoCount]
    for(let i = 0; i < CurrentInfoCount.length; i++) {
      if(ID === CurrentInfoCount[i].ID) {
        console.log('e')
        CurrentInfoCount[i] = {...CurrentInfoCount[i], Employed: e.target.checked};
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
      <Box >
        <Box sx={{padding: "10px", borderBottom: 3, borderColor: "#94D2BD"}}>
          <h1>Add Job Experience</h1>
        </Box>
        <div>
          <JobExpBoxes InfoCount={this.state.InfoCount} handleChange={this.handleChange} handleDelete={this.handleDelete} handleDateChange={this.handleDateChange} handleEmployedFlip={this.handleEmployedFlip}/>
          <Button sx={{width: "700px", marginTop: "2px"}} onClick={this.handleClick} variant="contained">Add Job</Button>
        </div>
      </Box>
    )
  }
}
