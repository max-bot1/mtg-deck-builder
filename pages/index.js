import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user } = useUser();
  return (
    <Layout home>
      <div className={styles.container}>
        <Head>
          <title>Home</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to MaxEffort MTG Deck Builder!
          </h1>
          {!user && (
            <p className={styles.description}>
              Get started by{" "}
              <Link href="/api/auth/login">
                <a>creating an account</a>
              </Link>{" "}
              or{" "}
              <Link href="/api/auth/login">
                <a>log in</a>
              </Link>{" "}
              if you already have one.
            </p>
          )}

          {user == true && !user.email_verified === false ? (
            <p>
              Please verify your email by checking you email and following the
              instructions sent to you.
            </p>
          ) : (
            ""
          )}
        </main>
      </div>
    </Layout>
  );
}
