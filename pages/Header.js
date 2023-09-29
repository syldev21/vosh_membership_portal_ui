// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/users">Users</Link>
        {/* Add other navigation links as needed */}
      </nav>
    </header>
  );
}
