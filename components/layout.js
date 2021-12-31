import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth0 } from "@auth0/auth0-react";

export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNjjcmV68wEjP-uKunz38nSXCCbwu0Q6fdkA&usqp=CAU"
        />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.navBtn}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className={styles.navBtn}>
            <Link href="/my-decks">
              <a>My Decks</a>
            </Link>
          </div>
          <div className={styles.navBtn}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
          <div className={styles.navBtn}>
            <Link href="/my-account">
              <a>My Account</a>
            </Link>
          </div>
        </div>
      </header>
      <hr />
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <br />
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}