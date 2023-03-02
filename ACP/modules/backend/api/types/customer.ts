import { Field, ID, Int, ObjectType } from 'type-graphql';

import { Customer } from '@Acp/backend-models-module';

@ObjectType({
    description: 'Pet object.',
})
export class CustomerType {

    @Field(type => ID)
    public customerId: string;

    @Field({
        description: 'The name of the pet.',
    })
    public customerName: string;

    @Field(type => Int, {
        description: 'The age of the pet in years.',
    })
    public age: number;

    @Field(type => User, {
        nullable: true,
    })
    public owner: User;

}