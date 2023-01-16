import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

type Data = {
  result: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    console.log('ㅠㅠㅠㅠ');
    return res.status(302).redirect('http://localhost:3000/silent?code=code&state=state');
  } catch (e) {
    /* eslint-disable-next-line no-console */
    console.error('request new token is failed: ', (e as Error).message);
  }
}
