import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const FooterContainer = styled.div`
	min-height: 5em;
	${tw`
        flex
        flex-wrap
        min-w-full
        pl-4
        bg-gray-800
        text-gray-400
        items-center
        justify-between
        pr-4
        sm:pb-3
        sm:pt-3

    `}
`;
const Company = styled.h4`
	${tw`
        font-bold
        text-lg
    `}
`;
const Author = styled.h4`
	${tw`
        font-bold
        text-white
        text-sm
    `}
`;
export function Footer() {
	const date = new Date().getFullYear();
	return (
		<FooterContainer>
			<Company>Ox Functional Training. {date}</Company>
			<Author>Made by Samuel Diaz</Author>
		</FooterContainer>
	);
}
