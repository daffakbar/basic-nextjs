import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function index({ dataUsers }) {
  console.log(dataUsers);

  const router = useRouter();
  return (
    <Layout pageTitle="Users Page">
      <h1>halaman data users</h1>
      {dataUsers.map((user) => {
        return (
          <div key={user.id}>
            <ul>
              <li>
                {" "}
                <button onClick={() => router.push(`/users/${user.id}`)}>
                  {" "}
                  Klik detail User
                </button>{" "}
              </li>
              <li>{user.name}</li>
              <li>{user.email}</li>
            </ul>
          </div>
        );
      })}
    </Layout>
  );
}

// berfungsi ketika di build SUDAH memiliki data API sebelum kita CALL jadi datanya sudah ada
// jika data dinamis getStatic ini TIDAK cocok
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
