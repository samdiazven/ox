import styled from "styled-components";
import tw from "twin.macro";
import BlobImage from "../../assets/images/blob.svg";
import { Button } from "../../components/buttons";
import { SCREENS } from "../../constants";
const TopSectionContainer = styled.div`
	min-height: 400px;
	margin-top: 2rem;
	${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        lg:pl-12
        lg:pr-12
        pl-3
        pr-3
    `}
`;

const LeftContainer = styled.div`
	${tw`
        w-1/2
        flex
        flex-col

    `}
`;
const RightContainer = styled.div`
	${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `}
`;
const Slogan = styled.h1`
	${tw`
        font-bold
        text-2xl
        xl:text-6xl
        sm:text-3xl
        md:text-5xl
        text-white
        md:font-extrabold
        sm:font-bold
        lg:font-black
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
    `}
`;

const Description = styled.p`
	${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-300
    `}
`;
const BlobContainer = styled.div`
	width: 20em;
	height: 10em;
	position: absolute;
	right: -5em;
	top: -9em;
	z-index: 1;
	img {
		width: 100%;
		height: auto;
	}

	@media (min-width: ${SCREENS.sm}) {
		width: 30em;
		max-height: 10em;
		right: -9em;
		top: -16em;
		transform: rotate(-5deg);
	}
	@media (min-width: ${SCREENS.lg}) {
		width: 40em;
		max-height: 20em;
		right: -9em;
		top: -17em;
		transform: rotate(5deg);
	}
	@media (min-width: ${SCREENS.xl}) {
		width: 50em;
		max-height: 10em;
		right: -15em;
		top: -20em;
		transform: rotate(5deg);
	}
`;
const ButtonsContainer = styled.div`
	${tw`
        flex
        flex-wrap
        mt-2
    `}
`;
export function TopSection() {
	return (
		<TopSectionContainer>
			<LeftContainer>
				<Slogan>Cambiando tu Vida!</Slogan>
				<Description>
					is simply dummy text of the printing and typesetting industry. Lorem
					Ipsum has been the industry's standard dummy text ever since the
					1500s.
				</Description>
				<ButtonsContainer>
					<Button theme="outlined" text="Reserva tu Clase" />
					<Button theme="filled" text="Muevete Diferente!" />
				</ButtonsContainer>
			</LeftContainer>
			<RightContainer>
				<BlobContainer>
					<img src={BlobImage} alt="blob" />
				</BlobContainer>
			</RightContainer>
		</TopSectionContainer>
	);
}
