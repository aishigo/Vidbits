const {jsdom} = require('jsdom');
const Video = require('../models/video');

const buildVideoObject = (options = {}) => {
	console.log("XOXOXOXO: " + options.title);
    const title = options.title || 'My favorite video';
    const videoUrl = options.videoUrl || 'http://placebear.com/g/200/300';
    const description = options.description || 'Just the best video';
    return {title, videoUrl, description};
};

const buildVideoObjectRaw = (title, videoUrl, description) => {
	console.log("HOHOHOHO: " + title + ", " + videoUrl + ", " + description);
    return {title, videoUrl, description};
};

// Add a sample Item object to mongodb
const seedVideoToDatabase = async (options = {}) => {
  const item = await Video.create(buildVideoObject(options));
  console.log("GOGOGOGOG");
  console.log(item);
  return item;
};

// extract text from an Element by selector.
const parseTextFromHTML = (htmlAsString, selector) => {
  const selectedElement = jsdom(htmlAsString).querySelector(selector);
  if (selectedElement !== null) {
    return selectedElement.textContent;
  } else {
    throw new Error(`No element with selector ${selector} found in HTML string`);
  }
};

module.exports = {
    buildVideoObject,
    buildVideoObjectRaw,
    parseTextFromHTML,
	seedVideoToDatabase
};