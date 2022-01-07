import Layout from "../components/layout";
import styles from "../styles/utils.module.css";

export default function about() {
  return (
    <Layout about>
      <br />
      <br />
      <h1 className={styles.heading}>About Us</h1>
      <h2>What is MaxEffort?</h2>
      <hr />
      <p>MaxEffort is a tool to build decks for Magic the Gathering.</p>
      <hr />
      <h2>Why Did You Choose to Make Your Own Deck Builder?</h2>
      <p>
        {" "}
        I feel that there are many deck builders out there that have features
        that I like, so I thought I would build one that combines all of my
        favorite features into one that I could customize.
      </p>
      <hr />
    </Layout>
  );
}
