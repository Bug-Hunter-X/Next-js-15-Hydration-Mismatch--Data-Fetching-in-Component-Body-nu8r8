# Next.js 15 Hydration Mismatch Bug
This repository demonstrates a common hydration mismatch bug in Next.js 15 applications that occurs when fetching data within the body of a component.  Improper handling of asynchronous data fetching can lead to inconsistencies between the server-side render and the client-side hydration.

## Bug Description
The `about.js` file fetches data using `fetch` within the component's body.  This data fetch occurs *after* the initial server-side render, which leads to a mismatch.  The client-side hydration sees different data than what the server initially sent to the browser.

## Solution
The `aboutSolution.js` file provides a corrected approach using `getStaticProps` or `getServerSideProps` for data fetching on the server, eliminating the hydration mismatch.