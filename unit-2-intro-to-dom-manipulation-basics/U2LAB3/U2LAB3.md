---
description: How do you change a webpage based on other inputs?
---

# The Interactive Site

### Teacher Notes

...

### Prompt

It's the national horse race again! Three horses line up to race for the finish line. Which one will win? Click the "Run!" button to activate a horse. (Try the blue one, it works!) When it gets to the end of the screen, a text should appear announcing that horse the winner. 

**Directions**: Your task is to finish the website so that the pink and brown horse also work the same as the blue horse. You'll have to use `querySelector`, `addEventListener`, and _arrow functions_ to do so. For the extensions, you'll have a chance to add a fourth horse, a reset button, and more.

0. If you haven't already, check out the website and notice that when you click the "Run!" button next to the blue horse, the blue horse moves forward a bit. First thing we're going to work on is getting the other horses to do the same. This will be done in 3 parts: 1st, you'll need `querySelectors` to listen to the button and move the horse image, 2nd, you'll need to create `addEventListeners` for each button, and 3rd, you'll need to create a function that advances the horse once the button is clicked. 

1. First, go to the `script.js` and notice that there are 2 `querySelctors`: one for the `blueButton`, and one for the `blueHorse`. We need the first to listen to when the "Run!" button is clicked, and we need the second to move the image of the horse. Do the same for the pink horse and the brown horse. If you're stuck look below for the code for the pink horse:
    ```js
    const pinkButton = document.querySelector("#pink-button");
    const pinkHorse = document.querySelector("#pink-horse");
    ```

2. Second, scroll to the bottom, and notice that theres is an `addEventListener` for the `blueButton` that calls a function _"advanceBlue"_. Create 2 more `addEventListeners`, one for the `pinkButton` and one for the `brownButton`. When these buttons are clicked, they should call a function called _"advancePink"_ and _"advanceBrown"_ respectively. Use the blue button's event listener for reference.

3. Third, find the section on the page where the OnClick functions are declared. Notice that the `advanceBlue()` arrow function is already made, and the `advancePink()` function is set up, but not completed. Complete the advancePink function so that it increments the `pink_position` variable by 1, then it should adjusts the image of the horse using the function `changePosition` that takes in 2 variables as parameters: the `querySelector` for the horse, and the new position. Use the `advanceBlue` function for reference.

4. Great! Now head over to the website and check that all 3 of your buttons are working.

5. Now, when a horse gets to the end of the race, you'll have to announce that that horse is the winner. Edit the `checkWinner()` function so that it writes a winner to the screen based on the position of the horse:
    - First, up with all the other query selectors, write a new `querySelector` for the `div` with an `id="winner"`
    - Then, in the `checkWinner()` function, write an if statement: If the horse's position is equal to 5, change the innerHTML of the winner `div` to, for example, "Blue is the Winner!". Use the `position` argument and the `color` to help.
    - NOTE: use `console.log()` where needed to check that your code is doing what it should.

6. After the function is set up, you'll need to call it in each of the _`advanceColor()`_ functions. For example, here's what the `advanceBlue()` function should look like:
    ```js
    const advanceBlue = (e) => {
        blue_position += 1;
        changePosition(blueHorse, blue_position);
        checkWinner(blue_position, "Blue");
    };
    ```

### Exemplar (...to be deleted)

Take a look at this [finished example](./U2LAB2-Exemplar/index.html) before you start to get an idea of what your fan page might look like.

### Culturally Responsive Best Practice

[COURTNEY TO ADD]

### Extra Help?

...

### Extensions

**Directions**:

- Once the game is over, notice that the other buttons still work. In fact, if the blue horse wins, you can get another horse to the finish line overwriting the who the winner is. Use `blueButton.disabled = true;` to disable all three of the buttons once a winner is declared. You'll want to put the statements in the `if` statement of your `checkWinner` function. Use [the documentation for disabling buttons](https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp) for more information. 
- With everything you've coded up until now, add a restart button to the page that starts the game over. For an easier challenge, disable it while the game is in progress, and reenable it once the game is over and there's a winner. For a more spicy challenge, make the button appear and disappear instead. Regardless, the restart button should do 3 things:
    - set the horses position to 1, back to the starting position,
    - reenable the buttons,
    - clear the `innerHTML` of the `div` with `id="winner"`, and
- There's currently quite a bit of redundancy in the code; there's repetition where there doesn't need to be. For this extension, you'll change the `advanceBlue()`, `advancePink()`, and `advanceBrown()` functions into 1 function called `advance()`:
    - First, head to the top of code and change all the variables so that they are in 1 object. You will have to eventually delete `blue_position`, `pink_position`, `brown_position`, and all the query selectors. The new object should be called `horses` and have 3 keys: "blue", "pink", and "brown". Each of the values should be another object with 3 keys as follows:
        ```js
        let horses = {
            "blue" : {
                "position" : 1,
                "button" : document.querySelector("#blue-button"),
                "horse" : document.querySelector("#blue-horse")
            },
            "pink" : //etc...
        };
        ```
        When you've done this for all 3 colors, test that it is working by printing the pink position with `console.log(horses["pink"].position)`.

    - Next, in the `advance()` functions, they should each have a parameter `e` which points to all the attributes associated with the button that calls it. Print `e.target` and notice that the entire element is printed. Then, print `e.target.value` to the console in one of the functions to see what value is given. The blue button should print "blue", the pink button "pink", and so on. You'll use these values to help access the right information from the object you created.
        ```js
        const advanceBlue = (e) => {
            console.log(e.target)
            console.log(e.target.value);
            //...
        }
        ```
    - Now, create a new `advance()` function that will replace the 3 current advance functions. This new function should do the same as the others, but instead of writing and reading from a specific variable, write and read to and from the object based on the `e.target.value`. Here's the partial code:
        ```js
        const advance = (e) => {
            color = e.target.value;
            horses[color].position += 1
            // etc...
        }
        ```
    - Finally, change the `addEventListeners` at the bottom of the code to run the `advance()` function, and test that everything still works.
        ```js
        horses["blue"].button.addEventListener("click", advance);
        //etc...
        ```
    - NOTE: if you implemented a restart button, and included disables everywhere, you'll need to change those as well
        ```js
        horses["blue"].button.disabled = false;
        //etc...
        ```

**Reflection Questions:**

- ...
