import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import Heading from '@/components/Heading/Heading'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Dwór Maria Antonina - hotel wypoczynkowy, jeździectwo</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='shortcut icon' href='/icons/logo.png' type='image/x-icon' />
			</Head>
			<Header />
			<section className={inter.className}>
				<Heading text='Dwór Maria Antonina' />
			</section>
		</>
	)
}
