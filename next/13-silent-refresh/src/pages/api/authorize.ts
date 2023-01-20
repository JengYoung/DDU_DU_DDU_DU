import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

type Data = {
  result: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    res.setHeader('Location', 'http://localhost:3000/auth/redirect?code=code&state=state');
    res.setHeader('X-Frame-Options', 'sameorigin');
    return res.status(308).redirect('http://localhost:3000/auth/redirect?code=code&state=state');
  } catch (e) {
    /* eslint-disable-next-line no-console */
    console.error('request new token is failed: ', (e as Error).message);
  }
}
