import { getFilesListService } from "../../Services/Files/FilesServices.js";

export const FilesListController = async (req, res) => {
  try {
    const data = await getFilesListService();

    res.status(200).send(data);
  } catch (error) {
    console.error(`Error fetching files data in controller: ${error.message}`);
    res.status(error.status || 500).json({
      error: error.type,
      message: `${error.errorData?.code} - ${error.message}`,
    });
  }
};
