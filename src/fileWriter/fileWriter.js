import fs from "fs";
import jp from "jsonpath";
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
    if (await fs.existsSync(outputFile)) {
      dataList = await getJsonFromFile();
    }

    dataList.push(data);
    await fs.writeFileSync(outputFile, JSON.stringify(dataList));
  } catch (err) {
    console.error(err);
  }

  return { message: "Data successfully written" };
};

/**
 * Checks data integrity and whether the requested data is written to the file or not.
 * Using json path we find the entry in the file where the data id equals the written data id.
 * @param {JSON} data  JSON data that needs to be verified that has been correctly added to the file.
 */
export const verifyDataHasBeenWritten = async (data) => {
  if (data === null) {
    return false;
  }
  if (await !fs.existsSync(outputFile)) {
    return false;
  }

  if (await fs.existsSync(outputFile)) {
    const dataFromFile = await getJsonFromFile();
    let matchingUser = jp.query(
      dataFromFile,
      `$[?(@['id'] == '${data.id}')]`
    )[0];
    return (
      matchingUser != null &&
      matchingUser.firstName === data.firstName &&
      matchingUser.lastName === data.lastName &&
      matchingUser.email === data.email
    );
  }
  return false;
};

const getJsonFromFile = async () => {
  const existingDataFromFileRaw = await fs.readFileSync(outputFile);
  return JSON.parse(existingDataFromFileRaw);
};
