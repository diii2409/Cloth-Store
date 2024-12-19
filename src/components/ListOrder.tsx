import {ListOrdered} from "lucide-react";
import Link from "next/link";

export default function ListOrderIcon() {
	return (
		<Link href={"/order"} className="group relative">
			<ListOrdered className="size-6 group-hover:text-darkColor hoverEffect" />
			<span
				className=" absolute -top-1 -right-1 bg-darkColor text-white size-3.5 rounded-full
        text-xs font-semibold flex items-center justify-center">
				0
			</span>
		</Link>
	);
}
