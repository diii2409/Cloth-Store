import {cn} from "@/lib/utils";
import {ClerkLoaded, SignedIn, SignInButton, UserButton} from "@clerk/nextjs";
import {currentUser} from "@clerk/nextjs/server";
import CartIcon from "./CartIcon";
import Container from "./Container";
import HeaderMenu from "./HeaderMenu";
import ListOrderIcon from "./ListOrder";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";

export default async function Header() {
	const user = await currentUser();
	return (
		<div className="bg-white border-b-2 border-gray-200 py-5">
			<Container
				className="flex justify-between items-center gap-7 text-lightColor 
				text-sm capitalize font-semibold ">
				<HeaderMenu />
				<div className="w-auto md:w-1/3 flex items-center justify-center gap-2">
					{/* screen mobile */}
					<MobileMenu />
					{/*  */}
					<Logo>CLOTHS</Logo>
				</div>
				<div
					className={cn(
						"w-auto md:w-1/3 flex item-center justify-end gap-5 ",
						user && "relative top-2",
					)}>
					<SearchBar />
					<CartIcon />
					<ClerkLoaded>
						<SignedIn>
							<ListOrderIcon />
							<div className="relative -top-1">
								<UserButton />
							</div>
						</SignedIn>
						{!user && (
							<SignInButton mode="modal">
								<button className="text-sm font-semibold hover:text-darkColor hoverEffect">
									Login
								</button>
							</SignInButton>
						)}
					</ClerkLoaded>
				</div>
			</Container>
		</div>
	);
}
