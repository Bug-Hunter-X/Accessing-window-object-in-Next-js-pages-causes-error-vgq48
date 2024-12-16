# Next.js Server-Side Rendering Error: Accessing 'window' object

This repository demonstrates a common error in Next.js applications: attempting to access the `window` object during server-side rendering (SSR).  The `window` object is only available in the browser environment, not on the server.

## Problem

The `about.js` file attempts to access `window.innerWidth` to get the browser window's width.  This works fine in the browser, but during SSR, Next.js attempts to render the page on the server, where `window` is undefined. This results in an error.

## Solution

The `aboutSolution.js` file provides a solution using conditional rendering.  The code checks if `typeof window !== 'undefined'` before accessing `window.innerWidth`.  This ensures the code only executes in the browser environment, avoiding the SSR error.

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about` in your browser.  You should see the error.
5. Then, run `npm run dev` with the solution file. Navigate to `/about` to see the solution.