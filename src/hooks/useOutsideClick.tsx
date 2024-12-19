"use client";

import {useEffect, useRef} from "react";

export default function useOutSideClick(callback: () => void) {
	const ref = useRef<HTMLElement>(null);

	useEffect(() => { 
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				callback();
			}
		};
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
	}, [callback]);

	return ref;
}
