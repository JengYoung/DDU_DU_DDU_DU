import { rest } from 'msw'

export const handlers = [
  rest.post('/check', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(404),
      ctx.text("user token couldn't find.")
    )
  }),
]