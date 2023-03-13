import React,{useState, useEffect} from "react";

import "components/Application.scss";
import DayList from "./DayList";
import InterviewerList from "./InterviewerList";
import Appointment from "./Appointment";
import axios from 'axios';
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import useApplicationData from 'hooks/useApplicationData';

export default function Application(props) {

  const {state, setDay, bookInterview, cancelInterview} = useApplicationData();


  const dailyAppointments = getAppointmentsForDay(state, state.day)
  //这里的state就是axios返回的all数据，state。day就是上面的monday。

  // const setDay = day => setState({ ...state, day });
  //setDay function can remain because we are only using it to update our DayList component.
  //通常来说，对于只更新一个属性的状态更新函数，不需要使用函数式更新或者 prev 参数。因为这些函数只更新一个属性，不需要关心其他属性的值是否已经更新。
  
  /* const setDays = (days) => setState(prev => ({ ...prev, days })); */
 //这setdays function不需要保留了，没啥需要更新的
  // const setInterviewer = (interviewer) => setState(prev => ({ ...prev, interviewer }));



  const appointmentList = dailyAppointments.map(
    appointment => {
      const interview = getInterview(state, state.appointments.interview);
      const interviewers = getInterviewersForDay(state, state.day);
      return (
        <Appointment
			  key={appointment.id }
        // {...appointment}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
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
      </section>
    </main>
  );
}
