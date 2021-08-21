import { sign, verify } from "jsonwebtoken";
import { MiddlewareFn } from "type-graphql";
import { User } from "../entity/User";
import { MyContext } from "../interfaces/MyContext";

export const createAccessToken = (user: User) => {
	return sign(
		{ userId: user.id, role: user.role },
		process.env.ACCESS_TOKEN_SECRET!,
		{
			expiresIn: "120m",
		}
	);
};

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
	const authorization = context.req.headers["authorization"];
	if (!authorization) {
		throw new Error("No esta autenticado");
	}
	try {
		const token = authorization.split(" ")[1];
		const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
		context.payload = payload as any;
	} catch (err) {
		console.log(err);
		throw new Error("No autenticado");
	}

	return next();
};
