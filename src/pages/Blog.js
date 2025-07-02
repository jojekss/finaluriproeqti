import { useEffect, useState } from "react";
import axios from "axios";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ქართული სათაურები API-ს სტატუსის შესაბამისად
  const kaTitles = [
    "პირველი სტატია ქართულად",
    "ახალი ფუნქცია ჩვენს საიტზე",
    "რატომ ღირს React-ის არჩევა?",
    "ინტერაქტიული UI-ს შექმნა",
    "API ინტეგრაცია და ლოკალიზაცია",
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("მონაცემების ჩატვირთვა ვერ მოხერხდა.");
        setLoading(false);
      });
  }, []);

  return (
    <main style={{ maxWidth: "900px", margin: "2rem auto", padding: "0 1rem" }}>
      <h1>ბლოგი</h1>
      <p>
        აქ შეგიძლიათ გაეცნოთ ჩვენი გუნდის მიერ მომზადებულ სიახლეებს და
        საინტერესო სტატიებს. რეგულარულად ვახდენთ ახალი მასალის დამატებას, ამიტომ
        შეამოწმეთ ხშირად.
      </p>

      {loading && <p>მონაცემები იტვირთება...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading &&
        !error &&
        posts.map((post, index) => (
          <article
            key={post.id}
            style={{
              backgroundColor: "rgba(0,0,0,0.05)",
              padding: "1rem 1.5rem",
              borderRadius: "6px",
              marginBottom: "1.5rem",
            }}
          >
            <h3>{kaTitles[index] || post.title}</h3>
            <p>{post.body}</p>
          </article>
        ))}
    </main>
  );
}
