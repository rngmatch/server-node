import db from '../helpers/db'

export const getDepartments = async () => db.department.findMany()

export const getDepartment = async (id) =>
  // db.department.findUnique({ where: { departmentId: id } })
  db.company.findUnique({
    where: { companyID: id },
    include: {
      departments: true,
    },
  })

export const addDepartment = async (name, companyId) =>
  db.department.create({ data: { name, companyId } })
