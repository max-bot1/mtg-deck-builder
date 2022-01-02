import Layout from "../../components/layout";
import CardSearchBar from "./CardSearchBar";
import styles from "/styles/utils.module.css";

export default function CreateDeck() {
  return (
    <Layout>
      <h1>Create your own deck.</h1>
      {/* <div> */}
      <div>
        <CardSearchBar />
      </div>
      {/* <div>
          <input className={styles.deckList} type="text"></input>
        </div> */}
      {/* </div> */}
    </Layout>
  );
}
