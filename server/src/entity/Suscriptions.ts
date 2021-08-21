import { Field, ObjectType, Float } from "type-graphql";
import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity("suscriptions")
export class Suscription extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Field()
	@Column()
	title: string;

	@Field()
	@Column({ type: "varchar", length: 500, nullable: true })
	description?: string;

	@Field()
	@Column({ type: "varchar", length: 100 })
	date_start: string;

	@Field()
	@Column({ type: "varchar", length: 100 })
	date_end: string;

	@Field(() => Float)
	@Column({ type: "float" })
	amount: number;

	@Field()
	@Column()
	url_image: string;

	@Field()
	@Column()
	userId: string;

	@Field(() => User)
	@OneToOne(() => User)
	@JoinColumn()
	user: User;
}
