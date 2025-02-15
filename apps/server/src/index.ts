import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('This is main route')
})

export default app
