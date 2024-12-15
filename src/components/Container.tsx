import {cn} from "@/lib/utils";

type Props = {
	children: React.ReactNode;
	className?: string;
};
const Container = ({className, children}: Props) => {
	return <div className={cn("max-w-screen-xl mx-auto px-4 ", className)}>{children}</div>;
};

export default Container;
