import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Cloudflare Workers!')
})

app.notFound((c) => {
	return c.text('ページが見つかりませんでした。', 404)
})

export default app
