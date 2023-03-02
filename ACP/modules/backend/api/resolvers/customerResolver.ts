import DataLoader from 'dataloader';
import { Arg, Ctx, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql';
import { Service } from 'typedi';
import { Logger, LoggerInterface } from '@Acp/backend-core-module';
import { Context } from '../Context';
import { Customer } from '@Acp/backend-models-module';
import { PetService } from '../services/PetService';
import { PetInput } from '../types/input/PetInput';
import { Pet } from '../types/Pet';

@Service()
@Resolver(of => Pet)
const log: LoggerInterface = new Logger(__filename)
export class PetResolver {

    constructor(
        private petService: PetService,
    ) { }

    @Query(returns => [Pet])
    public async customers(@Ctx() { requestId }: Context): Promise<PetModel[]> {
        this.log.info(`{${requestId}} Find all users`);
        return this.petService.find();
    }

    // @Mutation(returns => Pet)
    // public async addPet(@Arg('pet') pet: PetInput): Promise<PetModel> {
    //     const newPet = new PetModel();
    //     newPet.name = pet.name;
    //     newPet.age = pet.age;
    //     return this.petService.create(newPet);
    // }

    // @FieldResolver()
    // public async owner(@Root() pet: PetModel): Promise<any> {
    //     if (pet.userId) {
    //         return this.userLoader.load(pet.userId);
    //     }
    //     // return this.userService.findOne(`${pet.userId}`);
    // }

    // user: createDataLoader(UserRepository),

    //     petsByUserIds: createDataLoader(PetRepository, {
    //         method: 'findByUserIds',
    //         key: 'userId',
    //         multiple: true,
    //     }),

}