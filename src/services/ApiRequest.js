async function serverRequest() {
  const _defaultPath = 'https://api.themoviedb.org/3/search/movie'
  const _apiKey = '5cde17194d6b87ef840a2815c61af67e'
  const _language = 'ru'
  const _url = `${_defaultPath}?api_key=${_apiKey}&language=${_language}&query=return`
  try {
    let result = await fetch(_url)
    return await result.json()
  } catch (e) {
    console.log(e)
  }
}

export default serverRequest
