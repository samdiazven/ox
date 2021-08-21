import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity("videos")
export class Videos extends BaseEntity {
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
	url: string;

	@Field()
	@Column({ type: "varchar", length: 100, nullable: true })
	thumbnail?: string;

	@Field()
	@Column({ type: "varchar", length: 50 })
	level: string;
}
