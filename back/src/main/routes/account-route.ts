import { Router } from "express"
import { adaptRoute } from "../adapters/express-route-adapter"
import { makeRegisterController } from "../factories/controllers/register-controller-factory"

export default (router: Router): void => {
  router.post('/register', adaptRoute(makeRegisterController()))
}