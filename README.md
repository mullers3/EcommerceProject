# Project: "Insert Store Name Here" the Ecommerce Site 

## Link to Site 
[Link](https://hairdyestore.herokuapp.com/)

## Project Description
For my project I created an ecommerce site called "Insert Store Name Here" that sells hair dye. The site has the following pages: Home, Login, Register, 3 Product pages (cool, warm, gray), Cart, and checkout. On this site you can register, login, add products to your cart, view your cart, update your cart, delete your cart, and "checkout". This site doesn't actually let you buy anything so after you checkout the page redirects you to a page with all the order information. Once you login in the logout button appears and the page redirects you to your account page. On the account page you can delete your account and see any past orders you have given that you used the email aattacthed to you account for the order. This site also has an Admin page that has functions to add and delete prodcts. I never planned to use this app as an actual store where people can spend money so it's mostly finished. My admin page isn't protected by anything so if you know it's there you can add and delete products. So one thing I want to do is make it so you have to login in with a specific user to get to the admin page. Also some pages in my site, admin, account and display, one you get to the page you have to use the back arrow or change the url to get back to the main site. In saying that another thing I want to do is fix but the navigation between pages. The last thing I want to do is rewrite the way I display products on my webpages because using inner html messed with my buttons so I couldn't use outside functions and needed to write the functions I wanted to use with the buttons in a script in the HTML code for each product page. I aslo 100% pushed my .env file so I really need to make a gitignore.

## Bugs/Issues 
The main issue I had is with the buttons on my product pages. I didn't know this when writing my webpages but HTML 5 doesn't let you run javascript when using .innerHTML for safety reasons. Because of this each product page has a script with the addToCart function on it so my buttons would actually do something. The other issue I had was with deploying my site. I used the JSON data type in 2 of my databases and CloudDB uses the older version of mysql which doesn't support JSON data types. To fix this I used JawsDB which uses a newer version of mysql that supports the JSON data type.

## What I Used

**Front End**
* HTML
* CSS

**Back End**
* JS
* Node.js
* mysql

**Deployment**
* Heroku 
* JawsDB

## ER Diagram
![E-R Diagram](https://user-images.githubusercontent.com/90278824/168661690-8fe11c37-502d-42cf-ad94-f9d3e72543df.png)

**Business Rule**

* One Customer may place many Orders
* Each Order must be placed by only One Customer

* One Order must contain only One Cart 
* One Cart must be contained by only One Order

* Many Carts may Contain Many Products
* Many Products may be contained in Many Orders

**About the Entities**

The customer entity contains the customer's information. This entity allows a customer to register and login to their created account.
The product entity holds all the information about each product displayed on each of the product pages.This entity allows the products to be added, deleted, and displayed
The cart entity holds the final cart once a customer is ready to checkout. It allows the customer to get an item from the database so it can be added to the database, the cart can be added to the database, and the cart can be obtained from the database.
The order entity has all of the information provided in the order form. It allows the order to be added to the database, retrieved from the database and displayed on a webpage.

## How to Use

Once you download this project you have to do a few things. 
1. npm init 
2. npm install express
3. npm install nodemon--save-dev
4. Add under scripts in package.json: "dev": "nodemon index.js” 
5. npm run dev
6. create a .env file to set up environment variables for the database. The variables are MYSQL_USERNAME, MYSQL_PSWD, MYSQL_HOST, MYSQL_DB
7. run using command "node index.js"

## Website in Action
https://user-images.githubusercontent.com/90278824/168508829-a64fff1c-d7b5-4cfb-bd6e-53dcede6aad4.mp4

The transitions are a little weird because I kept messing up and didn't want this video to be 20 minutes long so this is a few smaller videos stitched together. 
