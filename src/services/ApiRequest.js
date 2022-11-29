// export default class ServerRequest {
//   _defaultPath = 'https://api.themoviedb.org/3/search/movie'
//   _imgPath = 'https://image.tmdb.org/t/p/w500/'
//   _apiKey = '5cde17194d6b87ef840a2815c61af67e'
//   _language = 'ru'

//   async getRequest() {
//     const _url = `${this._defaultPath}?api_key=${this._apiKey}&language=${this._language}&page=1&include_adult=false&region=${this._language}`

//     const resultRequest = await fetch(_url)
//       .then((res) => {
//         return res.json()
//       })
//       .then((body) => {
//         return body
//       })

//     return resultRequest
//   }
// }

// export default class ServerRequest {
//   _defaultPath = 'https://api.themoviedb.org/3/search/movie'
//   _imgPath = 'https://image.tmdb.org/t/p/w500/'
//   _apiKey = '5cde17194d6b87ef840a2815c61af67e'
//   _language = 'ru'

//   async getRequest() {
//     const _url = `${this._defaultPath}?api_key=${this._apiKey}&language=${this._language}&page=1&include_adult=false&region=${this._language}`

//     const resultRequest = await fetch(_url)
//       .then((res) => {
//         return res.json()
//       })
//       .then((body) => {
//         return body
//       })

//     return resultRequest
//   }
// }

function ServerRequest() {
  const _defaultPath = 'https://api.themoviedb.org/3/search/movie'
  // const _imgPath = 'https://image.tmdb.org/t/p/w500/'
  const _apiKey = '5cde17194d6b87ef840a2815c61af67e'
  const _language = 'ru'
  const _url = `${_defaultPath}?api_key=${_apiKey}&language=${_language}&query=return`
  try {
    fetch(_url)
      .then((res) => res.json())
      .then((body) => body.results.forEach((films) => console.log(films)))
      .catch((error) => console.log('Ошибка: ' + error))
  } catch (error) {
    console.log('Ошибка: ' + error)
  }
}

export default ServerRequest
