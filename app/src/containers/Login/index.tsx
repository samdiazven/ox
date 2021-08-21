import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../../components/buttons";
import { Input } from "../../components/input";
import { SCREENS } from "../../constants";
import Logo from "../../assets/images/photo.png";
const Container = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	width: 100vw;
`;

const LoginContainer = styled.div`
	backdrop-filter: blur(50px);
	background: rgba(255, 255, 255, 0.1);
	flex: 0.5;
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
	@media (min-width: ${SCREENS.sm}) {
		width: 600px;
		height: 400px;
	}
	${tw`
        flex
        h-full
        w-full
        flex-col
        items-center
        text-gray-400
        justify-center
    `}
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: 15%;
	width: 100%;
	margin-top: -10px;
	color: #fff;
	${tw`
        sm:mt-4
    `}
	&:last-of-type {
		margin-bottom: 1rem;
	}
`;
const ErrorContainer = styled.div`
	${tw`
        w-full
        mt-4
        h-12
        bg-red-300
        text-white
        flex
        justify-center
        items-center
        rounded-lg
    `}
`;
const Error = styled.p`
	${tw`
        text-sm
        md:text-lg
        font-bold
    `}
`;

export function Login() {
	return (
		<Container>
			<LoginContainer>
				<div>
					<img src={Logo} alt="Logo ox" />
				</div>

				<InputContainer>
					<Input placeholder="Ingrese su Correo" type="text" name="email" />
				</InputContainer>
				<InputContainer>
					<Input
						placeholder="Ingresar Password"
						type="password"
						name="password"
					/>
				</InputContainer>
				<Button
					submit={true}
					theme="outlined"
					text="Acceder"
					className="w-48"
				/>
				<ErrorContainer>
					<Error>Password Incorrecto</Error>
				</ErrorContainer>
			</LoginContainer>
		</Container>
	);
}
