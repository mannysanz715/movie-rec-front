import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/movieList`

async function getMovieRec(genre){
  try {
    const res = await fetch(`${BASE_URL}/${genre}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json(res)
  } catch (error) {
    console.log(error)
    return error
  }
}

export {
  getMovieRec
}