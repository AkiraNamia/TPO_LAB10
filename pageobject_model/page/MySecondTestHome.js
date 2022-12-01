const {PageBase} = require('./PageBase.js'); 
const {Builder, By, until, Key} = require ('selenium-webdriver'); 
 
class MySecondTestHome extends PageBase{ 
    constructor(browser){ 
        super(browser); 
    } 
 async GetBr(path){
    await this.driver.manage().window().maximize();
  await this.driver.get(path);
  await this.driver.sleep(3000);

 }
 async FindEl(xp){
  await this.driver.findElement(By.xpath(xp)).click();
}
async FindCountry(xp1,xp2){
    await this.driver.sleep(1000);
    await this.driver.findElement(By.xpath(xp1)).click();
    await this.driver.sleep(1000);
    await this.driver.findElement(By.xpath(xp2)).click();

  }

async Finish()
{
  await this.driver.sleep(5000);
  await this.driver.quit();
}
} 
 
module.exports.MySecondTestHome = MySecondTestHome;
// await driver.sleep(5000);

// await driver.findElement(By.xpath("/html/body/div[2]/div/div[3]/a")).click();
// await driver.sleep(2000);

// await driver.findElement(By.xpath("/html/body/div[2]/div/div[1]/div/div[2]/div/div[1]/span")).click();
// await driver.sleep(2000);

// await driver.findElement(By.xpath('/html/body/div[2]/div/div[1]/div/div[2]/div/div[1]/div/a[3]')).click();