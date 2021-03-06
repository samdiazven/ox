import styled from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../../components/marginer";
import { NavBar } from "../../components/navbar";
import { AboutUs } from "./aboutUsContainer";
import { ContactUs } from "./contactUs";
import { Disciplines } from "./disciplines";
import { Footer } from "./footer";
import { Steps } from "./stepsContainer";
import { TopSection } from "./topSection";
const PageContainer = styled.div`
	${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export function HomePage() {
	return (
		<PageContainer>
			<NavBar />
			<TopSection />
			<Marginer direction="vertical" margin="3em" />
			<Steps />
			<Marginer direction="vertical" margin="3em" />
			<AboutUs />
			<Marginer direction="vertical" margin="3em" />
			<Disciplines />
			<Marginer direction="vertical" margin="3em" />
			<ContactUs />
			<Footer />
		</PageContainer>
	);
}
