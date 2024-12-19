import Container from "@/components/Container";
import {requiredUser} from "@/hooks/requiredUser";

export default async function pageOrder() {
	await requiredUser();
	return <Container>orderPage</Container>;
}
