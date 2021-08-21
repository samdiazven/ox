import styled from "styled-components";
import tw from "twin.macro";
import OxLogoImg from "../../assets/images/photo.png";

const LogoContainer = styled.div`
	${tw`
        flex
        items-center
        pl-5
    `}
`;

const Image = styled.div`
	width: auto;
	${tw`
        h-6
        md:h-9
    `}
	img {
		width: auto;
		height: 100%;
		min-height: 3rem;
	}
`;
export function Logo() {
	return (
		<LogoContainer>
			<Image>
				<img src={OxLogoImg} alt="logo ox" />
			</Image>
		</LogoContainer>
	);
}
