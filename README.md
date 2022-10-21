# Swagger To Postman

## Description

Converts our Swagger.io api json to a Postman acceptable version for importing into Postman

## Setup

- `npm i`
- make sure you have node >=14.x


## Usage
- Open the `index.mjs` file
- Change the `JSON_URL` if you want (maybe you want to create dev, prod, mine, sandbox versions)
  - You can get the Url by going to the Swagger documentation urls and replacing `/documentation` with `/swagger.json`
  or clicking the `/swagger.json` link on the GUI.
- Run `node index.mjs`
- This will output a file to the `OUTPUT_FILE_NAME` variable
- Go to Postman hit `file -> import -> file tab (click Upload Files)` select the output file from this script
