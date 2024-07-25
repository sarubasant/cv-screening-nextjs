// utils/docxParser.js
import mammoth from "mammoth";

export const extractTextFromDocx = async (buffer) => {
    const { value } = await mammoth.extractRawText({ buffer });
    return value;
};