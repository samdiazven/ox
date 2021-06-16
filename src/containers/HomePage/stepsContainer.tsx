import styled from "styled-components";
import tw from "twin.macro";
import { HiAcademicCap, HiBriefcase, HiUserGroup } from "react-icons/hi";
const Container = styled.div`
	${tw`
        w-full
        flex
        flex-col
        items-center
        pt-2
        pb-2
        lg:pt-6
        lg:pb-6
    `}
`;

const Title = styled.h2`
	${tw`
        text-xl
        lg:text-4xl
        text-black
        font-extrabold
    `}
`;

const StepsContainer = styled.div`
	${tw`
        flex
        justify-evenly
        flex-wrap
        mt-7
        lg:mt-16
    `}
`;

const StepContainer = styled.div`
	${tw`
        flex
        flex-col
        md:w-96
        items-center
        transition-colors
        hover:text-green-500
        m-3
    `}
`;
const Step = styled.div`
	box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
	${tw`
        flex
        rounded-lg
        items-center
        justify-center
        p-6

    `}
`;

const StepTitle = styled.h4`
	${tw`
        text-black
        text-lg
        font-semibold
        mt-4
    `}
`;
const StepDescription = styled.p`
	${tw`
        w-10/12
        text-xs
        md:text-sm
        text-gray-600
        text-center
    `}
`;
const StepIcon = styled.span`
	${tw`
        text-green-500
        text-3xl
    `}
`;
export function Steps() {
	return (
		<Container>
			<Title>Lo que nos hace diferentes!</Title>
			<StepsContainer>
				<StepContainer>
					<Step>
						<StepIcon>
							<HiBriefcase />
						</StepIcon>
					</Step>
					<StepTitle>Guarda tus Cosas!</StepTitle>
					<StepDescription>
						Contamos con almacen para que guardes todo lo que te haga falta!
					</StepDescription>
				</StepContainer>
				<StepContainer>
					<Step>
						<StepIcon>
							<HiUserGroup />
						</StepIcon>
					</Step>
					<StepTitle>Para que estes Seguro!</StepTitle>
					<StepDescription>
						Aforo limitado para tu seguridad y para enfocarnos en ti!
					</StepDescription>
				</StepContainer>
				<StepContainer>
					<Step>
						<StepIcon>
							<HiAcademicCap />
						</StepIcon>
					</Step>
					<StepTitle>Entrena con los Mejores!</StepTitle>
					<StepDescription>
						Capacitados Internacionalmente para brindarte el mejor servicio!
					</StepDescription>
				</StepContainer>
			</StepsContainer>
		</Container>
	);
}
