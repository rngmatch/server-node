import { Router } from 'express'

import root from './root'

const router = Router()

router.arguments(root)

export default router
