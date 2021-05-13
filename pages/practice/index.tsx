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

import dynamic from "next/dynamic";

// const ActivePanel = dynamic(() => import("./active"));
// const NotActivePanel = dynamic(() => import("./not_active"));
// import ActivePanel from "./active";
// import NotActivePanel from "./not_active";
export function getStaticProps(context) {
  console.log(context);
  return {
    props: { count: Math.random() },
    revalidate: 10, // seconds: this will try to recreate this page in atmost 10 seconds
  };
}

// export const getStaticPaths = () => {
//   return {
//     fallback: "blocking",
//     paths: [{ params: {} }, { params: {} }], // will be build ahead of time (BUILD TIME)
//   };
// };

const Practice = (props) => {
  // if (props.count > 0.5) {
  //   return <NotActivePanel />;
  // }

  return (
    <div>
      Practice Site {props.count}
      {/* <ActivePanel /> */}
    </div>
  );
};

export default Practice;
