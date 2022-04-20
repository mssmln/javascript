// Understand the Hazards of Using Imperative Code
/*
capire il codice e mettere teoria
e seconda soluzione, intanto procedi con la sfida successiva
*/


const Window1 = function(tabs) {
  this.tabs = tabs; 
};

Window1.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};
  
Window1.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); 
  return this;
};
  
Window1.prototype.tabClose = function(index) {
  const tabsBeforeIndex = this.tabs.slice(0, index); 
  const tabsAfterIndex = this.tabs.slice(index + 1); 
  
  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); 
  return this;
};
  
const workWindow = new Window1(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
const socialWindow = new Window1(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); 
const videoWindow = new Window1(['Netflix', 'YouTube', 'Vimeo', 'Vine']); 
  
const finalTabs = socialWindow
  .tabOpen() 
  .join(videoWindow.tabClose(2)) 
  .join(workWindow.tabClose(1).tabOpen());

console.log(finalTabs.tabs);