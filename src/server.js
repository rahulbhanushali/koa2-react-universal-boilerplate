import Koa from 'koa'
import Router from 'koa-router'

import apiRouter from './server/api-router'
import webAppRouter from './server/web-app-router'

const app = new Koa();

//mount the api routes on the app
app.use(apiRouter())

//mount the front-end routes
const router = new Router()
router.get('/(.*)', webAppRouter())
app.use(router.routes())

app.listen(3000);

