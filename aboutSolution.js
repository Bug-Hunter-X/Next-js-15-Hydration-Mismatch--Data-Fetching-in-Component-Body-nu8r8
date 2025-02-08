```javascript
// pages/aboutSolution.js
import { getServerSideProps } from 'next';

export default function About({ data }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch('/api/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
```