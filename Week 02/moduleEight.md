# Module 8

## Content: Web apps

* HTTP
* HTML
* CSS
* Javascript
* Web Appsvs Web Sites
* IIS Web Servers
* Network Load Balancing
* ASP.net
* Web Services

## HTTP (HyperText Transfer Protocol)

* Protocol that allows you to transfer information between two parties
  * (1) HTTP requests
    * sent from client side (web browser) to the server
  * (2) HTTP reponse
    * response from sever side back to client side
  * (3) Content download
    * response from sever side back to client side

* URLS consist of FOUR parts
  * i.e. <https://portal.office.com/logon/Hello.html> would be broken down into:
  * protocol
    * HTTPS://
  * Fully qualified domain mane of server
    * Portal.office.com
  * Folder name
    * /logon/
  * Document or service name
    * Hello.html

* HTTP response codes:
  * code range: 100-199
    * information
  * code range: 200-299
    * success
  * code range: 300-399
    * redirection
  * code range: 400-499
    * client error
  * code range: 500-599
    * server error

* HTTP responses have a header and body:
  * header show programmers info on the response
  * body shows info to the users

## HTML

* header sends info to the browser
  * users CANNOT see this
* body denotes the layout and function that the users will see

## CSS

* styles the webpage/html script
* needs to be linked to the html page (this happens on the html page side in the header)

```html
<link href="style.css" rel="stylesheet" type="text/css" />
```

## Javascript

* controls what the different HTML parts do

## Web hosting with IIS

* IIS (Internet Information Services) is a microsoft server

* you can deploy your html to a web server in many different ways using:
  * private network
  * internet
  * github
  * azure devops

## Web services

### Sever site programming with asp.net

* programming laguange based on previous microsoft languages (visual basic, C++, C# ect)
* used to connect and talk to sever and other computers on a network
* used for:
  * payment
  * accessing database
  * many more things..

* You develop functionality in C#, Visual basic, JS, J# this is then run on the IIS and .NET application servers which create the web broswer

## Network load balancing

* ensurses that severs aren't overloaded with requests
  * splits clients requests between servers
  * won't send client requests to a server if the server is struggling or down

## ASP.NET state management

* COOKIES
* asp.net state management
  * stores data you sent to the server
  * so that when you visit the website again the site remebers you and what you've done previously
  * makes the site more useable for the client

* To ensure consistency two sets of State Management Techniques are required:
  * Client-side state management: Held in ARM on client device but managed by Web Browser
  * Server-side state management: RAM in Application Server, or Shared State Service

* Client side techniques:
  * query strings
    * allows you to pass info to the website
    * can't pass sensitive info through a query string
    * it appends onto the end of a url
    * starts with a ? and comes after the path in a url
  * COOKIES
    * stores data you sent in small text file max 4kb
    * means that the site can remeber you when you visit again
      * makes things like logging in and allows you to retain basket items between sessions
    * allows passing of more sensitive info that can't be put in query string
  * hidden fields
    * html input with the tag hidden on it
  * view state

## Web services and APIs

* Web service:
  * doesn't have an interface
  * meant for other application to be interacted with over the internet
  * they are platform INDEPENDENT as they use open protocols
  * they are accessed by HTTP methods:
    * GET
    * POST
    * PUT
    * DELETE
    * and many more...
  * examples:
    * google maps api is a web service that can be used by websites to display maps in site by passing coordinates to it

* Website
  * very different to web service
  * has a user interface or GUI
  * meant for use by humans
  * they are cross-platform as they require tweaking to operate on different browsers, operating systems, etc.
  * they areaccessed by using their GUI components:
    * buttons
    * text boxes
    * forms
    * and many more...
  * examples:
    * ArtOfTesting.com is a website that has a collection of related web pages containing tutorials.
