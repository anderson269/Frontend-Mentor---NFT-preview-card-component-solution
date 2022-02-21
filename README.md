# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./screenshot.png)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

On this project I learned about images positioning into divs and containers positioned as block elements, as well as about how to center an image contained by a absolutly positioned element using Flexbox.

To center an image contained by an element positioned as `absolute ` it's necesary to use Flexbox in order to expedite the process:

1. Create the HTML markup, just like that:

```html
<div class="image">
  <img src="..." alt="...">
<div>
```

2. Set the following CSS code:

```css
  .image {
    position: absolute;
    display: flex;
    justify-content: center;
    align-content: center;
  }
```

### Continued development

I must learn and improve my skills regarding event listeners in JavaScript and how to locate elements into DOM tree.

### Useful resources

- [reset.css 2.0 by Eric Meyer](https://meyerweb.com/eric/tools/css/reset/) - This tool was very useful to me through this project because saved me of write a lot of CSS code. This tool reset my CSS Styles and prevents me of writing a number of rules in the main CSS styles.
