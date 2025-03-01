async function loadWords() {
    const response = await fetch(chrome.runtime.getURL("config.json"));
    const data = await response.json();
    chrome.storage.local.set({ words: data.words });
}

// Load words on extension installation and startup
chrome.runtime.onInstalled.addListener(loadWords);
chrome.runtime.onStartup.addListener(loadWords);
