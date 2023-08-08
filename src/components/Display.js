import {useState} from "react"

function Displaypage(props){
    const randomQuestion = props.questionIs;

    if (props.questionIs.question){
    
    return(
        
        <div>
            <h3><span className="span">Category:</span> <span className="spanAns">{randomQuestion.category.title}</span></h3>
            <h3> <span className="span">Points:</span> <span className="spanAns">{randomQuestion.value}</span></h3>
            <h3><span className="span">Question:</span> <span className="spanAns">{randomQuestion.question}</span></h3>
            <div>
                <button class="btn btn-success" onClick={(()=>{props.setShowIs(!props.showIs)})}>Answer</button>
                {props.showIs?<h3><span className="span">Answer:</span><span className="spanAns">{randomQuestion.answer}</span> </h3> : null}
            </div>  
        </div>
        
    )
}
}

export default Displaypage;