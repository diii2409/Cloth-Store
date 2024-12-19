"use client";

import {headerData} from "@/constants";
import {cn} from "@/lib/utils";
import {X} from "lucide-react";
import {motion} from "motion/react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import {Button} from "./ui/button";

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

export default function SideBar({isOpen, onClose}: Props) {
	const pathName = usePathname();
	return (
		<div
			className={cn(
				" fixed inset-y-0 left-0 z-50 bg-darkColor/50 shadow-xl hoverEffect w-full",
				isOpen ? "translate-x-0" : "-translate-x-full",
			)}
			onClick={onClose}>
			<motion.div
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{duration: 0.4, delay: 0.3}}
				onClick={e => e.stopPropagation()}
				className="min-w-72 max-w-96 bg-darkColor text-white/60 
				h-full p-5 md:p-10 border-spacing-0 md:border-r md;border-r-white  flex flex-col gap-6">
				<div className="flex items-center justify-between">
					<Logo className="text-white">Cloths</Logo>
					<Button className="hoverEffect hover:text-red-600 hover:bg-gray-300" onClick={onClose}>
						<X className="size-7" />
					</Button>
				</div>
				{/* index */}
				<div className="flex flex-col gap-4 text-base font-semibold tracking-wider">
					{headerData.map((item, index) => (
						<Link
							onClick={onClose}
							key={index}
							href={item.href}
							className={cn(
								`hover:text-white hoverEffect w-fit`,
								pathName === item.href && "text-white",
							)}>
							{item.title}
						</Link>
					))}
				</div>
				<SocialMedia />
			</motion.div>
		</div>
	);
}
