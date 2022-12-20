import hxRequest from '../request/index'
export const getHomeSuggests = () => {
  return hxRequest.get({
    url: '/home/hotSuggests'
  })
}
