// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';

export default async function handler(req, res) {
  try {
    const [headers, ...data] = await fs
      .readFileSync('data/airdrops.csv', 'utf8')
      ?.split(/\r?\n/)
      .filter((row) => !!row)
      .map((row) => row.split(';'));

    const result = data.map((row) => {
      const item = {};
      for (const index in headers) {
        item[headers[index]] = row[index];
      }
      return item;
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'failed to fetch data' });
  }
}
