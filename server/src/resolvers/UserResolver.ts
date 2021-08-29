import { hash } from "bcryptjs";
import {
  Arg,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
  Ctx,
} from "type-graphql";
import { User } from "../entity/User";
import { MyContext } from "../interfaces/MyContext";
import { isAuth } from "../middlewares/isAuth";
@InputType()
class UserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  lastname: string;

  @Field()
  role: string;

  @Field()
  password: string;

  @Field(() => Boolean)
  isActive: boolean;
}

@InputType()
class UserUpdateInput {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  lastname?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;
}

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async createUser(@Arg("options", () => UserInput) options: UserInput) {
    const hashedPassword = await hash(options.password, 12);
    const user = await User.create({
      ...options,
      password: hashedPassword,
    }).save();
    return user;
  }

  @Mutation(() => Boolean)
  async updateUser(
    @Arg("id", () => String) id: string,
    @Arg("input", () => UserUpdateInput) input: UserUpdateInput
  ) {
    try {
      await User.update({ id }, input);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("id", () => String) id: string) {
    await User.delete(id);
    return true;
  }

  @Query(() => [User])
  async users() {
    const users = await User.find();
    return users;
  }
  @Query(() => User)
  async user(@Arg("id", () => String) id: string) {
    try {
      const user = await User.findOne(id);
      if (!user) {
        throw new Error("El usuario solicitado no se puede encontrar");
      }
      return user;
    } catch (error) {
      console.log(error);
      throw new Error("Hubo un error en el sistema");
    }
  }

  @Query(() => User)
  @UseMiddleware(isAuth)
  async getMe(@Ctx() { payload }: MyContext) {
    try {
      const user = await User.findOne(payload!.userId);
      if (!user) {
        throw new Error("El usuario solicitado no se encuentra");
      }
      return user;
    } catch (error) {
      console.log(error);
      throw new Error("ERROR de sistema");
    }
  }
  @Query(() => String)
  @UseMiddleware(isAuth)
  proob(@Ctx() { payload }: MyContext) {
    return payload;
  }
}
