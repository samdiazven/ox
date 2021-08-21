import styled from "styled-components";
import tw from "twin.macro";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Input } from "../../components/input";
import { Button } from "../../components/buttons";
import emailjs from "emailjs-com";
import React, { useState } from "react";
const ContactUsContainer = styled.div`
	${tw`
        w-full
        flex
        flex-col
        pt-6
        pb-6
        pl-6
        pr-6
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
        text-center
    `}
`;
const ContainerC = styled.div`
	${tw`
        w-full
        h-full
        mt-7
        sm:p-7
        flex
        flex-col
        sm:flex-row
        justify-evenly
        items-center
    `}
`;
const MediasContainer = styled.div`
	${tw`
        flex
        flex-col
    `}
`;
const MediaContainer = styled.div`
	cursor: pointer;
	${tw`
        flex
        pt-2
        pl-2
    `}
`;
const Icon = styled.span`
	${tw`
        text-green-500
        text-lg
        transition
        duration-100
        transform 
        hover:scale-125
    `}
`;
const IconText = styled.p`
	${tw`
        text-gray-200
        text-sm
        font-bold
        ml-2
        
    `}
`;
const MailContainer = styled.form`
	backdrop-filter: blur(8.5px);
	background: rgba(255, 255, 255, 0.1);
	flex: 0.5;
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	${tw`
        flex
        flex-col
        w-full
        pl-4
        pr-4
        sm:rounded-2xl
        h-full
        pt-4
        pb-4
        items-center
        mt-4
        sm:mt-0
        `};
`;
const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: 20%;
	width: 100%;
	margin-top: 1.5rem;
	color: #fff;
	&:last-of-type {
		margin-bottom: 1rem;
	}
`;

const MailTitle = styled.h3`
	${tw`
        font-bold
        text-gray-100
        text-lg
        pb-2
    `}
`;

export function ContactUs() {
	const handleSubmit = (event: any) => {
		event.preventDefault();
		emailjs
			.sendForm(
				"service_jn6i1yo",
				"template_bdguujn",
				event.target,
				"user_huXzmnwrvHs0sLsPvYHtH"
			)
			.then((res) => console.log(res.text));
		console.log(event.target);
		event.target.reset();
	};

	return (
		<ContactUsContainer>
			<Title>Contactanos</Title>
			<ContainerC>
				<MediasContainer>
					<MediaContainer>
						<Icon>
							<FaFacebook />
						</Icon>
						<IconText>OxFunctionaltraining</IconText>
					</MediaContainer>
					<MediaContainer>
						<Icon>
							<FaInstagram />
						</Icon>
						<IconText>@OxFunctionalTraining</IconText>
					</MediaContainer>
					<MediaContainer>
						<Icon>
							<FaWhatsapp />
						</Icon>
						<IconText>+51912324561</IconText>
					</MediaContainer>
				</MediasContainer>
				<MailContainer onSubmit={handleSubmit}>
					<MailTitle>Envianos un Email</MailTitle>
					<InputContainer>
						<Input placeholder="Ingresa Tu Nombre" type="text" name="name" />
					</InputContainer>
					<InputContainer>
						<Input placeholder="Ingresa Tu Telefono" type="text" name="tlf" />
					</InputContainer>
					<InputContainer>
						<Input placeholder="Ingresa Tu Correo" type="text" name="email" />
					</InputContainer>
					<input type="hidden" name="to" value="Jesus Morales" />
					<Button theme="filled" text="Enviar Email" submit={true} />
				</MailContainer>
			</ContainerC>
		</ContactUsContainer>
	);
}
