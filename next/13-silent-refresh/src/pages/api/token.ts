import { createHash } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

type Data = {
  access_token: string;
  scope: string;
  id_token: string;
  token_type: 'Bearer';
  expires_in: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data | string>) {
  const code_challenge = '1234';
  const code = 'code';

  try {
    const sha256CodeChallenge = createHash('sha256').update(code_challenge).digest('hex');

    if (sha256CodeChallenge !== req.query.code_verifier)
      throw new Error('code_verifier not matched');
    if (code !== req.query.code) throw new Error('code is different');
    if (req.query.client_id !== 'seeyouletter') throw new Error('client_id is not seeyouletter');

    return res.status(200).send({
      access_token:
        'eyJraWQiOiJmOGQyMDk4OS1iMTkxLTQxNTgtODc2Mi02ZWNiMDhjZmM3MTciLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiYXVkIjoic2VleW91bGV0dGVyIiwibmJmIjoxNjcyNjQwMTYxLCJzY29wZSI6WyJ1c2VyLnJlYWQiLCJvcGVuaWQiXSwiaXNzIjoiaHR0cDovL2F1dGgtc2VydmVyOjkwMDAiLCJleHAiOjE2NzI2NDA0NjEsImlhdCI6MTY3MjY0MDE2MX0.OI2CuvD13h71xnH4FQtu_0nQpQJUuIB8OnuFY1GVf0SefNcDI1PsfMXMy5SrCekj9s7aO8-L7Qk5Y5OZ-_ZBYF_xENU7K3_FlQKdl5IWBYdyVrOv6R2salgK5A35gWFI-3jEr5CTW6P9vlL_xNf4NJFigdYBzU1TTxH7cIVIV5qkvg1K_t_HVsguL42AeMkQsVexCRZuNCZl105y-zttAZKCJlSvtdGLcwCqmxELq0sixsHRpRF-ziQe98KxmhOxfVRG-WGXhNSSn3MV2UrqOjepJQMC04ek4hgwFPxQ1puZWgDMBuGJUUo4mj61ui2H_HXSJHZdvIpQGKvBsT-lMg',
      scope: 'user.read openid',
      id_token:
        'eyJraWQiOiJmOGQyMDk4OS1iMTkxLTQxNTgtODc2Mi02ZWNiMDhjZmM3MTciLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiYXVkIjoic2VleW91bGV0dGVyIiwiYXpwIjoic2VleW91bGV0dGVyIiwiaXNzIjoiaHR0cDovL2F1dGgtc2VydmVyOjkwMDAiLCJleHAiOjE2NzI2NDE5NjEsImlhdCI6MTY3MjY0MDE2MSwibm9uY2UiOiJhYmMifQ.pZ_PHUeyDwFyLM4dUqQZOXCtsp41J0A_94AzZyewrNmDMruKYZYTsKwVEAdchZSJL2XSKWKPMyfWNIowcbVbQMGVsdcF6B0hbKRoAICDtCpSYs6cX8a1xruuuPqibqALpG3MoK0tDn1539LOU3lLx-_4rFZWnJSEcZ6g9aArLF909PfQxsrlbS7LBMUY5kigqJxFmiPTlzPJPTA4tiiFyHRcgsSKl0l7sk2myNM5-ak1P75BwX-7FR1DFPye6B4EfP5Y3raXeMGz9yEu4x7v3TmZN2YgJCuUY8PwsXqo8mVIMvqYGQVtVmqsG3sdQk5t21pbyzW-Dr0FywdFouFb3A',
      token_type: 'Bearer',
      expires_in: 299,
    });
  } catch (e) {
    /* eslint-disable-next-line no-console */
    console.error('request new token is failed: ', (e as Error).message);
    res.status(401).send('request new token is failed');
  }
}
