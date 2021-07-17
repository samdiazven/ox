import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../buttons";
import ReactPlayer from "react-player";

interface DisProps {
	name: string;
	description?: string;
	url: string;
	imgThumbnail: string;
	setToogleVideo: (condition: boolean) => any;
	setUrlVideo: (url: string) => any;
	Icon: any;
}

const DisContainer = styled.div`
	width: 16.5em;
	min-height: 22.5em;
	max-height: 25.5em;
	box-shadow: 0 1.3px 17px -2px rgb(245, 245, 245);
	${tw`
        flex
        flex-col
        items-center
        p-3
        pb-4
        bg-gradient-to-br from-black to-blue-900 
        rounded-md
        m-1
        sm:m-3
        md:m-6
    `}
`;
const DisThumbnail = styled.div`
	width: 100%;
	height: auto;

	img {
		width: 100%;
		height: 100%;
	}
`;
const DisName = styled.h3`
	${tw`
        text-base
        font-bold
        text-gray-200
        mt-1
        mb-1
    `}
`;
const SmallIcon = styled.span`
	${tw`
        text-green-400
        text-2xl
        mr-1
    `}
`;
const DisButton = styled(Button)`
	${tw`
        min-w-full
        mt-5
    `}
`;
const Description = styled.p`
	${tw`
        text-sm
        font-light
		text-gray-400
    `}
`;
export function Dis(props: DisProps) {
	const {
		name,
		url,
		description,
		imgThumbnail,
		setToogleVideo,
		Icon,
		setUrlVideo,
	} = props;
	const handleAction = () => {
		setToogleVideo(true);
		setUrlVideo(url);
	};
	return (
		<DisContainer>
			<DisThumbnail>
				<img src={imgThumbnail} alt="img-discipline" />
			</DisThumbnail>
			<DisName>{name}</DisName>
			<SmallIcon>
				<Icon />
			</SmallIcon>
			<Description>{description}</Description>
			<DisButton text="Ver Video" theme="outlined" onClick={handleAction} />
		</DisContainer>
	);
}
