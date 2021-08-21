import { compare } from "bcryptjs";
import { Resolver, Mutation, Arg, ObjectType, Field } from "type-graphql";
import { User } from "../entity/User";
import { createAccessToken } from "../middlewares/isAuth";

@ObjectType()
class LoginResponse {
	@Field()
	accessToken: string;
}

@Resolver()
export class AuthResolver {
	@Mutation(() => LoginResponse)
	async login(
		@Arg("email", () => String) email: string,
		@Arg("password", () => String) password: string
	): Promise<LoginResponse> {
		const user = await User.findOne({ where: { email } });
		if (!user) {
			throw new Error("Usuario no encontrado");
		}
		const valid = await compare(password, user.password);
		if (!valid) {
			throw new Error("El password no coincide");
		}

		return {
			accessToken: createAccessToken(user),
		};
	}
}
