# Lady Lisa's Kitchen

Overview:
I'm building a menu that consists of 5 pages and 1 component.

Link to Heroku  https://vee-menu.herokuapp.com

Link to Github  https://github.com/veshena/menu





Wireframe:






User Story:
When you select an item out of the breakfast/lunch/drinks page it would generate onto the checkout page where you'll be able to see the list of items you selected.


React components tree:

1. Inside my App js I am importing all may pages/components, my routues, useState and app.css. I made an array for each page inside my app.js then set each one to an empty array by using useState. Inside each route I set props in order to link each page to the app and render information. 

2. ./component and inside my component is my header page where I listed all the links for the pages.

3. ./pages i have 5 pages :
    Home
    Breakfast
    Lunch
    Drinks
    Checkout
Inside each page has a function that allows me to pass my props down and map through each array in order for the item name to show on the checkout page. I also added 2 types of buttons the first is an add to checkout which when clicked the item name shows on the checkout page then the last button is to clear the items out the checkout page
