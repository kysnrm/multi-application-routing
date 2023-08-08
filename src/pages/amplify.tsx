import Head from "next/head";
import Link from "next/link";

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
        <nav>
          <ul>
            <li>
              <Link href="/amplify">Next.js内でのリンク（next/link）</Link>
            </li>
            <li>
              <a href="/amplify">Next.js内でのリンク（aタグ）</a>
            </li>
            <li>
              <Link href="/s3">S3へのリンク（next/link）</Link>
            </li>
            <li>
              <a href="/s3">S3へのリンク（aタグ）</a>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
