import React from 'react'
import classes from './Navbar.module.css'
import { Dancing_Script, Nunito } from 'next/font/google'
import Heading from '../Heading/Heading'

const nunito = Nunito({ subsets: ['latin-ext'] })
const dancing_script = Dancing_Script({ subsets: ['latin-ext'] })

const OfertaPoPolsku =
	'Nasza oferta została starannie zaprojektowana, aby spełnić oczekiwania nawet najbardziej wymagających podróżnych. Niezależnie od tego, czy podróżujesz w celach biznesowych, czy wypoczynkowych, nasz hotel z pewnością sprosta Twoim oczekiwaniom.'
const WstepOferty =
	'Witamy w naszym luksusowym hotelu, gdzie zapewniamy wyjątkowe doświadczenia i niezapomniane wrażenia dla naszych Gości.'

export default function Navbar() {
	return (
		<section className={dancing_script.className + ' ' + classes.section}>
			<Heading text='Oferta' />
			<div className={classes['text-box']}>
				<p className={classes.description_intro}>{WstepOferty}</p>
				<p className={classes.description + ' ' + nunito.className}>
					{OfertaPoPolsku}
				</p>
			</div>
		</section>
	)
}
