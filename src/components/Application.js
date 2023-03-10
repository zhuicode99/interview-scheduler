import React,{useState, useEffect} from "react";

import "components/Application.scss";
import DayList from "./DayList";
import InterviewerList from "./InterviewerList";
import Appointment from "./Appointment";
import axios from 'axios';
import { getAppointmentsForDay } from "helpers/selectors";

export default function Application(props) {

/* 
  const [ interviewer, setInterviewer] = useState(""); */

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    interviewer: {},
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: {}
  });
  const dailyAppointments = getAppointmentsForDay(state, state.day)
  //这里的state就是axios返回的all数据，state。day就是上面的monday。

  const setDay = day => setState({ ...state, day });
  //setDay function can remain because we are only using it to update our DayList component.
  //通常来说，对于只更新一个属性的状态更新函数，不需要使用函数式更新或者 prev 参数。因为这些函数只更新一个属性，不需要关心其他属性的值是否已经更新。
  
  /* const setDays = (days) => setState(prev => ({ ...prev, days })); */
 //这setdays function不需要保留了，没啥需要更新的
  const setInterviewer = (interviewer) => setState(prev => ({ ...prev, interviewer }));

  useEffect(()=>{
    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers"),
    ])
  .then((all) =>{
    setState((prev) => ({
      ...prev,
      days: all[0].data,
      appointments: all[1].data,
      interviewers: all[2].data,
    }));
    })
  },[])

  const interviewers = [
    { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
    { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
    { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
    { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
    { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
  ];

  



  const appointmentList = dailyAppointments.map(
    appointment => {
      return (
        <Appointment
			  key={appointment.id }
			  {...appointment} 
        />
    );
  })
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <DayList
          days={state.days}
          value={state.day}
          onChange={setDay}
        />
        <nav className="sidebar__menu"></nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
      {appointmentList}
      <Appointment key="last" time="5pm" />
      <InterviewerList 
        interviewers={interviewers}
        value={state.interviewer}
        onChange={setInterviewer}
        />
      </section>
    </main>
  );
}
