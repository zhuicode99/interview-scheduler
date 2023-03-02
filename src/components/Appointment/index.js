import React from "react";
import "components/Appointment/styles.scss"
import Header from 'components/Appointment/Header';
import Empty from 'components/Appointment/Empty';
import Show from 'components/Appointment/Show';
import Form from 'components/Appointment/Form';
import Status from 'components/Appointment/Status';
import Confirm from 'components/Appointment/Confirm';
import Error from 'components/Appointment/Error';


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

