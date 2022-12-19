import hxRequest from '../request'

export function getHotSuggests() {
  return hxRequest({
    url: '/home/suggests'
  })
}
