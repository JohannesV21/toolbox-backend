import {
  fetchFilesData,
  getFileService,
  getFilesListService,
} from "../../Services/Files/FilesServices.js";
import { mapError } from "../../Utiils/Helpers/Errors/ErrorHelper.js";

export const getFilesData = async (req, res) => {
  try {
    // res.status(200).json({ message: "Files Controller" });
    // const data = await getFilesListService();
    // const data = await getFileService("test4.csv");
    const data = await fetchFilesData();
    // console.log("Controller: ", data);
    res.status(200).send(data);
  } catch (error) {
    console.error(`Error fetching files data in controller: ${error.message}`);
    res.status(error.status || 500).json({
      error: error.type,
      message: `${error.errorData?.code} - ${error.message}`,
    });
  }
};
