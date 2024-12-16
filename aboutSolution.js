```javascript
// pages/aboutSolution.js
export default function About() {
  let width;
  if (typeof window !== 'undefined') {
    width = window.innerWidth;
  }
  return (
    <div>
      <h1>About Page</h1>
      <p>The width of the window is: {width ? width : 'N/A'}</p>
    </div>
  );
}
```