import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  cities: string[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { country } = req.body;
    const response = await axios.post('http://localhost:8000/city',{country});
    const data = response.data;
    res.status(200).json({ cities: data });
  } catch (error) {
    console.error('Error fetching countries:', error);
    res.status(500).json({ cities: [] });
  }
}
