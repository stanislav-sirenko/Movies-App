async function serverRequest(movie, page) {
  const _defaultPath = 'https://api.themoviedb.org/3/search/movie'
  const _apiKey = '5cde17194d6b87ef840a2815c61af67e'
  const _language = 'ru-RU'
  const _url = `${_defaultPath}?api_key=${_apiKey}&language=${_language}&query=${movie || 'return'}&page=${page}`
  try {
    let result = await fetch(_url)
    return await result.json()
  } catch (error) {
    console.log(error)
    alert(`Проверте подключение к vpn
    ${error}`)
  }
}

export default serverRequest
