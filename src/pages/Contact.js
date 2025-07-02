import { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Contact() {
  const [storedName, setStoredName] = useLocalStorage("username", "");
  const [name, setName] = useState(storedName);
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(Boolean(storedName));

  useEffect(() => {
    if (name.trim().length >= 2) {
      setError("");
      setIsValid(true);
    } else {
      setError("Name must be at least 2 characters.");
      setIsValid(false);
    }
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    setStoredName(name);
    alert(`Thank you, ${name}! Your name has been saved.`);
  };

  return (
    <main>
      <h1>Contact Page</h1>
      <p>
        გთხოვთ შეიყვანოთ თქვენი სახელი ქვემოთ მოცემულ ველში და დააწკაპუნოთ
        "შენახვა".
      </p>
      <p>
        თქვენი სახელი ადგილობრივად შეინახება და შემდეგ ვიზიტზე ავტომატურად
        გამოჩნდება.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="nameInput">Your Name:</label>
        <br />
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-describedby="nameError"
          aria-invalid={!!error}
          placeholder="Enter your name"
        />
        {error && (
          <div id="nameError" style={{ color: "red", marginTop: "0.3rem" }}>
            {error}
          </div>
        )}
        <button type="submit" disabled={!isValid}>
          Save Name
        </button>
      </form>
      {storedName && (
        <p style={{ marginTop: "1rem" }}>
          Hello, <strong>{storedName}</strong>!
        </p>
      )}
    </main>
  );
}
