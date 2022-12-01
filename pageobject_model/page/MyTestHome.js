const {PageBase} = require('./PageBase.js'); 
const {Builder, By, until, Key} = require ('selenium-webdriver'); 
 
class MyTestHome extends PageBase{ 
    constructor(browser){ 
        super(browser); 
    } 
 async GetBr(path){
    await this.driver.manage().window().maximize();
  await this.driver.get(path);
 }
 async EnterTxt(id, text){
  await this.driver.findElement(By.xpath(id)).sendKeys(text, Key.RETURN);
}

async Finish()
{
  await this.driver.sleep(5000);
  await this.driver.quit();
}
} 
 
module.exports.MyTestHome = MyTestHome;
