const router = require('koa-router')()
import {
  getInTheatersData,
  getComingSoonData,
  getTop250Data,
  getMovieInfoData,
} from '../api/movie'

router.prefix('/movie')

router.get('/in_theaters', async (ctx, next) => {
  const res = await getInTheatersData(ctx.request.query)

  ctx.body = res.data
})

router.get('/coming_soon', async (ctx, next) => {
  const res = await getComingSoonData(ctx.request.query)

  ctx.body = res.data
})

router.get('/top250', async (ctx, next) => {
  const res = await getTop250Data(ctx.request.query)

  ctx.body = res.data
})

router.get('/subject/:id', async (ctx, next) => {
  const res = await getMovieInfoData({ id: ctx.params.id })

  ctx.body = res.data
})

module.exports = router
