import { Router } from 'express'

import {
  getPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
} from '../../models/persons'

const router = Router()

router.get('/', (req, res) => {
  const persons = getPersons()
  res.send(persons)
})

router.get('/:id', (req, res) => {
  const person = getPerson(req.params.id)
  if (person) {
    res.send(person)
  }
  res.status(404).send({ msg: 'Person not found' })
})

router.post('/', (req, res) => {
  const newPerson = createPerson(req.body)
  if (newPerson) {
    res.status(201).send(newPerson)
  }
  res.status(400).send({ msg: 'Bad Request' })
})

router.put('/:id', (req, res) => {
  updatePerson(req.params.id, req.body)
  res.send({ msg: `Person ${req.params.id} Updated` })
})

router.delete('/:id', (req, res) => {
  deletePerson(req.params.id, req.body)
  res.send({ msg: `Person ${req.params.id} Deleted` })
})

/*
router.get('/:id/addresses', (req, res) => {
    res.send({ msg: `Getting Addresses for Person ${req.params.id}` })
})
*/

export default router
