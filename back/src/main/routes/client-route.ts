import { Router } from "express"
import { adaptRoute } from "../adapters/express-route-adapter"
import { makeAddClientController } from "../factories/controllers/add-client-controller-factory"
import { makeReadAllClientsController } from "../factories/controllers/read-all-clients-controller-factory"
import { makeReadOneClientController } from "../factories/controllers/read-one-client-controller-factory"
import { makeRemoveClientController } from "../factories/controllers/remove-client-controller-factory"
import { makeUpdateClientController } from "../factories/controllers/update-client-controller-factory"
import { auth } from "../middlewares/auth"

export default (router: Router): void => {
  router.use(auth)
  router.post('/client', adaptRoute(makeAddClientController()))
  router.get('/client', adaptRoute(makeReadAllClientsController()))
  router.get('/client/:id', adaptRoute(makeReadOneClientController()))
  router.put('/client/:id', adaptRoute(makeUpdateClientController()))
  router.delete('/client/:id', adaptRoute(makeRemoveClientController()))
}