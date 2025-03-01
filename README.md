# Bibinos Extension

## Description
The *Bibinos Extension* fixes incorrect naming of famous music artist - Bibinos, commonly mistaken as "baby no money" or "bbno$".
The extension replaces the incorrect names with the correct one while preserving the original text casing.

## Features
- Fixes incorrect naming of Bibinos on web pages.
- Observes changes in the DOM to replace words dynamically.
- Configurable list of words to replace, stored in [`config.json`](./config.json).

## Installation
1. Clone the repository to your local machine or download from [*here*](https://github.com/Guliveer/Bibinos/releases/latest/download/Bibinos.zip).
2. Open Chrome and navigate to `chrome://extensions/` (or equivalent for your browser).
3. Enable "**Developer mode**" by toggling the switch in the top right corner.
4. Click "**Load unpacked**" and select the directory with the extension files.

## Usage
1. The extension will automatically replace the specified words on any web page you visit.
2. The list of words to replace is defined in [`config.json`](./config.json).

## Files
- [`manifest.json`](./manifest.json): Defines the extension's metadata and permissions.
- [`background.js`](./background.js): Loads the list of words from [`config.json`](./config.json) and stores them in Chrome's local storage.
- [`content.js`](./content.js): Contains the logic for replacing words on web pages and observing DOM changes.
- [`config.json`](./config.json): Contains the list of words to be replaced.

## Configuration
To update the list of words to be replaced:
1. Open [`config.json`](./config.json).
2. Add or remove words from the "words" array.
3. Reload the extension in Chrome.

## Example
Here is an example of the [`config.json`](./config.json) file:
```json
{
  "words": [
    "bbno$",
    "babyno$",
    "bbnomula",
    "babynomula",
    "bbnomoney",
    "babynomoney",
    "baby no money"
  ]
}
```

---
Made by Oliwer Paweslki // Guliveer 🚀  
[github.com/Guliveer](https://github.com/Guliveer)
