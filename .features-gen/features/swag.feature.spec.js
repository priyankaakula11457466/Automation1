// Generated from: features\swag.feature
import { test } from "playwright-bdd";

test.describe('swag_demo', () => {

  test.describe('Successful login', () => {

    test('Example #1', { tag: ['@demo'] }, async ({ Given, page, When, Then, And }) => { 
      await Given('Navigate the App via \'https://www.saucedemo.com\'', null, { page }); 
      await When('user enter the \'standard_user\' and \'secret_sauce\' And click login', null, { page }); 
      await Then('the user is logged-in successfully and user lands on the products page', null, { page }); 
      await When('select \'Sauce Labs Backpack\' and add it to cart', null, { page }); 
      await And('click on the "cart" to open cart page and user lands on the Your Cart page', null, { page }); 
      await Then('click on the "checkout" and user lands on the checkout your information page', null, { page }); 
      await Then('user enter the \'priya\',\'akula\' and \'2151\' and clicks on "continue" and user lands on Checkout: Overview page', null, { page }); 
      await Then('click on the "Finish" order is placed successfully', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\swag.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":17,"tags":["@demo"],"steps":[{"pwStepLine":9,"gherkinStepLine":6,"keywordOrig":"Given ","keywordType":"Context","stepMatchArguments":[{"group":{"start":21,"value":"'https://www.saucedemo.com'","children":[{"children":[{"children":[]}]},{"start":22,"value":"https://www.saucedemo.com","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":15,"value":"'standard_user'","children":[{"children":[{"children":[]}]},{"start":16,"value":"standard_user","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":35,"value":"'secret_sauce'","children":[{"children":[{"children":[]}]},{"start":36,"value":"secret_sauce","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":7,"value":"'Sauce Labs Backpack'","children":[{"children":[{"children":[]}]},{"start":8,"value":"Sauce Labs Backpack","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":10,"keywordOrig":"And ","keywordType":"Action","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[{"group":{"start":15,"value":"'priya'","children":[{"children":[{"children":[]}]},{"start":16,"value":"priya","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":23,"value":"'akula'","children":[{"children":[{"children":[]}]},{"start":24,"value":"akula","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":35,"value":"'2151'","children":[{"children":[{"children":[]}]},{"start":36,"value":"2151","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":13,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[]}]},
]; // bdd-data-end