import styled from "styled-components";
import { SCREENS } from "../../constants";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
	placeholder: string;
	type: string;
	name: string;
}
const StyledInput = styled.input`
	background: rgba(255, 255, 255, 0.1);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	border-radius: 2rem;
	width: 60%;
	height: 3rem;
	padding: 1rem;
	border: none;
	outline: none;
	@media (max-width: ${SCREENS.md}) {
		width: 90%;
	}
	:focus {
		border: 2px solid white;
	}
	::placeholder {
		text-align: center;
	}
`;

export function Input({ placeholder, type, name }: InputProps) {
	return <StyledInput type={type} placeholder={placeholder} name={name} />;
}
