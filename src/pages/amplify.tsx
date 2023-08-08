import Head from "next/head";
import Link from "next/link";
import Links from "@/component/Links";

export default function Home() {
  const pageName = "Multi application routing | Amplify";
  return (
    <>
      <Head>
        <title>{pageName}</title>
      </Head>
      <main>
        <h1>{pageName}</h1>
        <section>
          <p>
            このページはAmplifyにホストされたNext.jsアプリケーション内のページです。
          </p>
          <p>
            <Link href="/">トップに戻る</Link>
          </p>
        </section>
        <Links />
      </main>
    </>
  );
}
