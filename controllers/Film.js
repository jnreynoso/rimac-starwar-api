import { BaseController, Middleware } from 'swapi-helpers'
import { Swapi } from 'swapi-utils'

const { CorsMiddleware } = Middleware

const getFilmRepositorys = () => {
  return new Promise(
    (resolve, reject) => {
      Swapi.getFilmRepositorys(data => resolve(data))
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
    const films = []
    const filmsApi = await getFilmRepositorys()

    return {
      ...filmsApi,
      results: filmsApi.results.concat(films)
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
    const {
      people,
      planet,
      specie,
      starship,
      vehicle,
      ...film
    } = this.request.post()

    const filmSaved = await FilmRepository.create(film)

    if (people) {
      if (Array.isArray(people)) {
        const asyncOperations = await Promise.all(
          people.map(e => filmSaved.createFilmRepositoryRelation({ relation_id: e }))
        )
      } else {
        filmSaved.createFilmRepositoryRelation({ relation_id: people })
      }
    }

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