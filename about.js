```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a hydration mismatch error if the data is fetched during the render
  const data = fetch('/api/data').then(res => res.json());

  return (
    <div>
      <h1>About Page</h1>
      {/* This will not render the data correctly because it's fetched after the render.*/}      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}
```