import { BACK_URL, http } from "../../Configs/HttpServices.js";
import { mapError } from "../../Utiils/Helpers/Errors/ErrorHelper.js";
import { formatFileData } from "../../Utiils/Helpers/Formatters/FormatLinesFiles.js";

export const fetchFilesData = async () => {
  const filesList = await getFilesListService();
  const data = [];

  for (const fileName of filesList) {
    try {
      console.log("FileName: ", fileName);
      const fileData = await getFileService(fileName);
      console.log("FileData: ", fileData);
      const formattedData = formatFileData(fileData);
      if (formattedData.length > 0) {
        data.push({ file: fileName, lines: formattedData });
      }
    } catch (error) {
      const mappedError = mapError(error);
      console.error(`Error fetching data for file: ${fileName}`, error);
      throw new Error(mappedError.message);
    }
  }

  console.log("Data fetching: ", data);

  return data;
};

export const getFilesListService = async () => {
  try {
    const response = await http.get(`${BACK_URL}/files`, {
      headers: { Authorization: "Bearer aSuperSecretKey" },
    });

    console.log("Data Files List: ", response.data.files);

    return response.data.files;
  } catch (error) {
    const mappedError = mapError(error);
    console.error(`Error in Files List Services: ${mappedError.message}`);
    throw mappedError;
  }
};

export const getFileService = async (fileName) => {
  try {
    const response = await http.get(`${BACK_URL}/file/${fileName}`, {
      headers: { Authorization: "Bearer aSuperSecretKey" },
    });
    console.log("Data Services: ", response.data);
    return response.data;
  } catch (error) {
    const mappedError = mapError(error);
    console.error(
      `Error in File (${fileName}) Services : ${mappedError.message}`
    );

    throw mappedError;
  }
};
