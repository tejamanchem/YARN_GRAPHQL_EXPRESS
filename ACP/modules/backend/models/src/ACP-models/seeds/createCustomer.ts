import { Seeder,SeederFactoryManager} from 'typeorm-extension';
import { DataSource } from 'typeorm';
import Customer from '../customerModel';


export class CustomerImplements implements Seeder{
    constructor(){
        
    }
    async run(dataSource: DataSource,
        factoryManager: SeederFactoryManager){
        const repo = dataSource.getRepository("customer");
        let customerExists = await repo.find();
        if(customerExists.length){
            return
        }
        const customerObj = new Customer();
        customerObj.customerName='teja';
        customerObj.description='customer related to laptop product'
        customerObj.customerId=1234
        let a =await repo.save(customerObj)
        console.log(a)
    }
}