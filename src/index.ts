import { helloWorld } from "./hello/hello";

export const handler = async () => {
  // TODO implement
  helloWorld();
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Ankur!'),
  };
  
  return response;
};