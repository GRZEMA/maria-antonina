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
			</Head>
			<Header />
			<section className={inter.className}>
				<Heading text='Dwór Maria Antonina' />
			</section>
		</>
	)
}
