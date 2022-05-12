import React from 'react'

function CardCounter(props){

  return(
    <div>
    <h1 className="cardcounter--amount">{props.cardAmount}</h1>
    <div className="cardcounter">

      <button onClick={props.increaseCard} className="cardcounter--add">+</button>
      <button onClick={props.subtractCards} className="cardcounter--subtract">-</button>


    </div>
        <button onClick={props.startGame} className="cardcounter--start">Start</button>
    </div>
  )
} export default CardCounter;
