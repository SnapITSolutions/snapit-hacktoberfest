// Check to determine if the current month is October

const present = new Date();
const octoberStart = new Date("Oct 01 2021");
const novemberStart = new Date("Nov 01 2021");
const isHacktoberfest = present >= octoberStart && present < novemberStart;

export default isHacktoberfest;
