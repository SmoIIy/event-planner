"use client";
import { useState } from "react";
export default function AddComment({ uuid }) {
  const [userComments, setUserComments] = useState([]);
  async function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const headersList = {
      Accept: "application/json",
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      Prefer: "return=representation",
      "Content-Type": "application/json",
    };
    const bodyContent = JSON.stringify({
      name: formData.get("name"),
      comment: formData.get("comment"),
      event_id: uuid,
    });
    let response = await fetch(
      "https://uwrwptibotlxlvcdeicv.supabase.co/rest/v1/events_comments",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    );
    const newComment = await response.json();
    setUserComments((currentComments) => currentComments.concat(newComment[0]));
  }
  return (
    <>
      {userComments.map((c) => (
        <div key={c.id}>
          <dl>
            <dt>{c.name}</dt>
            <dd>{c.comment}</dd>
          </dl>
        </div>
      ))}
      <form onSubmit={submit}>
        <input type="text" name="name" />
        <textarea name="comment"></textarea>
        <button>Kommentér NU!</button>
      </form>
    </>
  );
}
