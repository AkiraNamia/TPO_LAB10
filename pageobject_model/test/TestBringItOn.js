const {PageBase} = require('D:/study/3/TPO/lab9/pageobject_model/page/PageBase.js'); 
const {Builder, By, until} = require ('selenium-webdriver'); 
const {BringItOnHome} = require('D:/study/3/TPO/lab9/pageobject_model/page/BringItOnHome.js') 
 
 
const TestBringItOn = async () => { 
    
  const bringItOnHome  = new BringItOnHome('chrome'); 
  await bringItOnHome.GetBr('https://pastebin.com'); 
  await bringItOnHome.EnterTxt('postform-text', "git config --global user.name  'New Sheriff in Town' git reset $(git commit-tree HEAD^{tree} -m 'Legacy code') git push origin master --force"); 
  await bringItOnHome.ChooseParam('select2-postform-format-container', "//*[@class='select2-results__option' and text()='Bash']", 'select2-postform-expiration-container', "//*[@class='select2-results__option' and text()='10 Minutes']"); 
  await bringItOnHome.SendK("//*[@id='postform-name']", "how to gain dominance among developers");
  await bringItOnHome.ClickNSend("//*[@id='w0']/div[5]/div[1]/div[10]/button");
//   await bringItOnHome.Check("info-top","how to gain dominance among developers","bash","git config --global user.name  'New Sheriff in Town' git reset $(git commit-tree HEAD^{tree} -m 'Legacy code' git push origin master --force","//*[@class='kw2']","color","rgba(185, 202, 74, 1)")
  await bringItOnHome.Finish();
}  
 
TestBringItOn();