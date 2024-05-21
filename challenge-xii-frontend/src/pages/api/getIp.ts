import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  city: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    const ip = response.data.ip;
    const location = await axios.get(`http://ip-api.com/json/${ip}`);
    const city = `${location.data.city} - ${location.data.region}`;
    res.status(200).json({ city });
  } catch (error) {
    console.error('Error fetching IP:', error);
    res.status(500).json({ city: 'Failed to fetch city' });
  }
}
