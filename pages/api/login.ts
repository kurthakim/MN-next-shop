import { NextApiHandler } from 'next';
import { fetchJson } from '../../lib/api';

interface User {
  id: number;
  name: string;
}

const handleLogin: NextApiHandler<User> = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  // console.log('req.body:', req.body);
  // res.status(200).json({});

  const { email, password } = req.body;
  try {
    const { jwt, user } = await fetchJson('http://localhost:1337/auth/local', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier: email, password }),
    });

    res.status(200).json({
      id: user.id,
      name: user.username,
    });
  } catch (err) {
    res.status(401).end();
  }
};

export default handleLogin;
