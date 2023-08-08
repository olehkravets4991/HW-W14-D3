import './App.css';
import Displaypage from './components/Display';
import ControlledForm from './components/ControlledForm';


import {useState} from "react"

function App() {

  const [question, setQuestion]=useState({})
  const [score, setScore]= useState(0)
  const [show, setShow]= useState(false)
  
  function addPoint(){
    setScore(score + question.value)
  }
  function subPoint(){
    setScore(score - question.value)
  }

  function Reset(){
    setScore(0)
  }

  function scoreHandlers(){
    return(
      <>
        <button class="btn btn-success" onClick={addPoint}>Increase</button>
        <button class="btn btn-danger" onClick={subPoint}>Decrease</button>
      </>
    )
  }

  return (
    <div className="App">
      <div className='main'>
        <h1>Welcome to Jeopardy!</h1>
        <h4><span className="span">Score:</span> <span className="spanAns">{score}</span></h4>
        <div>
          {question?.value && scoreHandlers()}
          <button class="btn btn-success" onClick={Reset}> Reset</button>
        </div>
        <h4><span className="span">Let's Play:</span></h4>
        <ControlledForm setQuestionIs={setQuestion} setShowIs={setShow}/>
        <Displaypage questionIs={question} showIs={show} setShowIs={setShow}/>
      </div>
    </div>
  );
}

export default App;
