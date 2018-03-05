const {jsdom} = require('jsdom');

const buildVideoObject = (options = {}) => {
    const title = options.title || 'My favorite video';
    const videoUrl = options.videoUrl || 'http://placebear.com/g/200/300';
    const description = options.description || 'Just the best video';
    return {title, videoUrl, description};
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
    parseTextFromHTML
};