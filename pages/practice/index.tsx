// Client <- -> CDN <- -> Server

// Remix (paid)

// Build pages on build time

// 20 static routes, 35 dynamic routes (build ahead of time, will take some time)

// Incrementally/lazily build website

// 35 dynamic routes -> ahead of time, once loaded by someone
// can be stored in cache to server others

// db calls, network requests without being CORS binded
// dynamic import
// locally it will run every single time
// likes to run this on build time

import { GetStaticPaths } from "next";
export function getStaticProps(context) {
  console.log(context);
  return {
    props: { count: 10 },
    revalidate: 10, // seconds: this will try to recreate this page in atmost 10 seconds
  };
}

export const getStaticPaths = () => {
  return {
    paths: [{ params: {} }, { params: {} }], // will be build ahead of time (BUILD TIME)
  };
};

const Practice = (props) => {
  return <div>Practice Site {props.count}</div>;
};

export default Practice;
