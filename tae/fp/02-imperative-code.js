// Understand the Hazards of Using Imperative Code
/*
In English (and many other languages), the imperative tense is used to give commands. 
Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.
Often the statements change the state of the program, like updating global variables. 
A classic example is writing a for loop that gives exact directions to iterate over the indices of an array.
In contrast, functional programming is a form of declarative programming. 
You tell the computer what you want done by calling a method or function.
JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. 
For example, instead of using the for loop mentioned above, you could call the map method which handles 
the details of iterating over an array. This helps to avoid semantic errors
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
  // or  
  // const tabsAfterIndex = this.tabs.splice(1);
  // but this creates side effects (changes to the original array) and should be avoided in practice
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