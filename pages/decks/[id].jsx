import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import styles from "/styles/utils.module.css";

const Deck = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const [cardArr, setCardArr] = useState([]);
  const [cards, setCards] = useState([]);
  const { id } = router.query;

  useEffect(async () => {
    if (!id) {
      return;
    }
    const res = await axios.get(`/api/decks/${id}`);
    setData(res.data);
    setCardArr(res.data.card_ids.split(","));
  }, [id]);

  useEffect(async () => {
    const resArr = [];
    for (let i = 0; i < cardArr.length; i++) {
      let res = await axios.get(`https://api.scryfall.com/cards/${cardArr[i]}`);
      resArr.push(res);
    }
    setCards(resArr);
  }, [cardArr]);

  const deckList = cards.map((cards, index) => (
    <div key={index} className={styles.listItem}>
      <button key={index + 2}>X</button>
      <li key={index + 1}>{cards.data.name}</li>
    </div>
  ));

  return (
    <Layout deck>
      <div className={styles.container}>
        <h1>{data.deck_name}</h1>
        <div className={styles.deckListItem}>{deckList}</div>
      </div>
    </Layout>
  );
};

export default Deck;
