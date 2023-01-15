import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

type Data = {
  result: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    console.log('redirect - http://localhost:3000/?code=code&state=state');
    return res.status(302).redirect('http://localhost:3000/silent?code=code&state=state');
  } catch (e) {
    console.log('request new token is failed: ', (e as Error).message);
  }
}
