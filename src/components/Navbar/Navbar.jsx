import { CartWidget } from "../CartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
	return (
		<nav className='container--navbar'>
			{/* LOGO */}
			<div className='navbar--logo'>🪐</div>

			{/* Secciones de la navbar */}
			<ul className='navbar--ul'>
				<li className='navbar--ul--li'>
					<a className='navbar--ul--li--a' href='#section1'>
						Section 1
					</a>
				</li>
				<li className='navbar--ul--li'>
					<a className='navbar--ul--li--a' href='#section2'>
						Section 2
					</a>
				</li>
				<li className='navbar--ul--li'>
					<a className='navbar--ul--li--a' href='#section3'>
						Section 3
					</a>
				</li>
			</ul>

			{/* ICON CART + Cantidad */}
			<CartWidget />
		</nav>
	);
};
