const fs = require("fs");
const FileIO = require("../fileIO");

jest.mock("fs");

describe("FileIO", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // Your code here
      const fileIO = new FileIO();
      const file = "message.txt"
      fs.readFileSync.mockReturnValue("Hello World");
      data = fileIO.read(file);

      expect(data).toEqual("Hello World");
      expect(fs.readFileSync)

        })
      );
    });
  });

  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // Your code here
      fs.writeFileSync(
        
      )
    });
  });
});

