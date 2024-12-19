"use client";

import {AlignLeft} from "lucide-react";
import {useState} from "react";
import SideBar from "./SideBar";

export default function MobileMenu() {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	return (
		<div className="md:hidden">
			<button onClick={() => setSidebarOpen(!isSidebarOpen)}>
				<AlignLeft className="hover:text-darkColor hoverEffect " />
			</button>
			<div>
				<SideBar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
			</div>
		</div>
	);
}
