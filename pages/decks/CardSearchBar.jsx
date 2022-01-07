import axios from "axios";
import { useEffect, useState } from "react";
import styles from "/styles/utils.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

export default function CardSearchBar() {
  const { user } = useUser();
  const router = useRouter();

  const [names, setNames] = useState([]);
  const [value, setValue] = useState("");
  const [addedCards, setAddedCards] = useState([]);
  const [deckName, setDeckName] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setValue("");
    setAddedCards([...addedCards, value]);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleNameChange(e) {
    setDeckName(e.target.value);
  }

  function dropdownClick(e) {
    setValue(e.target.innerHTML);
  }

  async function createDeck() {
    const cardIds = [];
    for (let i = 0; i < addedCards.length; i++) {
      const cardName = addedCards[i].split(" ");
      let res = await axios.get(
        `https://api.scryfall.com/cards/named?exact=${cardName}`
      );
      cardIds.push(res.data.id);
    }
    let resObj = await axios.post(`/api/decks`, {
      deck_name: deckName,
      card_ids: cardIds,
      user_id: user.sub,
    });
    router.push(`/decks/${resObj.data.id}`);
  }

  useEffect(async () => {
    const request = await axios.get(
      `https://api.scryfall.com/cards/autocomplete?q=${value}`
    );
    setNames(request.data.data);
  }, [value]);

  function deleteCard(e) {}

  const deckList = addedCards.map((addedCards, index) => (
    <div key={index} className={styles.listItem}>
      <li key={index + 1} onClick={deleteCard}>
        <button key={index + 2} onClick={deleteCard}>
          X
        </button>
        {addedCards}
      </li>
    </div>
  ));

  return (
    <div className={styles.container}>
      <div>
        <div className={`${styles.dropdownContent} ${styles.myDropdown}`}>
          <form onSubmit={onSubmit} autoComplete="off">
            <input
              className={styles.deckName}
              onChange={handleNameChange}
              type="text"
              placeholder="Name of your deck."
            ></input>
            <div>
              <input
                type="text"
                placeholder="Search.."
                id="myInput"
                className={styles.myInput}
                value={value}
                onChange={handleChange}
              ></input>
              <button className={styles.addBtn} type="submit">
                Add
              </button>
            </div>
          </form>
          <div>
            <p onClick={dropdownClick} value={names[0]}>
              {names[0]}
            </p>
            <p onClick={dropdownClick} value={names[1]}>
              {names[1]}
            </p>
            <p onClick={dropdownClick} value={names[2]}>
              {names[2]}
            </p>
            <p onClick={dropdownClick} value={names[3]}>
              {names[3]}
            </p>
            <p onClick={dropdownClick} value={names[4]}>
              {names[4]}
            </p>
            <p onClick={dropdownClick} value={names[5]}>
              {names[5]}
            </p>
            <p onClick={dropdownClick} value={names[6]}>
              {names[6]}
            </p>
            <p onClick={dropdownClick} value={names[7]}>
              {names[7]}
            </p>
            <p onClick={dropdownClick} value={names[8]}>
              {names[8]}
            </p>
            <p onClick={dropdownClick} value={names[9]}>
              {names[9]}
            </p>
          </div>
        </div>
      </div>
      <ul className={styles.deckList}>{deckList}</ul>
      <button onClick={createDeck}>Create Deck</button>
    </div>
  );
}
