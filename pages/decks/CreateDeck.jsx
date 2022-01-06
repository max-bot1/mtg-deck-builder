import Layout from "../../components/layout";
import CardSearchBar from "./CardSearchBar";
import styles from "/styles/utils.module.css";

export default function CreateDeck() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Create Your Own Deck!</h1>
        <div>
          <CardSearchBar />
        </div>
      </div>
    </Layout>
  );
}
