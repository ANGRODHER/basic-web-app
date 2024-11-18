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

  const mathMatch = lowerCaseQuery.match(/what is (\d+) plus (\d+)\?/);
  if (mathMatch) {
    const num1 = parseInt(mathMatch[1], 10);
    const num2 = parseInt(mathMatch[2], 10);
    return (num1 + num2).toString();
  }

  const largestMatch = lowerCaseQuery.match(/which of the following numbers is the largest: ([\d, ]+)\?/);
  if (largestMatch) {
    const numbers = largestMatch[1]
      .split(",")
      .map((num) => parseInt(num.trim(), 10));
    const largest = Math.max(...numbers);
    return largest.toString();
  }

  return "";
}
