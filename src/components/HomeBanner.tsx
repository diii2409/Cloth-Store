import Title from "./Title";

export default function HomeBanner() {
	return (
		<div className="flex flex-col items-center justify-center gap-5">
			<Title className=" uppercase text-3xl font-bold text-center">Best Clothing Collection</Title>
			<p className="text-sm text-lightColor/80 font-medium max-w-[480px] text-center">
				Find everything you need to look and feel your best,and shop the latest men&apos;s fashion
				and lifestyle product
			</p>
		</div>
	);
}
