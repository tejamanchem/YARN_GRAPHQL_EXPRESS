import { Column, Entity } from "typeorm";
import { BaseModel } from '../BaseModel'

@Entity({ schema: 'employee' })
export default class Employee extends BaseModel {

    @Column({ unique: true })
    public empName: string

    @Column({ nullable: true, type: 'text' })
    public description: string

    @Column({ nullable: true })
    public empId: number

}