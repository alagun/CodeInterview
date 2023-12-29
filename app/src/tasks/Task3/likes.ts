// likes([]) --> 'no one likes this'
// likes(['Peter']) --> 'Peter likes this'
// likes(['Jacob', 'Alex']) --> 'Jacob and Alex like this'
// likes(['Max', 'John', 'Mark']) --> 'Max, John and Mark like this')
// likes(['Alex', 'Jacob', 'Mark', 'Max']) --> 'Alex, Jacob and 2 others like this'

const likes = (arr: string[]) => {
  try {
    if (!Array.isArray(arr)) {
      throw new Error("it's no array");
    }
    if (arr.length === 0) {
      return "no one likes this";
    } else if (arr.length === 1) {
      return `${arr[0]} likes this`;
    } else if (arr.length === 2) {
      return `${arr[0]} and ${arr[1]} likes this`;
    } else if (arr.length === 3) {
      return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
    } else {
      const [first, second, ...all] = arr;
      return `${first}, ${second} and ${all.length} others like this`;
    }
  } catch (error) {
    console.log("Error:", error);
  }
};

export default likes;
