import React, { useState } from 'react'
import classes from './Question.module.scss'
import Expand from 'react-expand-animated';

const Question = ({item}) => {
  const [ showAnswer, setShowAnswer ] = useState(false)
  return (
    <div className={classes.container}>
      <h4 className={classes.question}
        onClick={() => setShowAnswer(prev => !prev)}
      >
        {item.question}
      </h4>
      <Expand open={showAnswer} duration={300}>
        <div className={classes.answer}>
          { item.answer }
        </div>
      </Expand>
    </div>
  )
}

export default Question
