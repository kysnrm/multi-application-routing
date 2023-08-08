import Head from "next/head";
import Links from "@/component/Links";

export default function Home() {
  return (
    <>
      <Head>
        <title>Multi application routing</title>
      </Head>
      <main>
        <h1>Multi application routing</h1>
        <section>
          <h2>これは何？</h2>
          <p>
            MPAからNext.jsへ段階的に移行していくにあたり、アプリケーション間のページ遷移が上手くいくのかを検証するためのアプリケーション。
          </p>
          <p>
            <b>/amplify</b>
            はAmplifyにホストされたNext.js内のページ、<b>/s3</b>
            はs3に配置したhtmlファイルにそれぞれルーティングする想定。
          </p>
        </section>
        <Links />
      </main>
    </>
  );
}
