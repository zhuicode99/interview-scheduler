import React from "react";
import DayListItem from "./DayListItem";


export default function DayList(props){

  const dayListItems = props.days.map((day) => {
    return(
      <ul>
      <DayListItem 
        key={day.id}
        name={day.name} 
        spots={day.spots} 
        selected={day.name === props.day}//props.day是从app。js传过来的
        setDay={() => props.setDay(day.name)}  
      />
    </ul>
  )
})
  return(
    dayListItems
  )

}