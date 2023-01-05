import { getData, handleForm } from "../client/js/getData";

describe("Test functions", () => {
  test("Test functions were defined", () => {
    expect(getData).toBeDefined();
    expect(handleForm).toBeDefined();
  });
});
