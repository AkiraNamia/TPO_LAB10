const {PageBase} = require('D:/study/3/TPO/lab9/pageobject_model/page/PageBase.js'); 
const {Builder, By, until} = require ('selenium-webdriver'); 
const {MyTestHome} = require('D:/study/3/TPO/lab9/pageobject_model/page/MyTestHome.js') 
 
 
const TestMyTest = async () => { 
    
  const myTestHome  = new MyTestHome('chrome'); 
  await myTestHome.GetBr('https://markformelle.by/'); 
  await myTestHome.EnterTxt("//*[@class='search-active-desc']", "Однотонные брюки клеш в темно-фиолетовом цвете"); 
  await myTestHome.Finish();
}  
 
TestMyTest();