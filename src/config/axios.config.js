import axios from 'axios'

class Instance {

  static instance = () => axios.create({
    baseURL: 'http://localhost:8080/'
  })
}
export default Instance
