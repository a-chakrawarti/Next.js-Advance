import { useRouter } from "next/router";

export function getStaticProps(context) {
  console.log(context);
  return {
    props: { count: Math.random() * 10 },
    revalidate: 10, // seconds: this will try to recreate this page in atmost 10 seconds
  };
}

// Having fallback to false will run getStaticProps({ params: { paths: "path-1" } }),
// getStaticProps({ params: { paths: "path-2" } })
// and cache/store them be served on disk/CDN

export const getStaticPaths = () => {
  return {
    // other paths will return 404 on fallback false
    // on true, it will build up the page again without throwing 404
    fallback: "blocking",
    // will be build ahead of time (BUILD TIME)
    paths: [{ params: { paths: "path-1" } }, { params: { paths: "path-2" } }],
  };
};

const Paths = (props) => {
  const router = useRouter();

  // Pro of 'blocking'
  // No flashes of loading

  // Con of blocking
  // The first visitor will have a little delay

  if (router.isFallback) {
    // next.js getStaticProps is executing
    // and gets added to paths so it doesn't have to build again
    return <div>Loading...</div>;
  }

  return <div>Paths Site {props.count}</div>;
};

export default Paths;

// fallback to 'blocking' and paths array empty in getStaticPaths: recommended
