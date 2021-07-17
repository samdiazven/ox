import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
	theme?: "filled" | "outlined";
	text: string;
	className?: string;
	onClick?: any;
	submit?: boolean;
}

const BaseButton = styled.button`
	${tw`
        pl-5
        pr-5
        pt-3
        pb-3
        outline-none
        rounded-md
        text-white
        text-xs
        font-semibold
        border-transparent
        border-2
        border-solid
        focus:outline-none
        transition-all
        duration-200
        ease-in-out
        m-1
        mt-2
    `}
`;
const OutlinedButton = styled(BaseButton)`
	${tw`
        bg-green-500
        hover:bg-transparent
        hover:text-green-500
        hover:border-green-500
    `}
`;
const FilledButton = styled(BaseButton)`
	${tw`
        border-green-500
        text-green-500
        bg-transparent
        hover:bg-green-500
        hover:text-white
        hover:border-transparent
    `}
`;

export function Button(props: ButtonProps) {
	const { theme, text, className, onClick, submit } = props;
	if (theme === "outlined")
		return (
			<OutlinedButton
				className={className}
				onClick={onClick}
				type={submit ? "submit" : "button"}
			>
				{text}
			</OutlinedButton>
		);
	else
		return (
			<FilledButton
				className={className}
				onClick={onClick}
				type={submit ? "submit" : "button"}
			>
				{text}
			</FilledButton>
		);
}
