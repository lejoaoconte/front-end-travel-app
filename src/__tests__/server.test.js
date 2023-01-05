import multiply from "../server/multiply";

describe("Server function test", () => {
  test("Expect 2 * 2 to be 4", () => {
    expect(multiply(2, 2)).toBe(4);
  });
});
