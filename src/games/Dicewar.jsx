import React from 'react'
import "../App.css";
import ladder from "../assets/lader.png";
import snake1 from "../assets/snake1.png";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpg";import zero from "../assets/0.png";import  { useState, useEffect } from "react";
const Dicewar = () => {  const [imageOne, setImageOne] = useState(zero);
  const [positionTwo, setPositionTwo] = useState(1); const [message, setMessage] = useState("player RED roll first");
  const [positionOne, setPositionOne] = useState(1);
  const [imageTwo, setImageTwo] = useState(zero);
  
  const handleRollDices = () => {
    const diceValueTwo = Math.floor(Math.random() * 6) + 1;
    const newPositionTwo= positionTwo + diceValueTwo;
    const displayImageTwo =
      diceValueTwo === 1
        ? one
        : diceValueTwo === 2
        ? two
        : diceValueTwo === 3
        ? three
        : diceValueTwo === 4
        ? four
        : diceValueTwo === 5
        ? five
        : diceValueTwo ===  6
        ? six
        : zero;

    setImageTwo(displayImageTwo);
setMessage("Blue your Turn")
    // Define snakes and ladders
    const snakesAndLadders = {
      16: 6,
      47: 26,
      49: 11,
      56: 53,
      62: 19,
      64: 60,
      87: 24,
      93: 73,
      95: 75,
      98: 78,
    };

    // Check if there's a snake or ladder at the new position
    const newPositionWithSnakeOrLadder =
      snakesAndLadders[newPositionTwo] || newPositionTwo;
setPositionOne(2)
    setPositionTwo(
      newPositionWithSnakeOrLadder > 100
        ? positionOne
        : newPositionWithSnakeOrLadder
    );
  }; const handleRollDice = () => {
    const diceValueOne = Math.floor(Math.random() * 6) + 1;
    const newPositionOne = positionOne + diceValueOne;
    const displayImageOne =
      diceValueOne === 1
        ? one
        : diceValueOne === 2
        ? two
        : diceValueOne === 3
        ? three
        : diceValueOne === 4
        ? four
        : diceValueOne === 5
        ? five
        : diceValueOne === 6
        ? six
        :diceValueOne == null? zero:"";
console.log(diceValueOne); const result = imageOne>imageTwo?"Blue Win":imageOne<imageTwo?"RED Win":"Match Tie"
    setImageOne(displayImageOne);setMessage(result)
setPositionTwo(2);
    // Define snakes and ladders
    const snakesAndLadders = {
      16: 6,
      47: 26,
      49: 11,
      56: 53,
      62: 19,
      64: 60,
      87: 24,
      93: 73,
      95: 75,
      98: 78,
    };

    // Check if there's a snake or ladder at the new position
    const newPositionWithSnakeOrLadder =
      snakesAndLadders[newPositionOne] || newPositionOne;

    setPositionOne(
      newPositionWithSnakeOrLadder > 100
        ? positionOne
        : newPositionWithSnakeOrLadder
    );
  };
  return (
    <>
      <div><h1 className='bg-light text-dark'> Dice War</h1><h3>Rules:</h3><p>player with highest Dice value  winner</p> <img
          src={imageTwo}
          alt="img"
          height={80}
          width={85}
          className="bg-info text-info"
        ></img> <button disabled={positionOne==2}
          className="btn btn-danger text-light fw-bold m-4 border border-light"
          onClick={handleRollDices}
        >
          Roll Dice
        </button>
          {positionOne}
        <button disabled={positionTwo==2}
          className="btn btn-primary text-light fw-bold m-4 border border-light"
          onClick={handleRollDice}
        >
          Roll Dice
        </button>
        <img
          src={imageOne}
          alt="img"
          height={80}
          width={85}
          className="bg-info text-info"
        ></img><h3>{message}</h3></div> 
    </>
  )
}

export default Dicewar
