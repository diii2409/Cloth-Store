import {cn} from "@/lib/utils";
import {Facebook, Github, Instagram, Youtube} from "lucide-react";
import Link from "next/link";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "./ui/tooltip";

type Props = {
	className?: string;
	iconClassname?: string;
	tooltipClassname?: string;
};

const socialMediaLink = [
	{
		title: "Instagram",
		href: "https://www.instagram.com/duynhut.366/",
		icon: <Instagram className="size-5" />,
	},
	{title: "Github", href: "https://github.com/diii2409", icon: <Github className="size-5" />},
	{
		title: "Youtube",
		href: "https://www.youtube.com/@duyhuynh5101",
		icon: <Youtube className="size-5" />,
	},
	{
		title: "Facebook",
		href: "https://www.facebook.com/nhutduy.huynh.395",
		icon: <Facebook className="size-5" />,
	},
	// {title: "Tiktok", href: "https://www.tiktok.com/@duy249.nak"},
];

export default function SocialMedia({className, iconClassname, tooltipClassname}: Props) {
	return (
		<TooltipProvider>
			<div className={cn("flex items-center gap-4", className)}>
				{socialMediaLink.map((item, index) => (
					<Tooltip key={index}>
						<TooltipTrigger asChild>
							<Link
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									"p-2 border rounded-full hoverEffect hover:text-white hover:border-white",
									iconClassname,
								)}>
								{item.icon}
							</Link>
						</TooltipTrigger>
						<TooltipContent
							className={cn("bg-white text-darkColor font-semibold", tooltipClassname)}>
							{item.title}
						</TooltipContent>
					</Tooltip>
				))}
			</div>
		</TooltipProvider>
	);
}
