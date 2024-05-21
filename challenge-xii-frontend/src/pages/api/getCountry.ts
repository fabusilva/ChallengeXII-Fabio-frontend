import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  countries: string[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const response = await axios.get('http://localhost:8000/country');
    const data = response.data;
    const countries = data.map((country: { country: string }) => country.country);
    res.status(200).json({ countries });
  } catch (error) {
    console.error('Error fetching countries:', error);
    res.status(500).json({ countries: [] });
  }
}
