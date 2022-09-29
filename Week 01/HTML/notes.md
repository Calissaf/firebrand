# HTML & CSS

## HTML

* Hypertext Markup Language
* HTML doesn't compile
* HTML has been around for ages and is always the one that people come back to. It's the language that other frameworks and libraries convert to - React, as an example, converts its code to a HTML file

* HTML is for content only (not scripts/code)
* CSS (Cascading style sheets) is for the sexy styling

* HTML is created using tags:
  * ```<html> </html>```
  * ```<body> </body>```
  * ```<h1> </h1>```
  * ```<img>```

* HTML has a skeleton structure:
  * ```<head> </head>``` is where we store information we don't want the user to see
  * ```<body> </body>``` is where we put the content we want to show off to the user and the public
    * ```<footer> </footer>``` is where we put the legal information, site maps and other info that we feel is necessary to have but not needed to be on show all the time. Policies to download are normally at the bottom.

```html
<!DOCTYPE html>
<!-- rendering a html document on the server -->
<html lang="en">
    <!-- document will render the English language (every language has a different code: es would be Spanish etc...)-->
<head>
    <meta charset="UTF-8">
    <!-- follows the UTF 8 character codes -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- allows the developer to choose what version of compatibility they want to use: IE=edge means internet explorer should be treated as edge -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- simply, the device has a width, the website will TRY and conform to that width. NOT always successfully -->
    <meta name="description" content="Deloitte Bootcamp website"/>
    <title>Deloitte Bootcamp</title>
    <!-- The tab title -->
</head>
<body>
    
    <h1>Deloitte Bootcamp</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id necessitatibus ex nostrum quas a repellendus vero sunt quibusdam, modi illo.</p>

    <h2>Another heading. But smaller</h2>
    <h3>Another heading. But smaller</h3>
    <h4>Another heading. But smaller</h4>
    <h5>Another heading. But smaller</h5>
    <h6>Another heading. But smaller</h6>
    
    <img src="https://petapixel.com/assets/uploads/2022/07/DALLEcopy-800x420.jpg" alt="giant pineapple with front door resting on the surface of the sea">
    <!-- alt is description of image that will display if image can't render or if user is using text to speech -->

</body>
</html>
```

* You can create a navigation bar by making an un ordered list with list items that link other html page

```html
    <div>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="https://deloitte.com/" target="_blank">Deloitte</a></li>
            <!-- target = blank will open link in new tab which is best practice for links that navigate away from your page :) -->
        </ul>
    </div>
    <!-- can use shortcut div>ul>ul>li*3 -->
```

### Key tags

* button - adds a button

``` html
<button id="button">PRESS ME</button> 
```

* image - adds an image

``` html
<img src="https://petapixel.com/assets/uploads/2022/07/DALLEcopy-800x420.jpg" alt="giant pineapple with front door resting on the surface of the sea">
```

* script - links to JS code

```html
    <script src="index.js"></script>
```

### Shortcut

* Crtl / is key for comments
  * saves you typing <!-- -->

## CSS

* The two default css file names are:
  * style.css
  * main.css

* CSS using a key : value, property : value format

```css
body {
    font-size: 100px
}
```

* CSS is rendered in a last read display format
* CSS alse has a closest to the tag rendering policy

### Inline CSS

* Devil. We try not to use this one. At all costs. Unless we have our backs against a wall or a gun to our heads.
* Written inside each tag

```css
<h1 style="color: crimson">Deloitte Bootcamp</h1>

    <p style="color: limegreen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id necessitatibus ex nostrum quas a repellendus vero sunt quibusdam, modi illo.</p>
```

* You have to style each paragraph / entry individually :0

### Internal CSS

* Created inside of the head tag
* Only applies to the page that head tag correlates to
  * so if you have 100 pages on your site you would need a style tag for each head tag so you'd end up with 100 style tags

```html
<head>
  <style>
        body {
            background-color: yellow;
        }
    </style>
</head>
```

### External CSS

* create a new style.css file and link it to the HTML in the head

```css
body {
    background-color: yellow;
}
h1 {
    color: white;
}
```

* seperate style into sections of the page working from top to bottom

```css
/* navigation style below */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap');

body {
    margin: 0;
    padding: 0;
}
/* ul,li, a */

ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    background-color: black;
    overflow: hidden;
}

li {
    float: left;
}

li a {
    text-align: center;
    padding: 15px 17px;
    display: block;
    text-decoration: none;
    color: white;
    font-family: 'Montserrat', sans-serif;
}

li a:hover{
    background-color: #86BC25;
}
/* End of navigation style */

h1 {
    /* padding: 300px; top, right, bottom and left 300px */
    /* padding: 150px 200px; top and bottom 150px, right and left 200px */
    /* padding: 100px 150px 200px; top is 100px, right amd left are 150px, bottom is 200px */
    /* padding: 50px 100px 150px 200px; top is 50px, right is 100px, bottom is 150px, left is 200px*/
    /* padding numbers work clockwise starting at top of webpage */
    font-family: 'Montserrat', sans-serif;
}

button {
    margin: 0.5% 90% 0.5% 0.5%;
}

img {
    width: 800px;
    height: 400px;
}

/* footer {

} */

/* Responsive CSS */

@media screen and (max-width: 600px) {
    body {
        background-color: yellow;
    }

    h1 {
        color: black;
    }

    img {
        width: 100%;
        height: 50%;
    }
}
```
