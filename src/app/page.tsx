import Link from "next/link";

export default function Home() {
  return (
    <main>
			<h1>Hello Next App Router</h1>
			<Link href="/about" className="hover:underline">About</Link>
		</main>
  )
}
