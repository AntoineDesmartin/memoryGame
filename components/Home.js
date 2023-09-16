import { useState, useEffect } from "react";
import Card from "./Card";
import styles from "../styles/Home.module.css";
import { useRef } from "react";


function Home() {

  const [newDeck, setNewDeck] = useState([]);
  const [selected, setSelected] = useState([]);
  const [compt, setCompt] = useState(0);
  const [c,setC]=useState(0);
  const counter = useRef(0);
  // console.log('selected :>> ', selected);
  // console.log('compt :>> ', compt);
  // console.log('c :>> ', c);


  const random = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setNewDeck(array);
  };

  useEffect(() => {
    const azerty = random(deck);
  }, []);

  const selectCard = (id) => {
    setSelected([...selected, id]);
  };
  // const selectCard = (id) => {
  //   setSelected((prevSelected) => [...prevSelected, id]);
  // };

  async function attendre() {
   
    await setTimeout(function () {
      let selectedStateCopy = [...selected]
      let newSelected = selectedStateCopy.slice(0, compt);
      // console.log('slice :>> ', newSelected);
      setSelected(newSelected);
      setC(c+1);
    }, 500);
  }
  function isEven(number) {
    return number % 2 === 0;
  }

  if (selected.length > compt + 1) {
      console.log("selected.length :",selected.length);
      console.log("compt + 1",compt + 1);
      counter.current++
    if (
      
      (isEven(selected[compt]) && selected[compt + 1] + 1 === selected[compt]) 
      ||
      (!isEven(selected[compt]) && selected[compt + 1] - 1 === selected[compt])
    ) {
      
      setC(c+1);
      console.log('if');
      setCompt(compt + 2);
      
      
    } else {
      
      console.log('else');
      attendre();
    }
  }
  // console.log(selected.length);

  async function attendre2() {
    await setTimeout(function () {
      setSelected([]);
      setCompt(0);
    }, 1000);
  }
  if (selected.length === 16) {
    attendre2();
    
  }
  
  const cardsToDisplay = newDeck.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        name={card.name}
        image={card.image}
        selectCard={selectCard}
        selected={selected.includes(card.id)}
      />
    );
  });
let rstyle ={"color":"white"}
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Memory Game 🧠 </h1>
        <span style={rstyle}>compteur: {c}</span>
        <div className={styles.headerDivider} />
      </div>

      <div className={styles.main}>
        <div className={styles.grid}>{cardsToDisplay}</div>
      </div>
    </div>
  );
}

const deck = [
  { id: 1, name: "billiard ball", image: "/billiardball.svg" },
  { id: 2, name: "billiard ball", image: "/billiardball.svg" },
  { id: 3, name: "bubble tea", image: "/bubbletea.svg" },
  { id: 4, name: "bubble tea", image: "/bubbletea.svg" },
  { id: 5, name: "cactus", image: "/cactus.svg" },
  { id: 6, name: "cactus", image: "/cactus.svg" },
  { id: 7, name: "dog", image: "/dog.svg" },
  { id: 8, name: "dog", image: "/dog.svg" },
  { id: 9, name: "laptop", image: "/laptop.svg" },
  { id: 10, name: "laptop", image: "/laptop.svg" },
  { id: 11, name: "octopus", image: "/octopus.svg" },
  { id: 12, name: "octopus", image: "/octopus.svg" },
  { id: 13, name: "strawberry", image: "/strawberry.svg" },
  { id: 14, name: "strawberry", image: "/strawberry.svg" },
  { id: 15, name: "sunglasses", image: "/sunglasses.svg" },
  { id: 16, name: "sunglasses", image: "/sunglasses.svg" },
];
export default Home;

// not same 2 Home.js:61:14
// Array [ 15, 16 ]

// Home.js:51:16
// not same 2 Home.js:61:14

// Array [ 15, 16 ]
// Home.js:51:16

// not same 2 Home.js:61:14
// Array [ 15, 16 ]

// Home.js:51:16
// Array [ 15, 16 ]

// Home.js:51:16
// Array [ 15, 16 ]

// Home.js:51:16
// Array [ 15, 16 ]

// Home.js:51:16
// not same 2 Home.js:61:14
// Array [ 15, 16 ]

// Home.js:51:16
// Array [ 15, 16 ]
