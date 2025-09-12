## MCP-SERVER

## To Run Locally
* Make sure docker is running locally.
* Open up command prompt and navigate to repository address.
* Run this to build the docker image (123456789 can be anything):
  ```bash
  build -t 123456789 .
* Run this to run image (123456789 must match your tag value):
  ```bash
  docker run -d -p 3000:3000 --name AnyName 123456789
* From a browser, navigate to http://localhost:3000/

## To Connect Via GitHub Copilot
....