import Instance from '../config/axios.config'

class CurrencyService {
    static getCurrencyList = () => new Promise((resolve, reject) => {
      Instance.instance().get('/api/get_currency_list')
        .then(res => resolve(res.data))
        .catch(e => reject(e))
    })

    static getCurrencyRate = (currencyPair) => new Promise((resolve, reject) => {
      Instance.instance().get(`/api/get_currency_rate?pairs=${currencyPair}`)
        .then(res => resolve(res.data))
        .catch(e => reject(e))
    })
}

export default CurrencyService
