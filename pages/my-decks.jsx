import Layout from "../components/layout";
import Link from "next/link";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function MyDecks() {
  return (
    <Layout>
      <ol>
        <li>Deck 1</li>
        <li>Deck 2</li>
      </ol>

      <Link href="/decks/CreateDeck">
        <a>Create a new deck.</a>
      </Link>
    </Layout>
  );
}

export const getServerSideProps = withPageAuthRequired();
