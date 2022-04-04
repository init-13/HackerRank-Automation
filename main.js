// Importing pupeteer and other information

const pupeteer = require("pupeteer");
const details = require("./detail");
const functions = require("./functions");

let browserOpenPromises = puppeteer.launch({
	headless: false,
	defaultviewport:null,
	// args: ["--start-maximized"],
	executablePath: details.browser
});

let currTab;

