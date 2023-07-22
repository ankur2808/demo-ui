import { helloWorld } from "./hello/hello";

exports.handler = async (event:any) => {
  // TODO implement
  helloWorld();
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Ankur!'),
  };
  
  return response;
};