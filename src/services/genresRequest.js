const genresRequest = () => {
  const _defaultPath = 'https://api.themoviedb.org/3/genre/movie/list'
  const _apiKey = '5cde17194d6b87ef840a2815c61af67e'
  const _language = 'ru-RU'
  const _url = `${_defaultPath}?api_key=${_apiKey}&language=${_language}`
  try {
    return fetch(_url).then((response) => response.json())
  } catch (error) {
    console.log(error)
    alert(`Проверте подключение к vpn
    ${error}`)
  }
}

export default genresRequest
