import { Router } from 'express'
import basicAuth from 'express-basic-auth'

import persons from './persons'

const router = Router()

router.use(
  basicAuth({
    users: { [process.env.ADMIN_USER]: process.env.ADMIN_PASSWORD },
  }),
)

router.get('/', (req, res) => {
  res.send({ msg: 'Inside API Endpoints' })
})

router.use('/persons', persons)

export default router
