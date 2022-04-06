// Importing pupeteer and other information

const puppeteer = require("puppeteer");
const details = require("./detail");
const functions = require("./functions");

let browserOpenPromises = puppeteer.launch({
	headless: false,
	defaultviewport:null,
	// args: ["--start-maximized"],
	executablePath: details.browser
});

let currTab;

browserOpenPromises.then(function (browser){

	console.log("browser Opened");

	let alltabsPromise = browser.pages();
	return alltabsPromise;
	
}).then(function (tabArray){
	console.log("Tab Open");

	 currTab = tabArray[0];
	let visitLoginPromise = currTab.goto(details.siteLink);
	return visitLoginPromise;
}).then(function(){

	console.log("Hackerrank Tab Opened");

	let typeUsername = currTab.type("input[name='username']",details.username);
	return typeUsername;
}).then(function(){

	console.log("Username Typed");
	let typePass = currTab.type("input[type='password']",details.password);
	return typePass;
}).then(function(){

	console.log("password typed");
	let clickLogin = currTab.click(details.btnLogin);
	return clickLogin;

})
.then(function(){

	console.log("Login Successful");

	let algobtnclickPromise = functions.waitAndClick(details.btnAlgorithm,currTab);
	return algobtnclickPromise;

})
.then(function(){

	console.log("Algorithm Page Open");
	let allQuesPromise = functions.waitAndClick(details.btnAllQ,currTab);
	return allQuesPromise;
})
.then(function(){

	function getallquesfrombrowser(){
		let allele = document.querySelectorAll('a[data-analytics="ChallengeListChallengeName"]');

		let QuesArr = [];

		for(let i =0;i<allele.length;i++){
			QuesArr.push(allele[i].getAttribute('href'));
		}

		return QuesArr;
	}

	let getallQuesfromBrowserPromise = currTab.evaluate(getallquesfrombrowser);
	return getallQuesfromBrowserPromise;
})
.then(function(QuesArr){
	console.log("All Questions Link recieved");
	console.log(QuesArr);
})

.catch(function(err){
	console.log(err);

})

