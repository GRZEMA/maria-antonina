import classes from './Header.module.css'
import { Dancing_Script } from 'next/font/google'

const dancing_script = Dancing_Script({ subsets: ['latin-ext'] })

const Header = () => {
	return (
		<header className={classes.header + ' ' + dancing_script.className}>
			<video autoPlay={true} muted={true} loop={true} className={classes.video}>
				<source src='/videos/header-video.mp4' type='video/mp4' />
			</video>
			<div className={classes['title-box']}>
				<h1 className={classes['header-title']}>Maria Antonina</h1>
			</div>
			<div className={classes['shadow-bg']} />
		</header>
	)
}

export default Header
