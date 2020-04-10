const Child = require("../child");

describe("Child", () => {
  describe("name", () => {
  // Positive test
  it("should create an object with a 'name' property set as a 'string'", () => {
    // Arrange
    const text = "";
    // Act
    const obj = new Child(text);
    // Assert
    expect(obj.text).toEqual(text);
  });

  // Exception test
  it("should throw an error if not provided a string value or given an empty string", () => {
    // Arrange
    const cb = () => new Child();
    const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
    );

    // Assert
    expect(cb).toThrowError(err);
  });
});
});
});
