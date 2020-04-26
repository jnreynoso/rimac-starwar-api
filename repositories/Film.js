import IRepository from './IRepository'

class FilmRepository extends IRepository {
  constructor(dbContext) {
    super()

    this.dbContext = dbContext

    return this
  }

  async create(film) {
    try {
      const { Film } = this.dbContext
      const filmSaved = await Film.create(film)

      return filmSaved
    } catch (e) {
      console.log(e)
    }
  }

  async update(id, film) {
    try {
      const { Film } = this.dbContext
      const filmSaved = await Film.update(film, { where: { id } })

      return filmSaved
    } catch (e) {
      console.log(e)
    }
  }

  async get(filters) {
    try {
      const { Film } = this.dbContext
      const film = await Film.findAll(filters)

      return film
    } catch (e) {
      console.log(e)
    }
  }

  async getById(id) {
    try {
      const { Film } = this.dbContext
      const film = await Film.findOne({ where: { id } })

      return film
    } catch (e) {
      console.log(e)
    }
  }

  async remove(id) {
    const { Film } = this.dbContext
    const film = await Film.findOne({ where: { id } })

    await Film.destroy({ where: { id } })

    return film
  }
}

export default FilmRepository