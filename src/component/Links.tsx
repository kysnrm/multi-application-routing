import Link from "next/link";

const Links = () => {
  return (
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
  );
};

export default Links;
