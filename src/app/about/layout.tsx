import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: "About - Hello App Router",
	description: 'Generated by create next app',
}

export default function aboutLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>{children}</div>
	)
}
