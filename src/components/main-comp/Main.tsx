import React, { Component, ChangeEvent } from 'react'
import JobExp from './JobExp'
import GeneralInfo from './GeneralInfo'
import { v4 as uuidv4 } from 'uuid';
// might have to create a state here that renders the main exp if on true and cv if on false, and pass that to the header so the switch is a child oh main still
export interface GeneralInfoState {
  Name: string,
  PhoneNumber: string,
  Email: string,

}

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
  JobInfoState: JobInfo
  JobInfoCount: JobInfo[]
  GeneralInfoState: GeneralInfoState
}

type MyProps = {
  Mode: boolean | undefined
}
export default class Main extends Component<MyProps> {

  state: MyState = {
    JobInfoState: {
      Title: '',
      Employer: '',
      StartingDate: new Date(),
      EndingDate: new Date(),
      Employed: false,
      JobInfo: '',
      ID: uuidv4()
    },
    JobInfoCount: [],

    GeneralInfoState: {
      Name: '',
      PhoneNumber: '',
      Email: ''
    }
  }

  /*----------------GENERAL-----------------*/
generalHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
  let genInfo = {...this.state.GeneralInfoState, [e.target.name]: e.target.value} 
  this.setState({GeneralInfoState: genInfo})
}

  /*----------------JOB INFO-----------------*/

// this is a curried function 
jobHandleChange = (ID:string) => (e:any) => {
  const CurrentInfoCount = [...this.state.JobInfoCount]
  for(let i = 0; i < CurrentInfoCount.length; i++) {
    if(ID === CurrentInfoCount[i].ID) {
      //these are computed propery names [e.targer.name]
      CurrentInfoCount[i] = {...CurrentInfoCount[i], [e.target.name]: e.target.value};
      this.setState({JobInfoCount: CurrentInfoCount});
    }
  }
}

jobHandleDateChange = (ID:string, newValue:Date|null, dateName: string) => {
  const CurrentInfoCount = [...this.state.JobInfoCount]
  for(let i = 0; i < CurrentInfoCount.length; i++) {
    if(ID === CurrentInfoCount[i].ID) {
      CurrentInfoCount[i] = {...CurrentInfoCount[i], [dateName]: newValue};
      this.setState({JobInfoCount: CurrentInfoCount});
    }
  }
}

handleEmployedFlip = (ID:string) => (e:any) => {
  const CurrentInfoCount = [...this.state.JobInfoCount]
  for(let i = 0; i < CurrentInfoCount.length; i++) {
    if(ID === CurrentInfoCount[i].ID) {
      CurrentInfoCount[i] = {...CurrentInfoCount[i], Employed: e.target.checked};
      this.setState({JobInfoCount: CurrentInfoCount});
    }
  }
}

jobHandleDelete = (ID:string) => {
  const CurrentInfoCount = [...this.state.JobInfoCount]
  for(let i = 0; i < CurrentInfoCount.length; i++) {
    if(ID === CurrentInfoCount[i].ID) {
      CurrentInfoCount.splice(i, 1);
      this.setState({JobInfoCount: CurrentInfoCount})
    }
  }
}

jobHandleClick = () => {
  this.setState({
    JobInfoCount: this.state.JobInfoCount.concat(this.state.JobInfoState),
    JobInfoState: {
      Title: '',
      Employer: '',
      StartingDate: new Date(),
      EndingDate: new Date(),
      Exployed: false,
      JobInfo: '',
      ID: uuidv4()
    }
  });
}

  render() {

    let displayMode = () => {
      if(this.props.Mode) {
        return         <div className='show'>
          <GeneralInfo handleChange={this.generalHandleChange} Info={this.state.GeneralInfoState}/>
          <JobExp
          InfoCount={this.state.JobInfoCount}
          handleChange={this.jobHandleChange}
          handleDateChange={this.jobHandleDateChange}
          handleEmployedFlip={this.handleEmployedFlip}
          handleDelete={this.jobHandleDelete}
          handleClick={this.jobHandleClick}
          />
      </div>
      } else {
        return <div>Placeholder for preview</div>
      }
    }

    return (
      displayMode()
    )
  }
}
