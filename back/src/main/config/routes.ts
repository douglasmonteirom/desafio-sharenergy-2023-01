import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import { join } from 'path'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  const tsd = join(__dirname, '../routes')
  console.log(tsd)
  readdirSync(join(__dirname, '../routes')).map(async file => {
    console.log(file)
    if (!file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(router)
    }
  })
}