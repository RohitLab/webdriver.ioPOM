webdriver.io configruation 
install npm 
1)  npm init -y
2)npm i --save-dev @wdio/cli
3)npx wdio config -y
4)mkdir .\test\specs
5) test  => describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    })
})
to run the tests 

6)npx wdio wdio.conf.js

-------------------------------
Allure report
1 ) npm install @wdio/allure-reporter --save-dev

2) in wdio.conf.js
        in after reporters:['spec']
        Add:-
        reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

3) then install  $ npm i allure-commandline

4) allure generate && allure open