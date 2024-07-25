// utils/ranking.js
export const rankCVs = (cvs, keywords) => {
    return cvs.sort((a, b) => {
        const aScore = keywords.reduce((score, keyword) => score + (a.text.includes(keyword) ? 1 : 0), 0);
        const bScore = keywords.reduce((score, keyword) => score + (b.text.includes(keyword) ? 1 : 0), 0);
        return bScore - aScore;
    });
};
