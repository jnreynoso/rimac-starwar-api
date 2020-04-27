import { FilmController } from 'swapi-controllers'
import { unitOfWork } from '../persistence'

const filmController = new FilmController(unitOfWork)

module.exports.handler = filmController.init.bind(filmController)
