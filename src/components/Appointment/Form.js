import React, {useState} from "react"
import Button from "components/Button"
import InterviewerList from "components/InterviewerList"

export default function Appointment(props) {

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState('');

  const reset = () => {
		setStudent('');
		setInterviewer(null);
	};

  const errorHandle = () => {
		if (student === '') {
			setError('Student name cannot be blank');
			return;
		}
		if (interviewer === null) {
			setError('You must choose an interviewer');
			return;
		}
		setError('');
		props.onSave(student, interviewer);
	};


  const cancel = () => {
    props.onCancel(reset());
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event)=> {
              setStudent(event.target.value)
            }}
          />
          <section className="appointment__errorHandle">{error}</section>
          
        </form>
        {/* bottom part */}
        <InterviewerList 
          interviewers={props.interviewers} 
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={errorHandle}>Save</Button>
        </section>
      </section>
    </main>
  )
}