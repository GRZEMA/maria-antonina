import { Nunito, Dancing_Script } from 'next/font/google'

import Link from 'next/link'

import FacebookIcon from '../icons/Facebook'
import InstagramIcon from '../icons/Instagram'

import classes from './Footer.module.css'

const nunito = Nunito({ subsets: ['latin-ext'] })
const dancing_script = Dancing_Script({ subsets: ['latin-ext'] })

const Footer = () => {
	return (
		<footer className={classes.footer + ' ' + nunito.className}>
			<div className={classes.contact}>
				<h3 className={dancing_script.className}>Dwór Maria Antonina</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Exercitationem quod quia corrupti amet, impedit delectus fuga suscipit
					officiis aliquid harum.
				</p>
			</div>
			<div className={classes.socials}>
				<h3 className={dancing_script.className}>Media społecznościowe</h3>
				<ul>
					<li>
						<Link
							href='https://www.facebook.com/DworMariaAntonina'
							target='_blank'>
							<FacebookIcon />
							Facebook
						</Link>
					</li>
					<li>
						<Link
							href='https://www.instagram.com/dwor_maria_antonina'
							target='_blank'>
							<InstagramIcon />
							Instagram
						</Link>
					</li>
				</ul>
			</div>
			<div className={classes.info}>
				<h3 className={dancing_script.className}>Informacje</h3>
				<ul>
					<li>
						<Link href='/contact'>Kontakt</Link>
					</li>
					<li>
						<Link href='/guest-reviews'>Opinie gości</Link>
					</li>
					<li>
						<Link href='/blog'>Aktualności</Link>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
