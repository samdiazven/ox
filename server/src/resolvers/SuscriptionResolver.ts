import { Suscription } from "../entity/Suscriptions";
import {
	Arg,
	Field,
	Float,
	InputType,
	Mutation,
	Query,
	Resolver,
} from "type-graphql";

@InputType()
class SuscriptionInput {
	@Field(() => String, { nullable: true })
	title?: string;

	@Field(() => String, { nullable: true })
	description?: string;

	@Field(() => String, { nullable: true })
	date_start?: string;

	@Field(() => String, { nullable: true })
	date_end?: string;

	@Field(() => Float, { nullable: true })
	amount?: number;

	@Field(() => String, { nullable: true })
	url_image?: string;

	@Field(() => String, { nullable: true })
	userId?: string;
}

@Resolver()
export class SuscriptionResolver {
	@Mutation(() => Suscription)
	async createSuscription(
		@Arg("options", () => SuscriptionInput) options: SuscriptionInput
	) {
		const suscription = await Suscription.create(options).save();
		return suscription;
	}

	@Mutation(() => Boolean)
	async updateSuscription(
		@Arg("id", () => String) id: string,
		@Arg("options", () => SuscriptionInput) options: SuscriptionInput
	) {
		try {
			await Suscription.update({ id }, options);
			return true;
		} catch (error) {
			console.log(error);
			throw new Error("Hubo un error en el Sistema");
		}
	}

	@Mutation(() => Boolean)
	async deleteSuscription(@Arg("id", () => String) id: string) {
		try {
			await Suscription.delete({ id });
			return true;
		} catch (error) {
			console.log(error);
			throw new Error("Hubo un error en el sistema");
		}
	}

	@Query(() => [Suscription])
	async suscriptions() {
		const suscriptions = await Suscription.find({ relations: ["user"] });
		return suscriptions;
	}
	@Query(() => Suscription)
	async suscription(@Arg("id", () => String) id: string) {
		const suscriptions = await Suscription.findOne(
			{ id },
			{ relations: ["user"] }
		);
		if (!suscriptions) throw new Error("No se encuentra dicha suscripcion");
		return suscriptions;
	}
}
