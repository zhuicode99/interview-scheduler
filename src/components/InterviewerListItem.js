import React from "react"
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {

  let interviewerClass = classNames("interviewers__item",{"interviewers__item--selected":props.selected})
  return (
    <li className={interviewerClass} onClick={() => props.setInterviewer(props.key)}>
    {/* 点击后提取这个li的name信息，让interviewer变成这个人 */}
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected? props.name:null}
    </li>
  )

}