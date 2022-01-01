import { useUser } from "@auth0/nextjs-auth0";
import styles from "/styles/Home.module.css";
import Layout from "../components/layout";

export default function EmailVerify() {
  return (
    <Layout>
      <h1>
        Please verify your email by following the instructions sent to you in
        the email address attached to your new account.
      </h1>
    </Layout>
  );
}
