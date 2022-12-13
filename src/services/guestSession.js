async function guestSessionRequest() {
  const _defaultPath = 'https://api.themoviedb.org/3/authentication/guest_session/new'
  const _apiKey = '5cde17194d6b87ef840a2815c61af67e'
  const _url = `${_defaultPath}?api_key=${_apiKey}`
  try {
    let result = await fetch(_url)
    return await result.json()
  } catch (error) {
    console.log(error)
    alert(`Проверте подключение к vpn
    ${error}`)
  }
}

export default guestSessionRequest
