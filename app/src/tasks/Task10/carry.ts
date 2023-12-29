const carry = (val: number[]) => {
  try {
    let curriedSum = curry(sum);
    return curriedSum(val[0])(val[1])(val[2]);
  } catch (error) {
    console.log("Error:", error);
  }
};

function curry(f: Function) {
  return function (a: number) {
    return function (b: number) {
      return function (c: number) {
        return f(a, b, c);
      };
    };
  };
}

function sum(f: number, s: number, t: number) {
  return f + s + t;
}

export default carry;
