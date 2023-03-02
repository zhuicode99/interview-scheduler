import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss"

export default function InterviewerList(props) {
  const interviewerListItem = props.interviewers.map((interviewer) => {
    return(
      <ul>
      <InterviewerListItem 
        key={interviewer.id}
        name={interviewer.name} 
        avatar={interviewer.avatar} 
        selected={interviewer.id === props.value}//props.day是从app。js传过来的
        setInterviewer={() => props.onChange(interviewer.id)} 
        //这样不会一刷新页面就trigger function
      />
    </ul>
  )
})
  return (
  
  <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">{interviewerListItem}</ul>
  </section>
  
  )
}
