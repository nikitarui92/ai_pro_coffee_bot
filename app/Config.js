import dotenv from 'dotenv'

export default class Config {

    static instance = new Config();

    #env = process.env

    constructor() {
        dotenv.config();
    }

    get dbName() { return this.#env.DB_NAME }
    get dbUser() { return this.#env.DB_USER }
    get dbPass() { return this.#env.DB_PASS }
    get dbHost() { return this.#env.DB_HOST }
    get dbPort() { return this.#env.DB_PORT }

    get appPort() { return this.#env.APP_PORT }

}
