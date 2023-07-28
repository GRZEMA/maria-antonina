import Link from 'next/link'

import { Nunito } from 'next/font/google'

import CloseBurger from '../icons/CloseBurger'

import classes from './Navigation.module.css'
const nunito = Nunito({ subsets: ['latin-ext'] })

const Navigation = ({ onClick }) => {
	return (
		<nav className={classes.nav + ' ' + nunito.className}>
			<button className={classes.burger} onClick={onClick}>
				<CloseBurger />
			</button>
			<ul>
				<li>
					<Link href='/oferta'>Oferta</Link>
				</li>
				<li>
					<Link href='/restauracja'>Restauracja</Link>
				</li>
				<li>
					<Link href='/galeria'>Galeria</Link>
				</li>
				<li>
					<Link href='/wypoczynek'>Wypoczynek</Link>
				</li>
				<li>
					<Link href='/pokoje'>Pokoje</Link>
				</li>
				<li>
					<Link href='/historia-klubu'>Historia klubu</Link>
				</li>
				<li>
					<Link href='/kontakt'>Kontakt</Link>
				</li>
				<li>
					<Link href='/aktualnosci'>Aktualności</Link>
				</li>
			</ul>
			<Link
				href='https://www.booking.com/hotel/pl/dwor-maria-antonina-glinik-zaborowski.pl.html?aid=1288294&label=metagha-link-LUPL-hotel-1324708_dev-desktop_los-1_bw-1_dow-Saturday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-6642513966_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20230729__lp-20856_r-1339994980634622771&sid=5f8a259eaf5ee07666846023912091ca&all_sr_blocks=132470801_200340775_2_1_0;checkin=2023-07-29;checkout=2023-07-30;dest_id=-530846;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=132470801_200340775_2_1_0;hpos=1;matching_block_id=132470801_200340775_2_1_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=132470801_200340775_2_1_0__29000;srepoch=1690553876;srpvid=8d116489cd110138;type=total;ucfs=1&#hotelTmpl'
				target='_blank'>
				<button className={classes['nav-btn']}>Rezerwacja</button>
			</Link>
		</nav>
	)
}

export default Navigation
