---
description: What makes an API closed and how do we safely incorporate our API key.
---

# DIY Dictionary

### Teacher Notes



### Prompt

Most APIs you will run into are closed. For the most part, closed and open APIs are similar in how they function. However, closed APIs have the addition of an API key. Sign up for an API key at Merriam Webster's DictionaryApi.com and follow the directions below to make a Dictionary Look Up website.

**Directions**: Walk through the following steps to get connected to the closed Dictionary API.
1. First, you will need to register for an API key
2. Next, you will connect to the API in the `api.js`.
3. Then, you will finish the code in the `script.js` to manage user input and API output. 
4. Last, you will explore the extensions and make this DIY Dictionary site really special. 


**Register for an API key**: 

1. Go to Merriam Webster's [DictionaryAPI.com](https://dictionaryapi.com/), scroll down, and register for an api key. Once you do, you'll have to confirm with the link provided in your email. This process should take about 1 minute. The picture below will give you an idea on how to fill out the registration form.
![Registration example](register.png)

> Note: be sure to pick the thesaurus as the first API request as this is the main endpoint being used in this lab. The spanish english dictionary is being used for the extensions in this lab.

2. Once you successfully register and confirm your email address, you should be able to sign in and access [your 2 api keys](https://dictionaryapi.com/account/my-keys). Copy and save them in a safe place on your computer.

3. In the `api.js`, save your API keys in a variable. For example:
    ```js
    const THESAURUS_API_KEY = 'YOUR_API_KEY123';
    const SPANISH_API_KEY = 'SPANISH_API_KEY456';
    ```

**Connect to the API**: 

For this section, we'll be working from the browser to quickly test the endpoint and your API key. Then, we'll code in the `api.js`.

4. There are several APIs that are provided by DictionaryAPI found at [this site](https://dictionaryapi.com/products/index). You should have signed up for the [Thesaurus API](https://dictionaryapi.com/products/api-collegiate-thesaurus) and the [Spanish/English API](https://dictionaryapi.com/products/api-spanish-dictionary). At those links, you can find the endpoint you will need to access. Here's the one for the thesaurus, the first one we'll be using:
    ```js
    'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/WORD?key=YOUR-API-KEY'
    ```

5. In the browser, in a new tab, copy and past this endpoint, and replace `WORD` with any word like _"umpire"_ and `YOUR-API-KEY` with the API key your received when you registered. 
    ```js
    //Note: not a real API key
    'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=123456789abcdefghi'
    ```
    If you do this right, you should see a JSON response for the word umpire!

6. In the `api.js`, finish the function `getDef(word)`. Use the endpoint above as the template, and use string formatting to include the "word" parameter and your API key. For now, console log the data. To see if it works, call the function in the `api.js` with any word. For example, `getDef("umpire");`

7. If you can see the object in the console, celebrate! Return the data instead of logging it. Your finished version should look like this.

    ```js
    const BASE_URL = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/';
    const THESAURUS_API_KEY = 'YOUR_API_KEY123';
    const SPANISH_API_KEY = 'SPANISH_API_KEY456';

    const getDef = async (word) => {
        const word_endpoint = BASE_URL + word + '?key=' + THESAURUS_API_KEY;
        try {
            const response = await fetch(word_url);
            const res = await response.json();
            return res;
        } catch (error) {
            console.error(error);
        }
    };
    ```

**Finish the `script.js`**: 

Notice that a lot of the code is already pre-written. For this section, you'll just need to fill in the variables to connect the website with the API calls.

8. In the `script.js`, the `getSimpInfo(word)` function should return a simplified object with just the word, the part of speech (noun, verb, etc.), and the definition. Replace `'PART_OF_SPEECH'` and `'DEFINITION'` with the actual data from the response. Console log this new `finalData` to check that it works.

9. For the makeCard(finalData), do the same thing. The object you just created will be passed to this function, so it will have the same 3 features.

10. Last, for the event listener:
    - Call `getSimpInfo(word)` to get the `finalData`, and
    - Call `makeCard(finalData)` to get the html string that you will set as the innerHTML of the card. (NOTE: the card div is queried at the top of the `script.js`)

11. When you're done, the site should allow you to input a word and see the definition displayed in the blue card.

### Exemplar

Take a look at this [finished example](./U3LAB2-Exemplar/index.html) for the finished version of the site.

### Culturally Responsive Best Practice

TBD

### Extra Help?

- [Using Fetch API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- Video on [async/await](https://www.youtube.com/watch?v=_9vgd9XKlDQ), try catch errors, and more.
- [Try Catches](https://javascript.info/try-catch) and how to use them.

### Extensions

- Include synonyms
- Create a card for each def
- Turn all synonyms into a link - when clicked show results for that word
- Add a translate button on the card that shows the translation to Spanish (NOTE: you’ll need the other API key for this new api call)

**Mild**

- 

**Medium**

- 

**Spicy**

- 

**Reflection Questions:**

TBD

- What are you most proud of? What did you struggle the most with?
- What do you think would be the benefit of using an API to access data instead of accessing the data straight from the database? What are the drawbacks?
