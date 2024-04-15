let activeTabUrl = '';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({lastProtectionState: 'Not Protected'});
});

chrome.tabs.onActivated.addListener(activeInfo => {
    chrome.tabs.get(activeInfo.tabId, tab => {
        activeTabUrl = tab.url;
        console.log(`URL changed: ${activeTabUrl}`);
        // Send a message to the popup script
        chrome.runtime.sendMessage({activeTabUrl: activeTabUrl});
    });
});
