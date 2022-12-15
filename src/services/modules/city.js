import hxRequest from "../request"

// 获取所有城市列表
export const getCityAll = () => {
  return hxRequest.get({
    url: '/city/all'
  })
}

