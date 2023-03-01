---
description: How can I add style to my HTML page using cascading style sheets?
---

# U1LA2.1: Styling your page with CSS

### Teacher Notes && Overview

In this lesson, students will begin working with CSS to style their pages. They will begin by working on a pre-made page of starter code and will have free time to experiment with their CSS. The goal of this code is to make an 'ugly' webpage - this allows students the freedom to play with any CSS properties that strike them as interesting without attempting to adhere to good design principles or trying to make something 'pretty.'

### Objectives

**Students will be able to:**

* Style different portions of their page by selecting HTML tags in CSS
* Style different portions of their page by selecting classes/IDs in their CSS
* Use HEX code colors within their CSS
* Adjust margins/padding/borders
* Center and enlarge images in CSS
* Change fonts on their webpage

### Suggested Duration

1-2 periods (\~45 - 90 minutes)

### NYS Standards

* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **CSS: C**ascading **S**tyle **S**heets, this is a style sheet language that describes how an HTML page can look. The CSS can change HTML elements based on their tag (h1, p, div, etc) or by their class or id.
*

### Planning Notes && Materials

| Planning Notes | Materials |
| :------------: | :-------: |
|                |           |

### Suggestions for UDL

| Multiple Means of Representation | Multiple Means of Engagement | Multiple Means of Expression |
| :------------------------------: | :--------------------------: | :--------------------------: |
|                                  |                              |                              |

### Suggestions for Differentiation

_Coming Soon_

### Resources

* Website Starter Code ([repl.it](https://replit.com/@qrtnycs4all/Interactive-Web-U1LA21-Styling-with-CSS-Starter-Code#index.html) | github)
* [W3Schools Demo Page ](https://www.w3schools.com/w3css/tryw3css\_templates\_start\_page.htm)(Resource)
* [View and Change CSS with Chrome Dev Tools ](https://developer.chrome.com/docs/devtools/css/)(Extra Learning Resource)
* [CSS Selectors Diner](https://flukeout.github.io/) (Extra Learning Resource)
* [CSS Battle](https://cssbattle.dev/) (Extra Learning Resource)

### Assessments

**Formative:**

**Summative:**

### **Do Now/Warm Up (\~5 minutes)**

What do you think makes a website _well-designed_**,** or good-looking_?_ What makes a website _badly-designed_, or ugly-looking?

Time permitting, grab a computer and find as many examples as you can of pretty and ugly websites.

### Introducing: CSS (7 - 12 minutes)

Remember in the last lesson we said we had done things behind the scenes to make our divs appear with color? That behind-the-scenes magic was CSS, or **C**ascading **S**tyle **S**heets. This is a sheet-style language that allows us to format the appearance of our HTML pages!

There are several ways to work with CSS: in-line, when it is added directly to HTML tags, internal, where you type the CSS inside a `<style>` tag in your page's `<head>`, or external, where the CSS lives in a separate, linked file. For the purpose of this class, we will focus on external style sheets as they are also a common professional practice.

Before we get into using CSS in our own work, let's take a look at it in the wild. We are going to use this [W3 Schools CSS Demo Page](https://www.w3schools.com/w3css/tryw3css\_templates\_start\_page.htm) - share the link with students. Once they have it open in Google Chrome (that's important!), ask them to right-click anywhere on the top red area and scroll down to 'Inspect.'

<figure><img src="../.gitbook/assets/Screen Shot 2023-03-01 at 12.04.55 PM.png" alt=""><figcaption><p>Right clicking a page to inspect must be done in Google Chrome.</p></figcaption></figure>

This will open up the Developer Tools (fondly referred to as 'dev tools') on the right side bar of the page, though they can be dragged around to different locations. At the top, they'll see the HTML for the page. Below, they'll see the CSS that applies to the element they select. In this case, they selected a div that contains many other elements and classes, so they will see CSS for those as well!

<figure><img src="../.gitbook/assets/Screen Shot 2023-03-01 at 12.07.51 PM.png" alt=""><figcaption><p>Sample screenshot of elements in dev tools showing HTML with CSS beneath</p></figcaption></figure>

If we scroll through the CSS, we will see familiar HTML tags (body, head, etc) as well as things with a dot in front - those are our _classes_ that we spoke about in the last lesson and that we will speak more about later in this lesson. We can also see the basic structure of CSS:

<figure><img src="../.gitbook/assets/Screen Shot 2023-03-01 at 12.55.33 PM.png" alt=""><figcaption><p>CSS syntax showcasing selector, property, value, and declaration</p></figcaption></figure>

Our CSS starts with a selector which is how we identify the part of our HTML that we will be styling. We then select a property, followed by a colon, and a value followed by a semi-colon. This `property:value;` pair creates a declaration, and each selector can have as many declarations as you'd like.

In the dev tools, we can even go so far as changing elements of the CSS to see how it would show up on the screen. For example, if we take this bit:

```
.w3-red, .w3-hover-red:hover {
    color: #fff!important;
    background-color: #f44336!important;
}
```

We can adjust the `background-color` to a different color. It is currently using Hex Codes, which we can find if we search 'color picker' on Google. For now, we could use `#FF00FF` and get a magenta background. HTML also supports some named colors (among other things) and [W3 Schools has a list](https://www.w3schools.com/colors/colors\_names.asp) if you should choose to use them.

At this point, if you would like to use the [View and Change CSS](https://developer.chrome.com/docs/devtools/css/) Extra Learning Resource please feel free, but it is considered optional!

### Styling Your Page (10 - 15 minutes)

Share the [starter code for the Ugliest Website in the World](https://replit.com/@qrtnycs4all/Interactive-Web-U1LA21-Styling-with-CSS-Starter-Code#index.html) with students. Explain that we want to feel free to try anything as we make our CSS pages and they should not feel concerned about making something beautiful or cohesive right off the bat - in fact, their goal is to make this website quite ugly.

Before they begin, they will need a CSS file. To do this, they can click the 'New File' button the repl.it sidebar and make a file titled `style.css`. While CSS files can have _any_ name (as long as they end in `.css`), `style.css` is a typical name for their stylesheet. Once we have the sheet made, we need to link it in our HTML page. So let's go to our `index.html` and then find our `<head>` tag. Inside that tag on approximately line 9, we will add the following:

```
<link href="style.css" rel="stylesheet" type="text/css" />
```

This links our style sheet from the reference of the file name, sets it up as a stylesheet, and prepares the browser to read our page to understand that it is a text/CSS file. Now to ensure it's linked, let's add some CSS!

Back in the `style.css` page, let's add some style to the body of our page. We will use `body` as our selector and `background-color` as our property. Remember that all the colons and semi-colons are VERY IMPORTANT!

```
body {
    background-color: thistle;
}
```

