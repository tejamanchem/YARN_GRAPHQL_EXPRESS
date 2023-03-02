import { Column,Entity } from "typeorm";
import {BaseModel} from '../BaseModel';

@Entity({schema:'employee'})
export default class Customer extends BaseModel{

    @Column({unique:true})
    public customerName:string

    @Column({nullable:true,type: 'text'})
    public description:string

    @Column({nullable:true})
    public customerId:number

}