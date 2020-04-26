import { BaseController, Middleware } from 'swapi-helpers'
import { Swapi } from 'swapi-utils'

const { CorsMiddleware } = Middleware

const getPeopleRepositorys = () => {
  return new Promise(
    (resolve, reject) => {
      Swapi.getPeopleRepositorys(data => resolve(data))
    }
  )
}

class PeopleRepositoryController extends BaseController {
  constructor(unitOfWork) {
    super()
    this.unitOfWork = unitOfWork

    return this
  }

  init(event, context, callback) {
    this.middleware(CorsMiddleware)

    return super.init(event, context, callback)
  }

  async handle(event, context, callback) {
    const method = this.request.method()
    var operation = null

    switch (method) {
      case 'GET':
        operation = await this.get()
        break
      case 'POST':
        operation = await this.create()
        break
      case 'PATCH':
        operation = await this.update()
        break
      case 'DELETE':
        operation = await this.remove()
        break
      default:
        res.status(500).send({ error: 'Method not supported!' })
        break
    }

    return operation
  }

  async get() {
    const { PeopleRepository } = this.unitOfWork
    const filters = this.request.query()
    const peoples = await PeopleRepository.get(filters)
    const peoplesApi = await getPeopleRepositorys()

    return {
      ...peoplesApi,
      results: peoplesApi.results.concat(peoples)
    }
  }

  async getById() {
    const { PeopleRepository } = this.unitOfWork
    const { id } = this.request.path()
    const people = await PeopleRepository.getById(id)

    return people
  }

  async create() {
    const { PeopleRepository } = this.unitOfWork
    const people = this.request.post()

    const peopleSaved = await PeopleRepository.create(people)

    return peopleSaved
  }

  async update() {
    const { PeopleRepository } = this.unitOfWork
    const { id } = this.request.path()
    const people = this.request.post()

    const rowUpdate = await PeopleRepository.update(id, people)

    if (rowUpdate) {
      const peopleUpdated = await PeopleRepository.getById(id)

      return peopleUpdated
    }

    return {}
  }

  async remove() {
    const { PeopleRepository } = this.unitOfWork
    const { id } = this.request.path()

    const people = await PeopleRepository.remove(id)

    return people
  }
}

export default PeopleRepositoryController