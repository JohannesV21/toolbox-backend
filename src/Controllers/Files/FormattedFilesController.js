import {
  fetchFilesData,
  getFileService,
  getFilesListService,
} from "../../Services/Files/FilesServices.js";

export const FormattedFilesController = async (req, res) => {
  try {
    console.log(req.query.fileName);
    const fileName = req.query.fileName;
    let data = {};

    if (fileName) {
      data = await getFileService(fileName);
    } else {
      data = await fetchFilesData();
    }
    // const data = await getFilesListService();
    res.status(200).send(data);
  } catch (error) {
    console.error(`Error fetching files data in controller: ${error.message}`);
    res.status(error.status || 500).json({
      error: error.type,
      message: `${error.errorData?.code} - ${error.message}`,
    });
  }
};
