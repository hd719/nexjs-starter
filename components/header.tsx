import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/performance">Scale</Link>
      <Link href="/performance">Performance</Link>
      <Link href="/reliability">Reliability</Link>
    </div>
  );
}
