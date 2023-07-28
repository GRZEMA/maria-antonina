import classes from './Heading.module.css'

const Heading = ({ text }) => {
	return (
		<>
			<h2 className={classes.heading}>{text}</h2>
			<div className={classes.underline}>
				<div className={classes.square}></div>
			</div>
		</>
	)
}

export default Heading
