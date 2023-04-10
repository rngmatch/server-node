import { Router } from 'express'
import basicAuth from 'express-basic-auth'

import persons from './persons'
import companies from './companies'

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
router.use('/companies', companies)

export default router
