# Product Management Application - Application Layer

## Introduction
Given a set of products and categories existent in the persistence layer, 
this application will retrieve and display the data on a single page UI

## Requirements
* npm installed to compile and run the application
* Connectivity to the Internet to download dependencies needed to compile 
and run the application

## How to compile and run the application
1. Locate the root directory
2. If you are running this application for the first time, run `npm install`
in order to ensure all dependencies are correctly installed on your machine
3. Run `npm start` to launch the application. By default, the application
will launch on port 3030. Access the web page by typing localhost:3030
in your web browser
4. NOTE: ensure that the persistence layer is running

## Using the application
The application is divided into two main parts

### Retrieving the products
* When you load the main page for the first time, the list of products
will be retrieved. These are defined in the persistent layer application
* You can then sort the table by name or category by clicking on the
relevant button

### Creating a new product
* In the main page, there is an input form which allows the user to create
a new product. The required fields are displayed on the page
* When a new product is created and submitted, the page will automatically
reload and the new product will be displayed in the resultant 'Products'
table
* Note: if the category name inputted is not one of the available ones,
then a blank will be displayed
* By default, the product created will not have been purchased and therefore
will not have an associated 'last purchased date' date

## Technical debt items
Even though the application functions as expected with regards to the two
points mentioned above, there are a few technical debt items that could
be worked on in the future

`DisplayForm.js`
1. Transform this class comopnent into a functional component with Hooks
2. Retrieve the list of categories from a separate API call to show the
user the availabe ones, rather than hardcoded
3. Create validation in the input form so that each field is required and 
the category name is one of those listed. Display an error to the user
if this is not validated

`InputForm.js`
1. Create a new postFetch functional component to handle the POST request,
rather than including it in this class

`Responsive design`
1. Ensure that the web page is responsive for each mobile/web view