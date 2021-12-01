import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function UserDetail({ user }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout pageTitle="User Detail">
      <h1>User detail {id}</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>
  );
}
// Generate semua halaman yg di perlukan TIDAK cocok data DINAMIS
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();

  const paths = dataUsers.map((user) => ({
    params: { id: `${user.id}` },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
