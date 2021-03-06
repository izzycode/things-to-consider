**Before you Start:** This project uses Sass as a processor for styles. If you don't have it installed please do so now.
1.- **Mac:** `brew install sass/sass/sass`
2.- **Linux:** `npm install -g sass`  
3.- **Windows:** May god forgive you... alternatively, but ONLY if you have Ruby installed, you can try: `gem install sass` in a linux (Ubuntu) terminal.
----------------

# React Star Wars App
Welcome to the Reactified Star Wars App. We are going to use every tool in your basket for this one so you can see how it all comes together, since you'll be doing something like this for your final project.

## Episode One: The Wireframe menace
At the beginning of every project, we should always draw a mockup to guide us and keep us in track of what we expect to build.  
I know that we have seen this page already, but for the sake of consistency we will do it now.
<center>![swapi mockup](https://i.imgur.com/NGFZNY8.png)</center>
There. ☝️
Moving on. 👌

## A long long time ago... there was `create-react-app`
In order to get a basic React App boilerplate we just need to install the `create-react-app` command in our terminals. For this run:
```sh
yarn global add create-react-app

# Or if that doesn't work for you:
npm install -g create-react-app
```
Now we can go ahead and start our new app:
```sh
create-react-app react-star-wars
cd react-star-wars
```
We are going to use most of what the boilerplate gives us but are also going to change some of it to suit our needs.

![github's octocat](http://icons.iconarchive.com/icons/bokehlicia/captiva/32/web-github-icon.png)
Now it's a good time to commit our changes to Git.  
We are going to follow best practices and use a proper developer work flow during the development of our app. This means that we are going to work on branches and commit often.  
First let's initialize a git repository. In your terminal:
```sh
git init
```
Then we need to add our changes and commit them.
```sh
git add .
git commit -m "Brand new React Star Wars app"
```
Good, moving on.

## Episode two: Attack of the Components
![github's octocat](https://i.imgur.com/D5OV6D6.png) Let's start by checking out a feature branch.
```sh
git checkout -b "main-component"
```
Now we are going to build the basic structure of the app. Some cleaning required first, though. Go ahead and delete these files that we won't use:
```
App.js
App.tests.js
App.css
logo.svg
```
Awesome. Let's break things.
<center>![breaking stuff giphy](https://media.giphy.com/media/yoJC2GnSClbPOkV0eA/giphy.gif)</center>

Now, we are going to create the basic face for our app.  
Let's `cd` into the `src` directory and create three folders:
```sh
mkdir components css scss
```
Inside of `components` create a `Main.jsx` file and inside of `scss` create a `Main.scss` file.
To finish the cleanup, let's go into the `index.js` file and replace the references to the `App` component for references to a `Main` component. Make sure you import the proper relative path to it.
This is going to be the main component in our app. Declare it as a **stateless** component. In it we are going to return a `<div>` containing:
- A _form_ component (you can have a `<div>` with the word _form_ for now).
- A _profile_ component. But for now you can just have a `<div>` with the word _profile_ in it.

Remember that the main objective is to always have an app that works.
If you don't already have it running, go ahead and start your server with `yarn start`. Then, open another terminal tab (_ctrl + t_ for mac, _cmd + t_ others) and navigate to the `src` directory. We are going to start our styling by downloading a `normalize` file and adding it to the `css` folder. In your terminal run:
```sh
curl https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css > css/normalize.css
```
With that line of code we are downloading the content of that URL (the normalize file itself) and placing it in a `normalize.css` file (which gets created) inside of our `css` directory.
Next, we are going to set this terminal to **watch** for changes in our `sass` directory. In the terminal run:
```sh
sass --watch scss:scss
```
The first thing we are going to do before we go style happy is import the css to our component.
In `Main.jsx`, import the `Main.css` file that is generated by **sass** and placed in the `css` folder. This way we can see our styles as we add them to the page.
Great, now that that is all set and running, open the `Main.scss` file in your text editor.
Let's select the _header_ within the block element with the class of `star-wars` and give it:
  - a _black_ background
  - align the text to the center
  - give it a solid bottom border of `7px` and this hexadecimal color: `#ffe81f` (yellow)

Next, select the image tag that's inside the block element with the class of `star-wars` and set its width to `25%`.
Finally, for this component and still in your _scss_ `Main.scss`, select the _main_ element that is inside of the block divider with the `star-wars` class and give it:
  - a background consisting of this image:   https://i.imgur.com/JnsFKjT.png
  - a heigth of `90vh`

![github's octocat](http://icons.iconarchive.com/icons/bokehlicia/captiva/32/web-github-icon.png)
It looks great. So now we need to **commit**. In your terminals open another tab and run `git status` we should have every file you've created since las commit in red (unstaged). Let's stage them and commit. In the terminal:
```sh
git add .
git commit -m "Create Main component with styles"
```

If this was a deployed product we would make a pull request for one of our peers to review our code before adding it to the **master branch**. However we're going to skip that and merge it to **master** ourselves. In your terminal:
```sh
git checkout master
```
This will take you back to the **master** branch.
Then:
```sh
git merge main-component
```
Now, it is a good habit to delete branches that we are done with, so once our merge is successful we need to delete the feature branch. In our terminal:
```sh
git branch -d main-component
```

Cool! We are done with this component.
We are going to take a short break now and we will move faster when you come back since you now know the flow of our project.
------
<center>Time to relax</center>
<center>here's two kittens</center>
<center>![relaxing kittens](https://media.giphy.com/media/O547YC2gzVNdK/giphy.gif)</center>
-----

## Episode Three: Revenge of the git
Ok, lets move a bit faster now. You can do this, I sense that the force is strong in you.  
![yoda](https://emoji.slack-edge.com/T055GEHEJ/yoda/7b9570461162a76b.png)  
Also, from now on, every time you see this icon: ![github's octocat](http://icons.iconarchive.com/icons/bokehlicia/captiva/32/web-github-icon.png) go ahead and make a commit.

Here we go:
1. Checkout a `form` feature branch
2. In `Main.jsx` replace the first `div` inside of `<main>` for a `Form` component. You also need to import this component in order to use it in here.
2. Create the `Form.jsx`, `Form.scss` files.
    <details open>
    <summary>Expand for styles in `Form.scss`</summary>
    <br>
    ```css
    .sw-select {
      background-color: #fff;
      border-radius: 8px;
      margin: 0 auto;
      min-height: 200px;
      padding: 30px;
      text-align: center;
      width: 530px;
    }

    .sw-select h1 {
      font-size: 2.4rem;
    }

    .sw-select button {
      margin-left: 10px;
      margin-left: 7px;
      border: 1px solid #999;
    }

    .sw-select select,
    .sw-select button  {
      height: 30px;
      padding: 5px;
      vertical-align: middle;
    }
    ```
    </details>

3. Declare the `Form` component
    - Declare its state as having a `selection` property as an empty object and a `characters` property that is set to and empty array.
4. Inside the render method, add a `<div>`. Give it the `className` of `sw-select` and add this code:
      ```js
        <h1>Lookup any Star Wars Character!</h1>
        <form id="sw-form">
          <select name="characters">
            <option value="---">Choose a character</option>
            // add code
          </select>
          <button type="submit">Go</button>
        </form>
      ```
In order to render more `<option>`s, we need to make an _API_ call to get the characters' info.
5. Before the `render` method, declare a `componenttDidMount` method that will make a `fetch` call to: https://swapi.co/api/people. Once you get the response from the _API_ with the desired information we are going assign the characters array to the `characters` property in the component's state.
6. After the `<option>` (in the jsx), call the component's `displayOptions` method.
7. Bind the context of `this` for `displayOptions` inside your constructor.
8. Before your `componentDidMount` method, declare a `displayOptions` method that:
    - Returns the resulting array of mapping through the component's state `characters`.
        - Your `map`'s function takes a `character` and an `index` as arguments.
        - It returns an `<option>` that has the following attributes:
            - A `key` equal to the `index`.
            - A `value` equal to the `index`.
            - And the content will be equal to the `character`'s name.

At this point, your should be able to see the character names as options for the select element.
![github's octocat](http://icons.iconarchive.com/icons/bokehlicia/captiva/32/web-github-icon.png)
Let's go ahead and make a commit: "Create the Form component and populate options for select".

Now we will add functionality to this component.
9. Add an `onChange` attribute to the `<select>` that will call the component's `handleSelect` method.
10. Bind your `handleSelect` method's context of `this` inside your constructor.
11. Before the `componentDidMount` method, declare a `handleSelect` method that:
    - Takes an `event` as an argument.
    - Sets the `event` target's value to a variable `index`.
    - Declares a `newChar` variable and assigns the value of the component's element at index position `index` in the `characters` property.
    - Sets the state of the `selection` property to the value held within `newChar`.

Now, looking at your React developer console, target select the `Form` component and choose a different option from the selector. You'll see that the state values update accordingly.

On to make the form submission.    

12. Add an `onSubmit` attribute to the form that will call the component's `handleSubmit` method.
13. Before the `componentDidMount` method, declare a `handleSubmit` method.
    - This method takes an event as an argument.
    - It prevents the default action of form submission.
    - For now, it logs a "Form submitted" message.

![github's octocat](http://icons.iconarchive.com/icons/bokehlicia/captiva/32/web-github-icon.png)
Time to merge our changes into the working **master** branch.
```sh
git checkout master
git merge form
git branch -d form
```

## Rogue routes
Let's start by checking out another feature branch.
```sh
git checkout routes
```
Now are going to declare our **routes**. Before we can do that, we need to add the dependency to our list of packages.
Go ahead and stop the _yarn server_ in your first terminal. Then run:
```sh
yarn add react-router-dom
yarn start
```
You want to restart your server every time you add a dependency so all the new configuration gets loaded.

Go back to your `Main` component and import The `BrowserRouter` and `Route` from `react-router-dom`.
1. Inside the `<main>`, declare a `<BrowserRouter/>` component.
2. Inside of it, declare a `<div>` since the `<BrowserRouter>` component only takes one child.

Inside the `<div>`, we are going to have two `Route` components. ([React Router Docs](https://reacttraining.com/react-router/core/api/Route))
3. The first `Route` component will take the `/` (root) path and render the `Form` component. Don't forget to import it.
4. The second `Route` component will take care of any other parameter. And render a `Profile` component where the information varies depending on the parameter. We will call this parameter `character_id`.  
The way to render a component with props inside of a `Route` is a bit different. We will do it like this:
```js
<BrowserRouter>
  <div>
    <Route path="/" component={Form} />
      <Route
        path="/:character_id"
        render={ props => {
          return (
            <Profile {...props}
              key={props.match.params.character_name} />
          )
        }
    } />
  </div>
</BrowserRouter>
```
**What is going on here?** ☝️
<center>![wait what?](https://media.giphy.com/media/9xvf5zQoL15HKmhGeU/giphy.gif)</center>
Let's break down what is happening here.

- You declare a `Route` component.
- The component takes a `path` prop with a value of `:character_name`.

When you declare a path as `:some_value`, you are making a **dynamic** path. This creates a variable of sorts that will hold the value of what you type in the url and assign it to `:some_value`.

- We use the `render` property instead of `component` (as we did with the `Form`) because we want to pass some props to our `Profile` component.

The `render` property in a `Route` component, takes a function. This function takes the `Route` components props as argument. Inside the function we can call the component we want to render and set the `props` we want to send. In this case we will be setting the `key` to the value of the `character_name`.
`props.match.params` is a value we have available inside of the `BrowserRouter` component.
- Finally, since we want our `Profile` component to be able to use the `Route`'s properties as well (to extract the param), we expand the `Route`'s `props` in side of it with this: `{...props}`.

Think about it for a minute.
<center>![eureka moment](https://media.giphy.com/media/Mjq9vmDuJlBKw/giphy.gif)</center>
Great, let's move on.

At this point our app is broken.
Looking at the errors we know that we need a `Profile` component, so let's do it.

1. Create the `Profile.jsx` and its corresponding `Profile.scss`
2. Import `Profile` inside of your `Main` component.
3. In your `Profile` component, declare a basic component as a class. Go ahead and give it a constructor since we will be working on its state as well. Make it render a `<div>` that says `profile goes here`.

And we're back to a working app.

![github's octocat](http://icons.iconarchive.com/icons/bokehlicia/captiva/32/web-github-icon.png)
Commit, merge to master and delete feature branch.

## Episode four: There's still hope

As we should be used to by now, let's checkout a feature branch.
```sh
git checkout profile
```
Let's start by getting the styles out of the way.
1. In your `Profile` component, import `Profile.css`
2. Add the styles to `Profile.scss`
<details open>
    <summary>Expand for styles in `Profile.scss`</summary>
    <br>
    ```css
   .profile__list {
      background-color: #fff;
      border-radius: 8px;
      margin: 1rem auto;
      min-height: 200px;
      padding: 30px;
      text-align: center;
      width: 530px;
    }

    dt, dd {
      display: inline-block;
    }

    dt {
      font-weight: bold;
      margin-right: 20px;
    }

    dt::after {
      content: ":";
    }

    .loader {
      animation: spin 2s linear infinite;
      border: 16px solid #f3f3f3; /* Light grey */
      border-top: 16px solid #3498db; /* Blue */
      border-radius: 50%;
      display: block;
      height: 120px;
      margin: 2rem auto;
      width: 120px;
    }

    .hidden {
      display: none;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    ```
    </details>

3. In the `Profile` component's constructor you are going to  declare four properties for the state.
    a. A `character` that will be set to an empty object.
    b. A `character_name` that will be set to `this.props.match.params.character_name.replace('_', ' ').` (remember when we sent the `Route`'s props?)
    c. A `loaderIsVisible` property set to true.
    d. A ` listIsVisible` property set to false.
4. Inside your `render` method but before the `return`, set a variable `profile` to the value of the `character` in the component's _state_.
4. Your `render` method will _return_ a `<div>` with the `className` of `profile`.
5. Inside of your `<div>` you will have two `<div>`s.
    a. The first is an empty `<div>` with a `className` of `loader`.
    b. The second one will have a description list (`<dl>`) for every attribute of the character you want to display. Let me get you started with the name. Do it like this:
    ```html
    <dl>
      <dt>Name</dt>
      <dd>{profile.name}</dd>
    </dl>
    ```
    You will fill the rest: Height, mass, hair color, skin color, eye color, birth year, gender.

We have all this ready to display but no character yet. Let's fix that.
6. Before your `render` method, declare a `componentDidMount` method.
7. Inside of `componentDidMount`, assign this:
    ```js
    `https://swapi.co/api/people/`
    ```
    to a `url` variable.
8. Make a `fetch` request to the previously defined `url`.

The response you'll get will be a list of character objects.
9. You need to loop through that list an look for the character whose name matches the `character_name` in your state.
10. Once you find a match, you are going to change the values in your state.  
    a. Set the matching character object to the state's `character` property.
    b. Set the `loaderIsVisible` value to false.
    c. Set the 'listIsVisible` value to true.
11. After you've set the state and still inside of the condition, add this bit of code:
```js
document.querySelector('.loader').classList.add("hidden")
document.querySelector('.profile__list').classList.remove("hidden")
```
This code is adding or removing the `hidden` class depending on the value of different properties in the state.

![github's octocat](http://icons.iconarchive.com/icons/bokehlicia/captiva/32/web-github-icon.png)
Commit, merge to master and delete feature branch.

## Episode Four: Return of the Form
Let's start by checking out a branch. In your Terminal:
```sh
git checkout form-submission
```
Then open `Form.jsx`. In there we are going to implement the submission functionality. Basically what we need to do is grab the selected character's name and add it to the browser's path. For this we are going to use `BrowserRouter`'s `history` property.
Back in the `handleSubmit` method, declare a variable called `nameForUrl` and set its value to the state's `selection` _name_ property. Go ahead and replace the spaces with an underscore (we want the url to look nice).
And this is where the magic happens: Use the `push` method on the `history` _prop_. `push` takes an argument that will be the **path** you want to go to. In this case, the path is going to be: `/the_character_name`. So build a path string with the value of the state's character name and use it as an argument.

![github's octocat](http://icons.iconarchive.com/icons/bokehlicia/captiva/32/web-github-icon.png)
Commit, merge to master and delete feature branch.

And voilà. You, my friend are done. Congrats.

<center>![](https://media.giphy.com/media/d3aCKSuK1D4LWThC/giphy.gif)</center>
