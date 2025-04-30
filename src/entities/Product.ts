import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm"
import { Evaluation } from "./Evaluation"

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, length: 100 })
  name: string

  @Column({ nullable: false, length: 100 })
  category: string

  @Column({ nullable: false, length: 100 })
  brand: string

  @Column({ nullable: false, length: 200 })
  description: string

  @Column({ nullable: false })
  price: number

  @Column({ nullable: false })
  image: string

  @OneToMany(() => Evaluation, (evaluation) => evaluation.product)
  evaluations: Evaluation[]
}