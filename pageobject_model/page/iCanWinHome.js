const {PageBase} = require('./PageBase.js'); 
const {Builder, By, until} = require ('selenium-webdriver'); 
 
class ICanWinHome extends PageBase{ 
    constructor(browser){ 
        super(browser); 
    } 
 async GetBr(path){
  await this.driver.get(path);
 }
 async EnterTxt(id, text){
  await this.driver.findElement(By.id(id)).sendKeys(text);
}
async ChooseParam(id, id2)
{
  await this.driver.findElement(By.id(id)).click();
  await this.driver.findElement(By.xpath(id2)).click();
}
async SendK(id, txt)
{
  await this.driver.findElement(By.xpath(id)).sendKeys(txt);
}
async ClickNSend(id)
{
  await this.driver.findElement(By.xpath(id)).click();
}
async Finish()
{
  await this.driver.quit();
}
} 
 
module.exports.ICanWinHome = ICanWinHome;
