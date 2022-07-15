import path from 'path';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';

//Creates an API endpoint that reads the json file and returns it as a response

type Data = {
  data: object;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //Finds path of json file, reads it, and returns it as a json object
  const jsonDirectory: string = path.join(process.cwd(), 'data');
  const fileContents: string = await fs.readFile(
    jsonDirectory + '/data.json',
    'utf8'
  );
  res.status(200).json(JSON.parse(fileContents));
}
