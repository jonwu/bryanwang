import axios from 'axios'

// export const ROOT_URL = 'http://54.185.34.163/api/v1' // prod
export const ROOT_URL = "http://localhost:5000/api/v1"; // local
export const SEARCH_URL = "http://localhost:8081"

// const PORT = '5000'
// const URL = `${ROOT_URL}:${PORT}`
const instance = axios.create({ timeout: 10000, baseURL: ROOT_URL })
const searchInstance = axios.create({ timeout: 10000, baseURL: SEARCH_URL })


instance.interceptors.request.use(
  (i_config) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(
        `\n(${i_config.method.toUpperCase()}) ${i_config.url} ${
          i_config.params
            ? JSON.stringify(i_config.params)
            : JSON.stringify(i_config.data)
        }`
      )
    }
    return i_config
  },
  (error) => {
    return Promise.reject(error)
  }
)
class BackendUtils {
  getMessages(serverId, params) {
    return instance.get(`/servers/${serverId}/messages`, {params})
  }
  getAdminSearch(serverId, params) {
    return searchInstance.get(`/admin_search`, {params})
  }
  getFaqTopic(serverId, faqTopicId, {params}) {
    return instance.get(`/servers/${serverId}/faq_topics/${faqTopicId}`, {params})
  }
  getFaqTopics(serverId, params) {
    return instance.get(`/servers/${serverId}/faq_topics`, {params})
  }
  postFaqTopic(serverId, params) {
    return instance.post(`/servers/${serverId}/faq_topics/`, params)
  }
  getRecommendation(serverId, params) {
    return instance.get(`/servers/${serverId}/recommendations`, {params})
  }
}
export default new BackendUtils()
