import { useUser } from "@auth0/nextjs-auth0";
import styles from "/styles/Home.module.css";
import Layout from "../components/layout";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default function Auth() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;
  return (
    <Layout>
      <div className={(styles.container, styles.main)}>
        <h1 className={styles.heading2XL}>{user.nickname}</h1>
        <h2>{user.email}</h2>
        <p>
          {user.email_verified === true
            ? "Your email has been verified"
            : "Your email has not been verified please follow the instructions sent to your email address"}
        </p>
        <Link href="/api/auth/logout">
          <a>Logout</a>
        </Link>
      </div>
    </Layout>
  );
}
export const getServerSideProps = withPageAuthRequired();
