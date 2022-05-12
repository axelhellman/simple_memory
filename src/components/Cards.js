import React from 'react';


function Cards(props) {

const styles = {
        backgroundColor: props.on ? "transparent" : "grey"
    }
  const styles_matched = {
    backgroundColor: "transparent"
      }
  return(
    <div className="cards"
    style= {props.matched ? styles_matched : styles}
    onClick={props.toggle}
    disabled={props.matched}>
      <div className="cards--number">
      {(props.on && props.card_value) || (props.matched && props.card_value)}
      </div>
    </div>
  )
} export default Cards;
