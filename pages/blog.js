import Head from "next/head";
import Layout from "../components/Layout";

export default function blog({ dataBlog }) {
  return (
    <Layout pageTitle="Blog Page">
      <h1>tes halaman Blog</h1>
      {dataBlog.map((blog) => {
        return (
          <ul key={blog.id}>
            <li>
              <h3>{blog.title}</h3>
            </li>
            <li>{blog.body}</li>
          </ul>
        );
      })}
    </Layout>
  );
}

// cocok untuk data DINAMIS
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    },
  };
}
