import { DataSource } from "typeorm";
import {dbConfigConnections} from "./database.config"
import * as dotenv from 'dotenv';
import { dotEnvOptions } from './dotenv-options';
console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',dbConfigConnections)
dotenv.config(dotEnvOptions);
const configurations:any = dbConfigConnections
console.log(configurations,'ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc')
export const AppDataSource :DataSource= new DataSource(configurations)