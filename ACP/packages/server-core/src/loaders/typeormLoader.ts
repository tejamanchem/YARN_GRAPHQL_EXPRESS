import { MicroframeworkLoader, MicroframeworkSettings } from "microframework-w3tec";
import { DataSource} from "typeorm";
import { dbConfigConnections } from '../loader-cli/database.config'

export const typeormLoader: MicroframeworkLoader = async (
    settings: MicroframeworkSettings | undefined
) => {

    let configurations:any = dbConfigConnections
    const AppDataSource = new DataSource(configurations)

    // let connections: DataSource;
    // connections=AppDataSource.initialize().then(async (response:any) => {
    //     return await AppDataSource.initialize()
    // }).catch(error => console.log(error))

    let connections: DataSource;
    connections = await AppDataSource.initialize();

    // const connections = await createConnections(configurations)

    // if (settings) {
    //     settings.setData("connection", connections);
    //     await getConnection("default").runMigrations();
    //     settings.onShutdown(() => {
    //         getConnection("default").close();
    //     });
    // }

      if (settings) {
        settings.setData("connection", connections);
        await AppDataSource.runMigrations();
        settings.onShutdown(() => {
            AppDataSource.destroy()
        });
    }
};
