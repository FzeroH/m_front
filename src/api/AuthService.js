import Instance from '../config/axios.config'

class AuthService {
  static signIn = (email, password) => new Promise((resolve, reject) => {
    Instance.instanceAuth().post('/api/v1/auth/sign-in', {
      email: email,
      password: password
    })
      .then(res => resolve(res.data))
      .catch(e => reject(e))
  })

  static signUp = (email, password, username) => new Promise((resolve, reject) => {
    Instance.instanceAuth().post('/api/v1/auth/sign-up', {
      email: email,
      password: password,
      username: username
    })
      .then(res => resolve.data(res.data))
      .catch(e => reject(e))
  })

  static signIn = (email, password) => new Promise((resolve, reject) => {
    Instance.instanceAuth().post('/api/v1/auth/sign-in', {
      email: email,
      password: password
    })
        .then(res => resolve(res.data))
        .catch(e => reject(e))
  })

  static getUserData = (userID, token) => new Promise((resolve, reject) => {
    Instance.instanceAuth().get(`/api/v1/user/${userID}`, { headers: { Authorization: token } })
        .then(res => resolve(res.data))
        .catch(e => reject(e))
  })
}
export default AuthService
