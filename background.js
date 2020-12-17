chrome.contextMenus.create({
  id: "dictionary-tab",
  title: "Define at Dictionary.com",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "urban-dictionary-tab",
  title: "Define at UrbanDictionary.com",
  contexts: ["selection"]
});
 
chrome.contextMenus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "dictionary-tab") {
    if (info) {
      let newTab = await chrome.tabs.create({ 'active': true, 'url': 'https://www.dictionary.com/browse/'+info.selectionText, 'index': tab.index+1 });
      chrome.tabs.update(newTab.id);
    }
  }
  else if  (info.menuItemId == "urban-dictionary-tab") {
    if (info) {
      let newTab = await chrome.tabs.create({ 'active': true, 'url': 'https://www.urbandictionary.com/define.php?term='+info.selectionText, 'index': tab.index+1 });
      chrome.tabs.update(newTab.id);
    }
  }
});