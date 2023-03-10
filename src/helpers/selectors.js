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