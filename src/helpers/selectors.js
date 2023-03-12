export function getAppointmentsForDay(state, day) {

  let result = [];
  const filteredDay = state.days.filter(data => data.name === day)
 
  if (filteredDay.length === 0) return [];

  filteredDay.forEach((eachItem)=>{
    eachItem.appointments.forEach((num)=>{
      result.push(state.appointments[num])
    })
  })

  return result;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  
  return {
    student: interview.student, //appointment api里面的interview
    interviewer: state.interviewers[interview.interviewer],
  };//interviewer api里面的数据

}