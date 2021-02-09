import mongoose from 'mongoose'
import Koa from "koa"
import koaBody from "koa-body";
import Router from '@koa/router'

import Config from './config.js'

export default class App {

    constructor() {
        this.dbConn = null;
        this.app = new Koa();
        this.router = new Router({ prefix: '/api' });
        this.config = Config.instance
    }

    async _addRoutes() {

    }

    async _addMiddlewares() {

        this.app.use(koaBody());
        this.app.use(this.router.routes());
        this.app.use(this.router.allowedMethods())

    }

    async _initDBConn() {
        const uri = `mongodb://${this.config.dbHost}:${this.config.dbPort}`
        this.dbConn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            user: this.config.dbUser,
            pass: this.config.dbPass,
            dbName: this.config.dbName
        })
    }

    async startup() {

        await this._initDBConn()
        await this._addRoutes()
        await this._addMiddlewares()

        this.app.listen(this.config.appPort);

    }

    async shutdown() { }

}
