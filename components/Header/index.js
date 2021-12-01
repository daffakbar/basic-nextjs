import Link from "next/link";

export default function index() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/users">users</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
