import hxRequest from '../request/index'
export const getHomeSuggests = () => {
  return hxRequest.get({
    url: '/home/hotSuggests'
  })
}

export const getCategories = () => {
  return hxRequest.get({
    url: '/home/categories'
  })
}

export const getHouseList = (page) => {
  return hxRequest.get({
    url: 'home/houselist',
    params: {
      page
    }
  })
}
