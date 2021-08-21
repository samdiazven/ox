import { Videos } from "../entity/Videos";
import { Resolver, Query, Mutation, InputType, Field, Arg } from "type-graphql";

@InputType()
class VideoInput {
	@Field(() => String, { nullable: true })
	title?: string;

	@Field(() => String, { nullable: true })
	description?: string;

	@Field(() => String, { nullable: true })
	url: string;

	@Field(() => String, { nullable: true })
	thumbnail: string;

	@Field(() => String, { nullable: true })
	level: string;
}

@Resolver()
export class VideoResolver {
	@Mutation(() => Videos)
	async createVideo(@Arg("options", () => VideoInput) options: VideoInput) {
		const suscription = await Videos.create(options).save();
		return suscription;
	}

	@Mutation(() => Boolean)
	async updateVideo(
		@Arg("id", () => String) id: string,
		@Arg("options", () => VideoInput) options: VideoInput
	) {
		try {
			await Videos.update({ id }, options);
			return true;
		} catch (error) {
			console.log(error);
			throw new Error("Hubo un error en el Sistema");
		}
	}

	@Mutation(() => Boolean)
	async deleteVideo(@Arg("id", () => String) id: string) {
		try {
			await Videos.delete({ id });
			return true;
		} catch (error) {
			console.log(error);
			throw new Error("Hubo un error en el sistema");
		}
	}

	@Query(() => [Videos])
	async suscriptions() {
		const suscriptions = await Videos.find();
		return suscriptions;
	}
	@Query(() => Videos)
	async suscription(@Arg("id", () => String) id: string) {
		const videos = await Videos.findOne({ id });
		if (!videos) throw new Error("No se encuentra dicha suscripcion");
		return videos;
	}
}
