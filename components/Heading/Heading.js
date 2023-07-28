import classes from './Heading.module.css'
import { Dancing_Script } from 'next/font/google'

const dancing_script = Dancing_Script({ subsets: ['latin-ext'] })

const Heading = ({ text }) => {
	return (
		<>
			<h2 className={classes.heading + ' ' + dancing_script.className}>
				{text}
			</h2>
			<div className={classes.underline}>
				<div className={classes.square}></div>
			</div>
		</>
	)
}

export default Heading
