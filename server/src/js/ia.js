App.onLaunch = function(options) {
    const loadingDoc = CreateLoadingDocument();
    navigationDocument.pushDocument(loadingDoc);
}

/**
 * Convenience function to create a TVML loading document with a specified title.
 */
function CreateLoadingDocument(title) {
    // If no title has been specified, fall back to "Loading...".
    title = title || "Loading...";

    const template = 
        `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
            <loadingTemplate>
                <activityIndicator>
                    <title>${title}</title>
                </activityIndicator>
            </loadingTemplate>
        </document>`;

    return new DOMParser().parseFromString(template, "application/xml");
}

/**
 * Convenience function to create a TVML alert document with a title and description.
 */
function CreateAlertDocument(title, description) {
    const template = `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
            <alertTemplate>
                <title>${title}</title>
                <description>${description}</description>
            </alertTemplate>
        </document>
    `;

    return new DOMParser().parseFromString(template, "application/xml");
}