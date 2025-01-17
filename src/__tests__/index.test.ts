import { to18, to15 } from "../index";

describe("Salesforce ID Converter", () => {
  test("converts 15 char ID to 18 char", () => {
    expect(to18("a01B000000JsLAI")).toBe("a01B000000JsLAIIA3");
  });

  test("returns original if already 18 char", () => {
    expect(to18("a01B000000JsLAIIAM")).toBe("a01B000000JsLAIIAM");
  });

  test("throws error for invalid length", () => {
    expect(() => to18("invalid")).toThrow("Input ID must be 15 characters");
  });

  test("converts 18 char ID to 15 char", () => {
    expect(to15("a01B000000JsLAIIAM")).toBe("a01B000000JsLAI");
  });

  test("returns original if already 15 char", () => {
    expect(to15("a01B000000JsLAI")).toBe("a01B000000JsLAI");
  });

  test("throws error for invalid length", () => {
    expect(() => to15("invalid")).toThrow("Input ID must be 18 characters");
  });

  test("handles multiple test cases correctly", () => {
    const testCases = [
      ["00D000000000001", "00D000000000001EAA"],
      ["005000000000001", "005000000000001AAA"],
      ["00Q000000000001", "00Q000000000001EAA"]
    ];

    testCases.forEach(([input, expected]) => {
      expect(to18(input)).toBe(expected);
    });
  });
});
