import Layout from '@/components/Layout/Layout'

import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='shortcut icon' href='/images/logo.png' type='image/x-icon' />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}
