import request from '../utils/request'

// 获取正在热映的数据
export const getInTheatersData = ({ start = 0, count = 20 }) => {
  return request({
    url: `/in_theaters?start=${start}&count=${count}`
  })
}

// 获取即将上映的数据
export const getComingSoonData = ({ start = 0, count = 20 }) => {
  return request({
    url: `/coming_soon?start=${start}&count=${count}`
  })
}

// 获取top250的数据
export const getTop250Data = ({ start = 0, count = 20 }) => {
  return request({
    url: `/top250?start=${start}&count=${count}`
  })
}

// 根据id获取电影数据
export const getMovieInfoData = ({ id }) => {
  return request({
    url: `/subject/${id}`
  })
}
