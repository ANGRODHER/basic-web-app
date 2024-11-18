import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom';

describe("QueryProcessor", () => {
  test("should return a string", () => {
    const query = "test";
    const response: string = QueryProcessor(query);
    expect(typeof response).toBe("string");
  });

  test("should return Shakespeare's description", () => {
    const query = "shakespeare";
    const response: string = QueryProcessor(query);
    expect(response).toBe(
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  });

  test("should return the USB ID", () => {
    const query = "what's your USB ID?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("15-11669");
  });

  test("should return the name", () => {
    const query = "what is your name?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("ANGRODHER2");
  });
  test("should calculate a math expression", () => {
    const query = "What is 23 plus 35?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("58");
  });
  test("should find the largest number", () => {
  const query = "Which of the following numbers is the largest: 64, 2, 23?";
  const response: string = QueryProcessor(query);
  expect(response).toBe("64");
});
  test("should find numbers that are both squares and cubes", () => {
  const query = "Which of the following numbers is both a square and a cube: 4360, 529, 2264, 512, 2581, 64, 1668?";
  const response: string = QueryProcessor(query);
  expect(response).toBe("64, 512");
});

});

