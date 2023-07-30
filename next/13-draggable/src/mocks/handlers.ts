import { rest } from 'msw'

export const handlers = [
  rest.post('https://mocks.com/check', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({ data: "good!" })
    )
  }),
]