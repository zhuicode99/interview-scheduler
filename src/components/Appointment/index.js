import React from "react";
import Header from "components/Appointment/Header"



export default function Appointment(props) {
  //Even though we are using index.js to create 
  //our main <Appointment> component, 
  //we still use the syntax export default function Appointment.


  return (
<>
<article className="appointment"></article>
<Header />
</>

  )

}

