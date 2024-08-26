// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req: { params: { num: number; }; }, res: { send: (arg0 : string) => void; }) => {
  const { num } = req.params;

  const fibN : number = fibonacci(num);
  let result : string = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
