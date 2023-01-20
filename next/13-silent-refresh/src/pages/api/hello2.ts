// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const token = 'privated-token';

  if (res) {
    res.setHeader(
      'Set-Cookie',
      encodeURI(
        `access_token=${token}; Path=/; Expires=${new Date(
          Date.now() + 60 * 60 * 24 * 1000 * 3
        )}; HttpOnly`
      )
    );
  }

  res.status(200).json({ name: 'John Doe' });
}
