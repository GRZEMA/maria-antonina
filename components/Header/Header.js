import classes from './Header.module.css'

const Header = () => {
	return (
		<header className={classes.header}>
			<video autoPlay={true} muted={true} loop={true} className={classes.video}>
				<source src='/videos/header-video.mp4' type='video/mp4' />
			</video>
			<div className={classes['shadow-bg']} />
		</header>
	)
}

export default Header
