import logo from './blackjack-logo.png';
import './App.css';
import Displaycard from './Displaycard';
import randomCard from './randomcard';
import Navbar from './Navbar';
import { useState } from 'react';

function App() {
  let wallet = 100;
  const [cards, setCard] = useState([randomCard()]);
  const [bankerCards, setBankerCard] = useState([randomCard(), {suit: "0", number: "0", value: "0"}]);
  let result = 0;
  let resultBanker = 0;

  return (
    <>
      <Navbar balance={wallet} logo={logo}/>
      <div className="title">
        <h3>Player</h3>
      </div>
      <div className="App">
        {
          cards?.map((val) => {
            result += val.value
            return <Displaycard suit={val.suit} number={val.number}/>
          })
        }
      </div>
      <div className="App">
        Result {result}
      </div>
      <div className="App">
        <button onClick={ ()=> {
            if(result <= 21)
            {
              setCard([...cards,randomCard()])
            }
            else {
              alert("Bust!")
            }
          }}>Hit</button>
        <button onClick={()=> {
          if (bankerCards.length <= 2){
            let tempArr = bankerCards;
            tempArr.pop();
            setBankerCard([tempArr,randomCard()])
          }
        }}>Stand</button>

        
      </div>
      <div className="title">
        <h3>Banker</h3>
      </div>
      <div className="App">
        {/* <Displaycard suit={bankerCards[0].suit} number={bankerCards[0].number}/> */}
        {
          bankerCards?.map((val) => {
            resultBanker += val.value
            return <Displaycard suit={val.suit} number={val.number}/>
          })
        }
      </div>
      <div className="App">
        Result {resultBanker}
      </div>
      
    </>
  );
}

export default App;