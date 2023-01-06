import { Router } from "express"
import { adaptRoute } from "../adapters/express-route-adapter"
import { makeReadAllClientsController } from "../factories/controllers/read-all-clients-controller-factory"

export default (router: Router): void => {
  router.get('/client', adaptRoute(makeReadAllClientsController()))
}