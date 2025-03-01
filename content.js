function escapeRegex(text) {
    return text.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

function matchCase(text, pattern) {
    if (pattern === pattern.toLowerCase()) return text.toLowerCase();
    if (pattern === pattern.toUpperCase()) return text.toUpperCase();
    if (pattern[0] === pattern[0].toUpperCase()) return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    return text;
}

function replaceText(node, words) {
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.nodeValue;
        words.forEach(word => {
            let regex = new RegExp(escapeRegex(word), "gi");
            text = text.replace(regex, match => matchCase("Bibinos", match));
        });
        node.nodeValue = text;
    } else {
        node.childNodes.forEach(child => replaceText(child, words));
    }
}

function replaceTitle(words) {
    if (!document.title) return;
    let newTitle = document.title;
    words.forEach(word => {
        let regex = new RegExp(escapeRegex(word), "gi");
        newTitle = newTitle.replace(regex, match => matchCase("Bibinos", match));
    });
    if (newTitle !== document.title) {
        document.title = newTitle;
    }
}

function observeChanges(words) {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => replaceText(node, words));
        });
        replaceTitle(words);
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

chrome.storage.local.get("words", data => {
    if (data.words) {
        replaceText(document.body, data.words);
        replaceTitle(data.words);
        observeChanges(data.words);
    }
});