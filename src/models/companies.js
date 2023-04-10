import db from '../helpers/db'

/*
const getCompanies = async () => db.company.findMany()

export default {
  getCompanies,
}
*/

export const getCompanies = async () => db.company.findMany()

export const getCompany = async (id) =>
  db.company.findUnique({ where: { companyId: id } })

export const addCompany = async (name) => db.company.create({ data: { name } })
