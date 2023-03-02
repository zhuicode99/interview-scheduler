import React from "react";
import InterviewerListItem from "./InterviewerListItem";


export default function InterviewerList(props) {
  const interviewerListItem = props.interviewers.map((interviewer) => {
    return(
      <ul>
      <InterviewerListItem 
        key={interviewer.id}
        name={interviewer.name} 
        avatar={interviewer.avatar} 
        selected={interviewer.id === props.interviewer}//props.day是从app。js传过来的
        setInterviewer={props.setInterviewer}  
      />
    </ul>
  )
})
  return (
   interviewerListItem
  )

}