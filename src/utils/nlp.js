// utils/nlp.js
import * as use from "@tensorflow-models/universal-sentence-encoder";

export const extractKeywords = async (text) => {
    const model = await use.load();
    const sentences = text.split(". ");
    const embeddings = await model.embed(sentences);
    // Implement your keyword extraction logic here
    return sentences; // This is just a placeholder
};
