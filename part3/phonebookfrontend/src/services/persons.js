import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => {
    return response.data
  })
}

const create = newObject => {
  console.log("url then object:",baseUrl,newObject)
  return axios.post(baseUrl, newObject).then(response => response.data)
}

const deletion = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}
const update = (id,newObject) => {
    //console.log("update request id then object",id,newObject)
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default { 
  getAll,
  create, 
  deletion,
  update
}