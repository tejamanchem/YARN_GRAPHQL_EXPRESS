import { Service } from 'typedi';
import uuid from 'uuid';
import { EventDispatcher, EventDispatcherInterface, getOsEnv } from '@Acp/backend-core-module';
import { Logger, LoggerInterface,getDBRepository } from '@Acp/backend-core-module';
import { Customer } from '@Acp/backend-models-module';
import { CustomerRepository } from '../repositories/customerRepository';



const log: LoggerInterface = new Logger(__filename)


@Service()
export class CustomerService {  
    customerRepository:any
    constructor(
    customerRepository = getDBRepository(getOsEnv("ACP_CONNECTION_NAME"), "Customer")
    ) { }

    public find(): Promise<Customer[]> {
        log.info('Find all pets');
        return this.customerRespositry.find();
    }

    // public findByUser(user: User): Promise<Pet[]> {
    //     this.log.info('Find all pets of the user', user.toString());
    //     return this.petRepository.find({
    //         where: {
    //             userId: user.id,
    //         },
    //     });
    // }

    // public findOne(id: string): Promise<Pet | undefined> {
    //     this.log.info('Find all pets');
    //     return this.petRepository.findOne({ id });
    // }

    // public async create(pet: Pet): Promise<Pet> {
    //     this.log.info('Create a new pet => ', pet.toString());
    //     pet.id = uuid.v1();
    //     const newPet = await this.petRepository.save(pet);
    //     this.eventDispatcher.dispatch(events.pet.created, newPet);
    //     return newPet;
    // }

    // public update(id: string, pet: Pet): Promise<Pet> {
    //     this.log.info('Update a pet');
    //     pet.id = id;
    //     return this.petRepository.save(pet);
    // }

    // public async delete(id: string): Promise<void> {
    //     this.log.info('Delete a pet');
    //     await this.petRepository.delete(id);
    //     return;
    // }

}