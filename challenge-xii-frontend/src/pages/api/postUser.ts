import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { fistName,lastName,email,country,city,referralCode,typeCar } = req.body;
    console.log(fistName,lastName,email,country,city,referralCode,typeCar)
    const response = await axios.post('http://localhost:8000/user',{ fistName,lastName,email,country,city,referralCode,typeCar });
    const data = response.data;
    res.status(200).json({ data });
  } catch (error) {
    //console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error });
  }
}
