import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navigation from '../Navigation/Navigation'
import Burger from '../icons/Burger'

import classes from './Layout.module.css'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
	const [showNavigation, setShowNavigation] = useState(false)

	const toggleNavigation = () => {
		setShowNavigation((prev) => !prev)
	}

	return (
		<>
			{showNavigation && <Navigation toggleNav={toggleNavigation} />}
			<div className={classes.navbar}>
				<Link href='/'>
					<div className={classes.logo}>
						<Image src='/images/logo.png' alt='logo' fill />
					</div>
				</Link>
				<button className={classes['burger-btn']} onClick={toggleNavigation}>
					<Burger />
				</button>
			</div>
			<main className={classes.main}>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
