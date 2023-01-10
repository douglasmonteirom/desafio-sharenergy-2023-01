import { adaptMiddlware } from "../adapters/express-middleware-adapter";
import { makeAuthMiddleware } from "../factories/middleware/auth-middleware-factory";

export const auth = adaptMiddlware(makeAuthMiddleware())