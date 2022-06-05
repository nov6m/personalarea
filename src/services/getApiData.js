import axios from 'axios'
import { baseUrl } from '@/core/config'

class RickAndMortyApi {
  constructor (baseUrl) {
    this._baseUrl = baseUrl
  }

  getCharacter () {
    return axios.get(`${baseUrl}/character`)
  }
}

export default new RickAndMortyApi()
