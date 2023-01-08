import { NotFoundError } from '../errors/not-found-error'
import { ServerError } from '../errors/server-error'
import { UnauthorizedError } from '../errors/unauthorized-error'
import { HttpResponse } from '../protocols/http-response'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})

export const notFound = (): HttpResponse => ({
  statusCode: 404,
  body: new NotFoundError()
})