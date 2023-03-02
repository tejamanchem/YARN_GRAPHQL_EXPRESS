import { Repository } from 'typeorm';

import { Customer } from '@Acp/backend-models-module';


export class CustomerRepository extends Repository<Customer> {

    /**
     * Find by user_id is used for our data-loader to get all needed pets in one query.
     */
    public findByUserIds(ids: string[]): Promise<Customer[]> {
        return this.createQueryBuilder()
            .select()
            .getMany();
    }

}