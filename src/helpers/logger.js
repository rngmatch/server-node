import pino from 'pino'

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
})

export default logger

/*
import consola from 'consola'

const logger = consola

export default logger
*/
