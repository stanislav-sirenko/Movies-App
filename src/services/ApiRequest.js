const serverRequest = (movie, page) => {
  console.log(movie)
  const _defaultPath = 'https://api.themoviedb.org/3/search/movie'
  const _apiKey = '5cde17194d6b87ef840a2815c61af67e'
  const _language = 'ru-RU'
  const _url = `${_defaultPath}?api_key=${_apiKey}&language=${_language}&query=${movie}&page=${page}`
  try {
    return fetch(_url).then((response) => response.json())
  } catch (error) {
    console.log(error)
    alert(`Проверте подключение к vpn
    ${error}`)
  }
}

// const currentPage = (page) => {
//   // console.log(page)
//   return page
// }

export default serverRequest
// &page=${page}
