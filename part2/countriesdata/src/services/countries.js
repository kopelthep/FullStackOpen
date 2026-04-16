import axios from 'axios'
const allUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api"

const getAll = () => {
  const request = axios.get(allUrl)
  return request.then(response => {
    return response.data
  })
}
const getCountry = (country) => {
    console.log("request url:",`${baseUrl}/name/${country}`)
    const request = axios.get (`${baseUrl}/name/${country}`)
    return request.then(response => { 
        return response.data
    })
}


// const create = newObject => {
//   const request = axios.post(baseUrl, newObject)
//   return request.then(response => { 
//     return response.data
//   })
// }

// const update = (id, newObject) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObject)
//   return request.then(response => response.data)
// }

export default { 
  getAll,
  getCountry
}