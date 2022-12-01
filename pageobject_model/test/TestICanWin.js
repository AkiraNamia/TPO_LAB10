const {PageBase} = require('D:/study/3/TPO/lab9/pageobject_model/page/PageBase.js'); 
const {Builder, By, until} = require ('selenium-webdriver'); 
const {ICanWinHome} = require('D:/study/3/TPO/lab9/pageobject_model/page/iCanWinHome.js') 
 
 
const TestICanWin = async () => { 
    
  const iCanWinHome  = new ICanWinHome('chrome'); 
  await iCanWinHome.GetBr('https://pastebin.com'); 
  await iCanWinHome.EnterTxt('postform-text', "Hello from WebDriver"); 
  await iCanWinHome.ChooseParam('select2-postform-expiration-container', "//*[@class='select2-results__option' and text()='10 Minutes']"); 
  await iCanWinHome.SendK("//*[@id='postform-name']", "helloweb");
  await iCanWinHome.ClickNSend("//*[@id='w0']/div[5]/div[1]/div[10]/button");
  await iCanWinHome.Finish();
}  
 
TestICanWin();