import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Navigation from '../Navigation/Navigation'
import Burger from '../icons/Burger'

import classes from './Layout.module.css'

const Layout = ({ children }) => {
	const [showNavigation, setShowNavigation] = useState(false)

	const toggleNavigation = () => {
		setShowNavigation((prev) => !prev)
	}

	return (
		<main className={classes.main}>
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
			{children}
		</main>
	)
}

export default Layout
