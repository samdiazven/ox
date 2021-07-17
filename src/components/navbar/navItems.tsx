import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../constants";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
	${tw`
        flex
        list-none
    `}
`;
const NavItem = styled.li<{ menu?: any }>`
	${tw`
        text-sm
        md:text-base
        text-white
        font-medium
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-green-500
    `}
	${({ menu }) =>
		menu &&
		css`
			${tw`
            text-white
            text-xl
            mb-3
            focus:text-white
        `}
		`}
`;

export function NavItems() {
	const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
	if (isMobile) {
		return (
			<Menu right styles={menuStyles}>
				<ListContainer>
					<NavItem menu>
						<a href="#">Home</a>
					</NavItem>
					<NavItem menu>
						<a href="#">Nosotros</a>
					</NavItem>
					<NavItem menu>
						<a href="#">Disciplinas</a>
					</NavItem>
					<NavItem menu>
						<a href="#">Cursos</a>
					</NavItem>
					<NavItem menu>
						<a href="#">Contactanos</a>
					</NavItem>
				</ListContainer>
			</Menu>
		);
	}
	return (
		<ListContainer>
			<NavItem>
				<a href="#">Home</a>
			</NavItem>
			<NavItem>
				<a href="#">Nosotros</a>
			</NavItem>
			<NavItem>
				<a href="#">Disciplinas</a>
			</NavItem>
			<NavItem>
				<a href="#">Cursos</a>
			</NavItem>
			<NavItem>
				<a href="#">Contactanos</a>
			</NavItem>
		</ListContainer>
	);
}
