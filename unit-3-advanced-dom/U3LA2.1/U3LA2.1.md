---
description: How can I store and manipulate data to later be used in various ways throughout my website?
---

# U2LA3: Javascript Essentials: Variables to Arrow Functions

### Teacher Notes & Overview

Students will be using `querySelectorAll` to generate an array of DOM elements that they will access using `forEach()`. The warm up has them review `querySelector`, `addEventListener` and retrieving IDs from the `index.html`. The lesson is a code along where students will have some opportunity to try coding in pairs.

### Objectives

Students will be able to:

* Identify and use class names from an HTML file to reference the corresponding DOM elements.
* Use `querySelectorAll()` to generate an array of DOM elements with similar attributes. 
* Iterate over an array of DOM elements to give similar event listener functionality. 
* Use conditional statements and arrow functions to control flow and better organize code. 


### Suggested Duration

~1 period (~45 minutes)

### NYS Computing Standards

[Courtney to Edit]

* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **querySelectorAll**: returns a static NodeList representing a list of the document's elements that match the specified group of selectors
* **forEach**: an iterative method that calls a provided callbackFn function once for each element in an array
* **innerHTML**: gets or sets the HTML markup contained within the element.
* **comparison operators**: operators that compare values and return true or false. The operators include: > , < , >= , <= , === , and !==
* **conditional statements**: they instruct the computer on the decision to make when given some comparison.
* **arrow function**: a “chunk” of code that you can use over and over again, rather than writing it out multiple times.

### Planning Notes && Materials

| Planning Notes | Materials |
| :------------: | :-------: |
| When using repl.it, please determine if you would like students to clone directly from GitHub, or if you will be setting up assignments via Teams for Education. | _No special materials are required_ |

### Suggestions for UDL

| Multiple Means of Representation | Multiple Means of Engagement | Multiple Means of Expression |
| :----------------: | :------------------: | :--------------: |
| Have students find websites they've visited that they can **interact** with. Use this as an anchor site that students can identify with to rationalize back-end programming. | Print a reference sheet or form a slide deck on basic Javascript syntax that students can reference while completing the challenges.  | Students have an opportunity to self assess at the close of this lesson. The activity can also be used as a formal assessment. |

### Suggestions for Differentiation

The lesson has a good amount of code that students will be coding along to and attempting on their own. There is a `demo.js` file in the exemplar that may be useful to give to students as well that have a difficult time recalling prior information. After the warmup, this may be a good supplement to have on hand.

The starter `script.js` currently doesn't have much code. Consider changing how much code you have the students start with based on your specific classroom's needs.

The practice activities after the lesson are non essential, but they give students another opportunity to practice using `querySelectorAll()` and `forEach()`. This section is good for students who need more of a challenge. However, students who are struggling may want to fully grasp the code along before moving forward. Allow pairs to choose their preferred route.

### Resources

* [**Repl.it**](https://replit.com/\~)- online IDE
* [**W3 Schools**](https://www.w3schools.com/html/) - readable documentation
* **(OPTIONAL)** [**MDN**](https://developer.mozilla.org/en-US/) - a robust but sometimes less student-friendly documentation
* [**Practice: "NYC Boroughs"**](/unit-2-intro-to-dom-manipulation-basics/U2LA3/U2LA3-Starter/index.html) 

### Assessments

**Formative:**

- **Lesson Notes** can be collected and marked for completion

- **Wrap Up** reflection questions and shares can serve as formative assessments.

**Summative:**

- Unit 3, Lab 2 (Upcoming Lab)

- Final Project (End of Unit Project)

### Do Now/Warm Up (\~10 min)

Run the website and show students that the site is meant to be a smoothie builder. However, notice that the buttons don't work. For the do now, have students connect just the banana button. When the button is clicked, the "Enjoy you Smoothie!" text should say "Enjoy your Banana Smoothie!", and the class `is-selected` should be added to that button so it glows green. Direct students to the `script.js` to begin. Uncomment and use the `demo.js` if you need to demo this solution. 

The idea is that the students are recalling `querySelector`, `addEventListener`, `innerHTML`, and how to find `ID`s for elements in the `index.html`. Have the solution ready for the Lesson & Demo (use the `demo.js` in the exemplar folder). Ask a student for consent to share their solution to the class.

Lastly, switch over to the exemplar `script.js` and demo the goal for the **Lesson & Demo**. The goal is to have all the buttons connected, and for each fruit to appear in the output.

### Lesson & Demo: The Javascript Essentials (~30 min)

> This code along is built with the intention of working from the `demo.js` toward the solution. In this way, students can work from a solid foundation. However, if most of your students ad trouble with the demo, consider starting from scratch here.

1. As far as we know, the only way to activate every button is to create 9 `querySelector()` and 9 `addEventListener()`. However we can use `querySelectorAll()` to create an array of all elements with the same feature (most often a class name). Use `querySelectorAll()` as follows and notice what we get when we console log the result.
    ```js
    const fruitButtons = document.querySelectorAll(".fruit-button");
    const resultsSpan = document.querySelector("#results");

    console.log(fruitButtons);
    ```
2. Now, we can use `forEach` to **iterate** over each button giving it the `is-selected` class name. Take some time to show this functionality.
    ```js
    fruitButtons.forEach( (button) =>

        button.addEventListener("click", () => {
            // Make the button green when selected
            button.classList.toggle("is-selected");
            console.log(button.classList);
        })

    );
    ```
    _If your particular students prefer using named functions, start with using named functions, and include this way as an alternative._ 

3. Next, in this same event listener, we can call a function that updates the results text. Include the function call in the event listener as follows:
    ```js
    fruitButtons.forEach( (button) =>

        button.addEventListener("click", () => {
            // Make the button green when selected
            button.classList.toggle("is-selected");
            console.log(button.classList);

            // Update the results text "Enjoy your..."
            updateResults();
        })

    );
    ```

4. For this function, we need to do the following steps:
    - get an array of all the buttons that now have the `is-selected` class name using `querySelectorAll()`,
    - use `.forEach()` (`.map()` wont work) and create a new array of the `innerHTML` ingredient names,
    - and use conditional if/else statements and `results.innerHTML` to display the list of ingredients properly.

5. Give students this list and have them try to complete it in pairs first before going over the solution with them. Once everyone has completed the first step successfully and the second step at least partially, use that as a good stopping point to move on to the solution. 

6. Consider asking for consent to share a pair of student's completed or partially completed code. From there, walk students through the remainder of the solution found in the exemplar.

> Students who are still struggling with this will find it helpful to continue working on it with their peers. Students who understand will be eager to continue to the challenges below. Differentiate here by allowing student to choose their preferred route together with their partner.


**Practice Activities**

- Create a new class called `special` in the `style.css`. Give it either a special shadow color or border color. In the `index.html`, assign your favorite 3 fruits the `special` class name. When these buttons are clicked, add some special text to the results. For example, if Banana is special, it should say, "Enjoy your Banana Smoothie! 🍌"
- Pop on the screen reader and fix up the `index.html` so that the website is more accessible.

### Wrap Up (\~5 minutes)

If you'd like time to collect their work, this would also be a good time. If you are not using Repl.it Teams for Education, a great way to collect projects quickly is a Google Form where they submit their link as well as any reflection questions.

Before students leave, ask them to one of the following questions on an easily collectable paper:

- What is made easier when using `querySelectorAll()`? What is more challenging?
- When was a moment you got stuck today? What did you do to unstick?