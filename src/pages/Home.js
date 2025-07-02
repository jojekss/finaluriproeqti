import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";

export default function Home() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  if (loading) return <Loader />;
  if (error)
    return <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>;

  return (
    <main>
      <h1>Home Page</h1>
      <p>
        მოგესალმებით ჩვენს ვებსაიტზე! აქ ნახავთ საინტერესო ინფორმაციას, რომელიც
        რეგულარულად განახლებადია.
      </p>
      <p>
        ქვემოთ ნახავთ სიახლეებს ან მონაცემებს, რომლებიც აღებულია გარე API-დან.
      </p>
    </main>
  );
}
