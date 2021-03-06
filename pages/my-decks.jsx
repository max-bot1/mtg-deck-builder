import Layout from "../components/layout";
import Link from "next/link";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react/cjs/react.development";
import styles from "/styles/utils.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import axios from "axios";

export default function MyDecks() {
  const { user } = useUser();
  const [decks, setDecks] = useState([]);

  useEffect(async () => {
    let res = await axios.get("/api/decks/getAll");
    setDecks(res.data);
  }, [user]);

  const deckList = decks.map((decks, index) => (
    <div key={index} className={styles.listItem}>
      <Link
        href={{
          pathname: "/decks/[id]",
          query: { id: decks.id },
        }}
      >
        <li>
          <a key={index + 1}>&bull; {decks.deck_name}</a>
        </li>
      </Link>
    </div>
  ));
  return (
    <Layout myDecks>
      <div className={styles.create}>
        <Link href="/decks/CreateDeck">
          <a>Create a New Deck.</a>
        </Link>
      </div>
      <hr />
      <div className={styles.YourDeck}>
        <h1>Your Decks</h1>
      </div>
      <hr />
      <div className={styles.deckLink}>{deckList}</div>
    </Layout>
  );
}

export const getServerSideProps = withPageAuthRequired();
