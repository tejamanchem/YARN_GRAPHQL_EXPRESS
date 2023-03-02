import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { dotEnvOptions } from './dotenv-options';
import {CustomerImplements} from "@Acp/backend-models-module"
// Make sure dbConfig is imported only after dotenv.config
dotenv.config(dotEnvOptions);
import { dbConfigConnections} from './database.config';
import { runSeeders } from 'typeorm-extension';
(async () => {
    const confirgurations:any = dbConfigConnections
    const AppDataSource = new DataSource(confirgurations)
    console.log("Loading dev database...");
    await AppDataSource.initialize();
    runSeeders(AppDataSource, {
      seeds: [CustomerImplements],
      factories: [],
    });
    console.log("Complete loading dev database...");
  })();

