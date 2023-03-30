---
description: >-
  How can a CSS Framework help me to quickly build organized, well-designed
  websites?
---

# U1LA6.1: Working with CSS Frameworks - Bulma

### Teacher Notes && Overview

Text

### Objectives

Students will be able to:

* Understand the purpose of CSS frameworks
* Build a website with columns and rows using Bulma
* Utilize components from a CSS Framework, such as cards

### Suggested Duration

2-3 Periods (\~90 - 135 minutes)

### NYS Standards

* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **CSS Framework -** a prepped and ready-to-use CSS library, often created by someone else and available for other developers to use. It eliminates the need of styling basics from scratch and makes some processes easier.
* **Bulma -** A specific CSS framework that we will be using in this lesson. It contains a CSS library of CSS classes that can be used to style HTML code.
* **Components -** within a CSS framework, these are frequently used, pre-coded structures for you to use and personalize to fit the needs of your website. They include things like cards, navbars, dropdowns, etc.

### Planning Notes && Materials

| Planning Notes | Materials Needed |
| :------------: | :--------------: |
|      Notes     |     Materials    |

### Suggestions for UDL

_Coming Soon_

### Suggestions for Differentiation

_Coming Soon_

### Resources

* [Bulma CSS Framework](https://bulma.io/) (Includes instructions for getting started and documentation)
* Building with Bulma Starter Code ([repl.it](https://replit.com/@qrtnycs4all/U1LA61-Bulma-Columns-Starter-Code#index.html) | github)

### Assessments

**Formative:**

* Formative

**Summative:**

* Summative

### Do Now/Warm-Up (\~3-5 min)

Based on your experience so far, what are things that you have found yourself frequently doing to style an HTML page, or otherwise make it look nice? What might make this process easier?

### Introducing CSS Frameworks (10 - 15 minutes)

After students have had a chance to respond to the Do Now, ask them to share their answers either with partners or in a whole group discussion (or leverage both, one after the other). Many students will note that they spend time styling the elements of their page, and for several lessons, have also focused on the grid structure of the page itself.

Students may or may not be in a place where they find some of these tasks annoying and/or repetitive yet; if they're not, bring up that there are professionals who have to do these tasks _all the time_ because the entiriety of their job is to make and design websites.

Because this can get repetitive and annoying, developers have created things called **CSS Frameworks.** These frameworks serve as a library of CSS classes and other pre-coded goodies that users can link into their websites and begin using so that it's easier and faster to create well-designed pages without having to code from scratch each time. There are _a lot_ of CSS Frameworks out there (Bootstrap, Bulma, Materialize, etc) but today we will just be focusing on one: Bulma.

**NB:** _For the curious students, they've actually already used a framework when they were using Flexbox, and many of the more robust frameworks - including Bulma - will build off of this. It's important to note that many frameworks work in a similar fashion with slight differences based on the preferences of whoever created them. Once they've learned to use one framework, they can experiment with using others if they see fit!_

Direct students to the [Bulma Website](https://bulma.io/). They should immediately see that there is a 'getting started' button - click on that and they'll be brought to a documentation page. Stress to students that this page is SO IMPORTANT for them to have open in a tab somewhere as it contains everything they need to know about Bulma - mostly, the names of the CSS classes and examples of how they are used.

If students click '[Overview](https://bulma.io/documentation/overview/)', they'll be brought to a page that has a bunch of notes about Bulma and links to learn more in the side nav. Explain that Bulma not only has ways for us to keep our pages organized and styled, but it is also built to be mobile-first, meaning that the responsiveness is baked in (but can also be overridden as students deem necessary).

Go ahead and click '[Start](https://bulma.io/documentation/overview/start/)' on the side nav. This will give a page of several options on how to start using Bulma on your page. Option 1 says **Use a CDN** - this stand for **C**_ontent_ **D**_elivery_ **N**_etwork,_ and it's what we want to use! You'll notice there are two tabs, `CSS @import` and `HTML<link>`. Click over to the HTML option to see something like this:

<figure><img src="../.gitbook/assets/Screen Shot 2023-03-30 at 9.36.29 AM.png" alt=""><figcaption><p>Option 1: Use a CDN with HTML link on the Bulma 'Start' webpage</p></figcaption></figure>

This should look really familiar as we have linked CSS style sheets to our webpages before! If we wanted to connect Bulma to a project we are working on, we would copy this link and paste it into the `<head>` tag of our page. It's important to note that a page can reference _several_ CSS files and that's okay - even if you're using a robust CSS Framework, there will likely be things that you want to specifically style or adjust from the default. The Bulma framework will be linked, but you will not have access to edit it directly as it's being used by hundreds and hundreds of other developers!

At this point, you may want to code along with students putting the Bulma link into a new project in repl.it or the IDE/editor of your choice. However, for the purposes of today, students will be utilizing some starter code so that we can focus on how Bulma works instead of building from scratch.

### Exploring Organization with Bulma (15 - 20 minutes)

Share students on the Building with Bulma Starter Code ([repl.it](https://replit.com/@qrtnycs4all/U1LA61-Bulma-Columns-Starter-Code#index.html) | github). Begin by giving students a chance to look through the HTML and CSS, and then point out a few key points:

* We've connected Bulma on line 11 to our project, which allows us to use the entirety of the Bulma CSS library.
* If we look&#x20;

