import './App.css';
import Header from './components/Header'
import Cards from './components/Cards'
import CardCounter from './components/CardCounter'
import React from 'react';
function App() {
  const [cards, setCards] = React.useState([]);
  //const [clickedCard, setClickedCard] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [start, setStart] = React.useState(false);
  //const [cardMatch, setCardMatch] = React.useState([]);

  function add(){
    setCounter(prevValue => prevValue + 1)

  }

  function subtract(){
    counter === 0 ? (setCounter(0)) : (setCounter(prevValue => prevValue - 1))

  }


  function startGame(){

    if(counter >= 2 && counter % 2 === 0){

      setStart(prevValue => !prevValue)
      const newArray = []
      for(let i=0; i < counter; i++){
        newArray.push({
          id:i+1,
          on:false,
          card_value:setCardValue(i+1),
          matched:false,
        })

        setCards(()=> (newArray.sort(() => Math.random() - 0.5)))
      }

    } else{
       alert("You an even amount of cards and more than 4")
     }
  }


  function setCardValue(index) {
    if(index === 1){
      return index
    } else if(index === 2){
      return index-1
    } else if (index % 2){
      return index -1
    } else{
      return index -2
    }

  }


  //should be an useEffect due to the re-rendering
  function toggle(id, card_value){
    let matchArr = (cards.map(card => card.on === true ? [card.id, card.card_value] : "")).filter(e =>  e)
    console.log(matchArr)
    if(matchArr.length === 2 && matchArr[0][1] === matchArr[1][1]) {
      console.log(0)
      setCards(prevState => {
        return prevState.map(card => {
          if(card.id ===  matchArr[0][0] || card.id === matchArr[1][0]){
          return {...card, matched: !card.matched}
        } else{ return card }
        })
      })
    }
    if (cards.map(card => (card.on)).filter(card_On => card_On === true).length === 2){
      setCards(prevCards => {
        return prevCards.map((card) => {
          return {...card, on: false}
        }
      )
    })

  } else {
    setCards(prevCards => {
      return prevCards.map((card) => {
        return card.id === id ? {...card, on: !card.on}: card
      }
    )
  })
  }
}


  return (
    <div className="App">
    <Header />
    {
      !start  ? <CardCounter increaseCard={add} subtractCards={subtract} cardAmount={counter} startGame={startGame}/> :
      <div className="memory">{cards.map(card => (
          <Cards
          key={card.id}
          on={card.on}
          matched = {card.matched}
          card_value={card.card_value}
          toggle={() => toggle(card.id, card.card_value)}/>
        ))}
        </div>
    }
    </div>
  );
}

export default App;

/*
React.useEffect(() => {
  let matchArr = (cards.map(card => card.on === true ? [card.id, card.card_value] : "")).filter(e =>  e)
  if((cards.map(card => (card.on))).filter(cardOn => cardOn == true).length > 2) {
    setCards(prevCards => {
      return prevCards.map((card) => {
        return {...card, on: false}
      }
    )
  })
}
}, [cards]
)
*/
