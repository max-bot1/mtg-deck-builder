import axios from "axios";
import { useEffect, useState } from "react";
import styles from "/styles/utils.module.css";

export default function CardSearchBar() {
  const [names, setNames] = useState([]);
  const [value, setValue] = useState("");
  const [addedCards, setAddedCards] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    setValue("");
    setAddedCards([...addedCards, value]);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  function dropdownClick(e) {
    setValue(e.target.innerHTML);
  }

  function createDeck() {
    const cardIds = [];
    for (let i = 0; i < addedCards.length; i++) {
      const cardName = addedCards[i].split(" ");
      axios
        .get(`https://api.scryfall.com/cards/named?exact=${cardName}`)
        .then((res) => {
          cardIds.push(res.data.id);
          console.log(cardIds);
        });
    }
  }

  useEffect(() => {
    async function search() {
      const request = await axios.get(
        `https://api.scryfall.com/cards/autocomplete?q=${value}`
      );
      setNames(request.data.data);
      return request;
    }
    search();
  }, [value]);

  function deleteCard(e) {}

  const deckList = addedCards.map((addedCards, index) => (
    <div key={index} className={styles.listItem}>
      <li key={index + 1} onClick={deleteCard}>
        {addedCards}
      </li>
      <button key={index + 2} onClick={deleteCard}>
        X
      </button>
    </div>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.dropdown}>
        <div className={`${styles.dropdownContent} ${styles.myDropdown}`}>
          <form onSubmit={onSubmit} autoComplete="off">
            <div>
              <input
                type="text"
                placeholder="Search.."
                id="myInput"
                className={styles.myInput}
                value={value}
                onChange={handleChange}
              ></input>
              <button type="submit">Add</button>
            </div>
          </form>
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
        <button onClick={createDeck}>Create Deck</button>
      </div>
      <ul className={styles.deckList}>{deckList}</ul>
    </div>
  );
}