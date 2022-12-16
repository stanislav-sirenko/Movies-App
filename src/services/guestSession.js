const _defaultPath = 'https://api.themoviedb.org/3/'
const _apiKey = '5cde17194d6b87ef840a2815c61af67e'

const postRequest = (id, starValue) => {
  const header = {
    value: starValue,
  }
  localStorage.setItem(id, `${starValue}`)

  let _url = `${_defaultPath}movie/${id}/rating?api_key=${_apiKey}&guest_session_id=${localStorage.getItem('guest')}`

  try {
    return fetch(_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(header),
    }).then((response) => response.json())
  } catch (error) {
    console.log('ошибка пост запроса ' + error)
    alert(`Проверте подключение к vpn
    ${error}`)
  }
}

const guestSessionRequest = () => {
  let _url = `${_defaultPath}authentication/guest_session/new?api_key=${_apiKey}`

  try {
    return fetch(_url).then((response) => response.json())
  } catch (error) {
    console.log('ошибка запроса id гостевой сессии ' + error)
    alert(`Проверте подключение к vpn
    ${error}`)
  }
}

const getRequest = () => {
  let _url = `${_defaultPath}guest_session/${localStorage.getItem(
    'guest'
  )}/rated/movies?api_key=${_apiKey}&language=ru-RU&sort_by=created_at.asc`

  try {
    return fetch(_url).then((response) => response.json())
  } catch (error) {
    console.log('ошибка гет запроса ' + error)
    alert(`Проверте подключение к vpn
    ${error}`)
  }
}

export { guestSessionRequest, postRequest, getRequest }
