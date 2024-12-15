import CartIcon from "./CartIcon";
import Container from "./Container";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";

export default function Header() {
	return (
		<div className="bg-white border-b-2 border-gray-200 py-5">
			<Container
				className="flex justify-between items-center gap-7 text-lightColor 
				text-sm capitalize font-semibold ">
				<HeaderMenu />
				<div className="w-auto md:w-1/3 flex items-center justify-center gap-2">
					<MobileMenu />
					<Logo>CLOTHS</Logo>
				</div>
				<div className="w-auto md:w-1/3 flex item-center justify-end gap-5">
					<SearchBar />
					<CartIcon />
					<div>
						<button className="text-sm font-semibold hover:text-darkColor hoverEffect">
							Login
						</button>
					</div>
				</div>
			</Container>
		</div>
	);
}
