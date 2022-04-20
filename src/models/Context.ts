import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Context {
    @PrimaryGeneratedColumn()
    public id: number

    @Column("text", { array: true })
    public message: string[]

    @Column("text")
    public response: string
}