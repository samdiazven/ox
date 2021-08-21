import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity("users")
export class User extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Field()
	@Column()
	name!: string;

	@Field()
	@Column()
	lastname!: string;

	@Field()
	@Column()
	password!: string;

	@Field()
	@Column()
	email!: string;

	@Field()
	@Column()
	role!: string;

	@Field(() => Boolean)
	@Column()
	isActive!: boolean;
}
