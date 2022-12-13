async function guestSessionRequest(id, starValue) {
  !localStorage.getItem(`${id}`) && localStorage.setItem(id, `${starValue}`)

  //   !localStorage.getItem('guest') && localStorage.setItem('guest', `${guestSession.guest_session_id}`)

  const _defaultPath = 'https://api.themoviedb.org/3/authentication/guest_session/new'
  const _apiKey = '5cde17194d6b87ef840a2815c61af67e'
  const _url = `${_defaultPath}?api_key=${_apiKey}`
  try {
    let result = await fetch(_url)
    const res = await result.json()
    !localStorage.getItem('guest') && localStorage.setItem('guest', `${res.guest_session_id}`)
  } catch (error) {
    console.log(error)
    alert(`Проверте подключение к vpn
    ${error}`)
  }
}

export default guestSessionRequest
