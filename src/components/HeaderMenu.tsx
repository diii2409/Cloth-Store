"use client";

import {headerData} from "@/constants";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {usePathname} from "next/navigation";
export default function HeaderMenu() {
	const pathName = usePathname();
	return (
		<div className="hidden md:inline-flex w-1/3 items-center gap-5">
			{headerData.map((item, index) => (
				<Link
					key={index}
					href={item.href}
					className={cn(
						`hover:text-darkColor hoverEffect relative group`,
						pathName === item.href ? "text-darkColor" : "text-lightColor",
					)}>
					{item.title}
					<span
						className={cn(
							" absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:left-0",
							pathName === item.href ? "w-1/2 left-0" : "w-0",
						)}
					/>
					<span
						className={cn(
							" absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:right-0",
							pathName === item.href ? "w-1/2 right-0" : "w-0",
						)}
					/>
				</Link>
			))}
		</div>
	);
}