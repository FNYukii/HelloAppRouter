import Link from 'next/link'

function Header() {

	return (

		<header className='w-full mx-auto px-4 lg:width-lg lg:px-0'>

			<div className='flex justify-between items-center py-2'>

				<Link href="/" className='text-4xl font-light'>Hello Next - App Router</Link>

				<div className='flex gap-8'>
					<Link href="/" className='hover:underline'>Top</Link>
					<Link href="/spots" className='hover:underline'>Spots</Link>
					<Link href="/about" className='hover:underline'>About</Link>
				</div>
			</div>
		</header>
	)
}

export default Header