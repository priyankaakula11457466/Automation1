@demo
Feature: swag_demo
Run the Saucedemo scenarios in BDD

Scenario Outline: Successful login 
Given Navigate the App via '<url>'
When user enter the '<user_name>' and '<Password>' And click login
Then the user is logged-in successfully and user lands on the products page
When select '<product>' and add it to cart
And click on the "cart" to open cart page and user lands on the Your Cart page
Then click on the "checkout" and user lands on the checkout your information page
Then user enter the '<firstName>','<Last_Name>' and '<Zip_Postalcode>' and clicks on "continue" and user lands on Checkout: Overview page
Then click on the "Finish" order is placed successfully

Examples:
  |  url                        | user_name                 |     Password  |       product       | firstName   | Last_Name  | Zip_Postalcode |
  | https://www.saucedemo.com   | standard_user             | secret_sauce  | Sauce Labs Backpack |   priya     |   akula    |     2151       |
  | https://www.saucedemo.com   | performance_glitch_user   | secret_sauce  | Sauce Labs          |a            | B          |   2140         |
 # | https://www.saucedemo.com   | problem_user              | secret_sauce  |

#Scenario Outline: Place order successfully
#Given Navigate the App via '<url>'
#When user enter the '<user_name>' and '<Password>' And click login
#Then the user is logged-in successfully and user lands on the products page
#When user select a product 
#And clicks on the "add to cart" item added to the cart 
#And click on the "cart" to open cart page 
#Then click on the "checkout" 
#And add the "First_name" "Last_name" "Zip/Postalcode" click "continue"
#And on the "checkout overview" page click on the "Finish"
#And order is placed successfully

Examples:
    | url                       | user_name                 |  Password     |
   # | https://www.saucedemo.com | standard_user             | secret_sauce  |
   # | https://www.saucedemo.com/   | performance_glitch_user   | secret_sauce  |
   # | https://www.saucedemo.com/   | problem_user              | secret_sauce  |

   # Examples:
   #     |First_name  | Last_name  | Zip/Postalcode |
   #     | Value 1    | Value 2    | Value 3        |