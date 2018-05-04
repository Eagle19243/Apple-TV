App.onLaunch = function(options) {
    const baseURL = options.BASEURL;
    const scriptURLs = [
        "Constants",
        "Utils"
    ].map(
        moduleName => `./${moduleName}.js`
    );
    console.log(location.href);
    console.log(scriptURLs);
    evaluateScripts(scriptURLs, function(success){
        if (success) {
            const loadingDoc = CreateLoadingDocument();
            navigationDocument.pushDocument(loadingDoc);
        } else {
            const alertDoc = CreateAlertDocument();
            navigationDocument.pushDocument(alertDoc);
            throw new EvalError("Internet Archive application.js: unable to evaluate scripts.");
        }
    }); 
}