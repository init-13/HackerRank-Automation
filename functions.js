
function waitAndClick(btnSelector,tabObj){

	const waitAndClickPromise = new Promise(function(resolve,reject){

		let waitForSelector = tabObj.waitForSelector(btnSelector);

		waitForSelector
		.then(function(){

			let clickbtn = tabObj.click(btnSelector);
			return clickbtn;
		})
		.then(function(){

			resolve();
		})
		.catch(function(err){
			console.log(err+"while Wait and click")
			reject();
		})
	});

	return waitAndClickPromise;

}


function solveSubmitProblem(link,tabObj,solution){


}

module.exports = {waitAndClick : waitAndClick}