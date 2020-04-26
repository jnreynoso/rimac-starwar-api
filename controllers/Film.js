import { concat, get } from 'lodash'
import { BaseController, Middleware } from 'swapi-helpers'
import { Swapi } from 'swapi-utils'

const { CorsMiddleware } = Middleware

const getFilms = () => {
  return new Promise(
    (resolve, reject) => {
      Swapi.getFilms(data => resolve(data))
    }
  )
}

class FilmRepositoryController extends BaseController {
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
    const { FilmRepository } = this.unitOfWork
    const filters = this.request.query()
    const films = await FilmRepository.get(filters) || []

    const filmsApi = await getFilms()
    const results = concat(
      get(filmsApi, 'results', []),
      films
    )

    return {
      ...filmsApi,
      results,
      count: filmsApi.count + results.length
    }
  }

  async getById() {
    const { FilmRepository } = this.unitOfWork
    const { id } = this.request.path()
    const film = await FilmRepository.getById(id)

    return film
  }

  async create() {
    const { FilmRepository } = this.unitOfWork
    const film = this.request.post()

    const created = Date(Date.now()).toString()
    const filmSaved = await FilmRepository.create({ ...film, created })

    const childs = ['people', 'planet', 'specie', 'starship', 'vehicle']
    const checkAndCreateChilds = (entity = null) => {
      if (film[entity]) {
        if (Array.isArray(film[entity])) {
          return film[entity].map(e => filmSaved.createFilmRelation({
            relation_id: e,
            relation: entity,
            created
          }))
        } else {
          return filmSaved.createFilmRelation({
            relation_id: film[entity],
            relation: entity,
            created
          })
        }
      }
    }

    await Promise.all(childs.map(e => checkAndCreateChilds(e)))

    return filmSaved
  }

  async update() {
    const { FilmRepository } = this.unitOfWork
    const { id } = this.request.path()
    const film = this.request.post()

    const rowUpdate = await FilmRepository.update(id, film)

    if (rowUpdate) {
      const filmUpdated = await FilmRepository.getById(id)

      return filmUpdated
    }

    return {}
  }

  async remove() {
    const { FilmRepository } = this.unitOfWork
    const { id } = this.request.path()

    const film = await FilmRepository.remove(id)

    return film
  }
}

export default FilmRepositoryController