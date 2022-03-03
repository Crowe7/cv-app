import React, { Component, ChangeEvent } from 'react'
import JobExp from './JobExp'
import EducationExp from './EducationExp';
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

export interface EducationInfo {
  School: string,
  Major: string,
  Degree: string,
  EducationStart: Date| null,
  EducationEnd: Date| null,
  Student: boolean,
  ID: string
}

type MyState = {
  JobInfoState: JobInfo
  JobInfoCount: JobInfo[]
  GeneralInfoState: GeneralInfoState
  EducationInfoState: EducationInfo,
  EducationInfoCount: EducationInfo[]
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
    },

    EducationInfoState: {
      School: '',
      Major: '',
      Degree: '',
      EducationStart: new Date(),
      EducationEnd: new Date(),
      Student: false,
      ID: uuidv4()
    },
    EducationInfoCount: []

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

  /*----------------Edu Info-----------------*/

  educationHandleClick = () => {
    this.setState({
      EducationInfoCount: this.state.EducationInfoCount.concat(this.state.EducationInfoState),
      EducationInfoState: {
        School: '',
        Major: '',
        Degree: '',
        EducationStart: new Date(),
        EducationEnd: new Date(),
        Student: false,
        ID: uuidv4()
      }
    })
  }

  educationHandleChange = (ID:string) => (e:any) => {
    const CurrentInfoCount = [...this.state.EducationInfoCount]
    for(let i = 0; i < CurrentInfoCount.length; i++) {
      if(ID === CurrentInfoCount[i].ID) {
        //these are computed propery names [e.targer.name]
        CurrentInfoCount[i] = {...CurrentInfoCount[i], [e.target.name]: e.target.value};
        this.setState({EducationInfoCount: CurrentInfoCount});
      }
    }
  }

  educationHandleDateChange = (ID:string, newValue:Date|null, dateName: string) => {
    const CurrentInfoCount = [...this.state.EducationInfoCount]
    for(let i = 0; i < CurrentInfoCount.length; i++) {
      if(ID === CurrentInfoCount[i].ID) {
        CurrentInfoCount[i] = {...CurrentInfoCount[i], [dateName]: newValue};
        this.setState({EducationInfoCount: CurrentInfoCount});
      }
    }
  }

  handleStudentFlip = (ID:string) => (e:any) => {
    const CurrentInfoCount = [...this.state.EducationInfoCount]
    for(let i = 0; i < CurrentInfoCount.length; i++) {
      if(ID === CurrentInfoCount[i].ID) {
        CurrentInfoCount[i] = {...CurrentInfoCount[i], Student: e.target.checked};
        this.setState({EducationInfoCount: CurrentInfoCount});
      }
    }
  }

  educationHandleDelete = (ID:string) => {
    const CurrentInfoCount = [...this.state.EducationInfoCount]
    for(let i = 0; i < CurrentInfoCount.length; i++) {
      if(ID === CurrentInfoCount[i].ID) {
        CurrentInfoCount.splice(i, 1);
        this.setState({EducationInfoCount: CurrentInfoCount})
      }
    }
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
          <EducationExp
          InfoCount={this.state.EducationInfoCount}
          handleClick={this.educationHandleClick}
          handleChange={this.educationHandleChange}
          handleDateChange={this.educationHandleDateChange}
          handleEducationFlip={this.handleStudentFlip}
          handleDelete={this.educationHandleDelete}
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
