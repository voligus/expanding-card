import Card from "./Card";
import styles from "./Cardbox.module.css";
import { useState } from "react";
function Cardbox() {
  const intitCard = [
    {
      name: 1,
      link:
        "https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1952&q=80",
      state: "unactive"
    },
    {
      name: 2,
      link:
        "https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=444&q=80",
      state: "unactive"
    },
    {
      name: 3,
      link:
        "https://images.unsplash.com/photo-1514632595-4944383f2737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      state: "unactive"
    },
    {
      name: 4,
      link:
        "https://images.unsplash.com/photo-1558486012-817176f84c6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=370&q=80",
      state: "unactive"
    },
    {
      name: 5,
      link:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      state: "unactive"
    }
  ];
  const [cards, setCards] = useState(intitCard);
  function onclick(name) {
    const newcards = cards.map((card) => {
      if (card.name === name) {
        return { ...card, state: "active" };
      } else {
        return { ...card, state: "unactive" };
      }
    });
    setCards(newcards);
  }
  const showCards = cards.map((card) => (
    <Card
      key={card.name}
      name={card.name}
      link={card.link}
      state={card.state}
      onclick={() => onclick(card.name)}
    />
  ));
  return <div className={styles.div}>{showCards}</div>;
}
export default Cardbox;
