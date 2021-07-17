import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../constants";
import City from "../../assets/images/city.png";

const AboutUsContainer = styled.div`
	${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        pt-4
        pb-4
        pr-7
        pl-7
        md:pl-0
        md:pr-0
    `}
`;

const ImageContainer = styled.div`
	width: auto;
	height: 15em;
	margin-left: -15px;

	img {
		object-fit: contain;
		width: 600px;
		height: 100%;
	}

	@media (min-width: ${SCREENS.md}) {
		height: 20em;
		margin-left: -25px;
	}
	@media (min-width: ${SCREENS.lg}) {
		height: 30em;
		margin-left: -25px;
	}
	@media (min-width: ${SCREENS["2xl"]}) {
		height: 35em;
		margin-left: 0;
		margin-left: -25px;
	}
`;
const InfoContainer = styled.div`
	${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `}
`;

const Title = styled.h1`
	${tw`
        text-white
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `}
`;
const InfoText = styled.p`
	${tw`
		md:max-w-2xl
        text-sm
        md:text-base
        mt-4
        font-normal
		text-gray-300
    `}
`;
export function AboutUs() {
	return (
		<AboutUsContainer>
			<ImageContainer>
				<img src={City} alt="aboutus" />
			</ImageContainer>
			<InfoContainer>
				<Title>Haz Terapia Mientras Entrenas!</Title>
				<InfoText>
					is simply dummy text of the printing and typesetting industry. Lorem
					Ipsum has been the industry's standard dummy text ever since the 1500
					sis simply dummy text of the printing and typesetting industry. Lorem
					Ipsum has been the industry's standard dummy text ever since the 1500s
				</InfoText>
			</InfoContainer>
		</AboutUsContainer>
	);
}
