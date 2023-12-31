import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
	title: "Hello App Router",
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='jp'>
			<body>

				<Header />

				<main className="mt-4 w-full mx-auto px-4 lg:w-[1024px] lg:px-0">{children}</main>
			</body>
		</html>
	)
}
