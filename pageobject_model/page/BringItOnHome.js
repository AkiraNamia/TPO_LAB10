const {PageBase} = require('./PageBase.js'); 
const {Builder, By, until, Key} = require ('selenium-webdriver'); 
 
class BringItOnHome extends PageBase{ 
    constructor(browser){ 
        super(browser); 
    } 
 async GetBr(path){
  await this.driver.get(path);
 }
 async EnterTxt(id, text){
  await this.driver.findElement(By.id(id)).sendKeys(text, Key.RETURN);
}
async ChooseParam(id,xp1, id2,xp2)
{
  await this.driver.findElement(By.id(id)).click();
  await this.driver.findElement(By.xpath(xp1)).click();
  await this.driver.findElement(By.id(id2)).click();
  await this.driver.findElement(By.xpath(xp2)).click();
}
async SendK(id, txt)
{
  await this.driver.findElement(By.xpath(id)).sendKeys(txt);
}
async ClickNSend(id)
{
  await this.driver.findElement(By.xpath(id)).click();
}
async Check(cl1,txt1,cl2,txt2,xp,txt3, color)
{
  if (await this.driver.findElement(By.className(cl1)).getText() ==txt1)  {console.log("check1");} 
      else console.log("fail1");
  if (await this.driver.findElement(By.className(cl2)).getText() ==txt2) 
     {console.log("check2");} else console.log("fail2");
  if (await this.driver.findElement(By.xpath(xp)).getCssValue(txt3) ==color) 
      {console.log("check3");} else console.log("fail3");
}
async Finish()
{
  await this.driver.quit();
}
} 
 
module.exports.BringItOnHome = BringItOnHome;
