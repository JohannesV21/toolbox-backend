export const formatFileData = (fileData) => {
  const lines = fileData.split("\n");
  const headers = lines[0].trim().split(",");

  if (
    headers.length !== 4 ||
    headers[0] !== "file" ||
    headers[1] !== "text" ||
    headers[2] !== "number" ||
    headers[3] !== "hex"
  ) {
    throw new Error("CSV format is incorrect");
  }

  const formattedLines = [];

  // Procesa cada línea del archivo a partir de la segunda
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim().split(",");

    if (line.length === 4) {
      const [file, text, number, hex] = line;

      // Validaciones para agregar la linea
      if (text && !isNaN(number) && hex.length === 32) {
        formattedLines.push({
          text: text.trim(),
          number: parseInt(number, 10),
          hex: hex.trim(),
        });
      }
    }
  }

  return formattedLines;
};
