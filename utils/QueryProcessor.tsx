export default function QueryProcessor(query: string): string {
  const lowerCaseQuery = query.toLowerCase();

  if (lowerCaseQuery.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (lowerCaseQuery.includes("usb id")) {
    return "15-11669";
  }

  if (lowerCaseQuery.includes("name")) {
    return "ANGRODHER2";
  }

  const mathQueryMatch = lowerCaseQuery.match(/what is (\d+) plus (\d+)\?/);
  if (mathQueryMatch) {
    const num1 = parseInt(mathQueryMatch[1], 10);
    const num2 = parseInt(mathQueryMatch[2], 10);
    return (num1 + num2).toString();
  }

  const largestQueryMatch = lowerCaseQuery.match(/which of the following numbers is the largest: ([\d, ]+)\?/);
  if (largestQueryMatch) {
    const numbers = largestQueryMatch[1]
      .split(",")
      .map((num) => parseInt(num.trim(), 10));
    const largest = Math.max(...numbers);
    return largest.toString();
  }

  const squareAndCubeQueryMatch = lowerCaseQuery.match(/which of the following numbers is both a square and a cube:\s*([\d,\s]+)\?/i);
  if (squareAndCubeQueryMatch) {
    const numbers = squareAndCubeQueryMatch[1]
      .split(",")
      .map((num) => parseInt(num.trim(), 10));
    const results = numbers.filter((num) => {
      if (isNaN(num)) return false;
      const sqrt = Math.sqrt(num);
      const cbrt = Math.cbrt(num);
      return Number.isInteger(sqrt) && Number.isInteger(cbrt);
    });
    return results.join(", ");
  }

  return "";
}
