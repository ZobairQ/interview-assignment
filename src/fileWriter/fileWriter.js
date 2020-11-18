import fs from "fs";
const path = require("path");

export const outputFile = path.join(
  __dirname,
  "..",
  "..",
  "output",
  "output.json"
);

/**
 * Check if there is an output file, if so reads the previous data into the list and appends it it with new user data.
 * If file does not exist it will create it with the initial user data that is being queried.
 * @param {JSON} data  JSON data that needs to be written in file.
 */
export const writeToFile = async (data) => {
  let dataList = [];

  try {
    if (fs.existsSync(outputFile)) {
      const existingDataFromFile = await fs.readFileSync(outputFile);
      dataList = JSON.parse(existingDataFromFile);
    }

    dataList.push(data);
    await fs.writeFileSync(outputFile, JSON.stringify(dataList));
  } catch (err) {
    console.error(err);
  }

  return { message: "Data successfully written" };
};
