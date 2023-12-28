// type Props = {
//   // value?: string;/
//   value: number | string | boolean;
// };

const moveZeros = (value: (boolean | number | string)[]) => {
  // const moveZeros = (value: string) => {
  try {
    for (let i = 0; i < value.length; i++) {
      if (value[i] === 0) {
        value.splice(i, 1);
        value.push(0);
      }
    }
    return value.join(" ");
  } catch (error) {
    console.log("Error:", error);
  }
};

export default moveZeros;
