import Navigation from '../Navigation/Navigation'
import { useState } from 'react'
import Burger from '../icons/Burger'

import classes from './Layout.module.css'

const Layout = ({ children }) => {
	const [showNavigation, setShowNavigation] = useState(false)

	const toggleNavigation = () => {
		setShowNavigation((prev) => !prev)
	}

	return (
		<main>
			{showNavigation && <Navigation onClick={toggleNavigation} />}
			<button className={classes['burger-btn']} onClick={toggleNavigation}>
				<Burger />
			</button>
			{children}
		</main>
	)
}

export default Layout
