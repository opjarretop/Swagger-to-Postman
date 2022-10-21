import fs from 'fs'
import fetch from 'node-fetch';
import { convert } from 'openapi-to-postmanv2';

const JSON_URL = 'http://localhost:5000/swagger.json';
const OUTPUT_FILE_NAME = 'swagger-to-postman.json';

const createFile = async () => {
  const res = await fetch(JSON_URL);
  const swaggerJson = await res.json();

  convert({ type: 'json', data: swaggerJson }, {}, (err, { output }) => {
    if (err) {
      throw Error(err.message)
    }

    fs.writeFile(OUTPUT_FILE_NAME, JSON.stringify(output[0].data), {}, () => {});
  })
}

createFile()
