import AddComment from "@/components/AddComment";
export const dynamic = "force-dynamic";
const headersList = {
  Accept: "application/json",
  apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  Prefer: "return=representation",
};
async function getEvent(id) {
  const response = await fetch(
    "https://uwrwptibotlxlvcdeicv.supabase.co/rest/v1/events?id=eq." + id,
    { headers: headersList, cache: "no-store" }
  );
  const data = await response.json();
  return data[0];
}
async function getComments(id) {
  const ep = `https://uwrwptibotlxlvcdeicv.supabase.co/rest/v1/events_comments?event_id=eq.${id}`;

  const responseComments = await fetch(ep, {
    headers: headersList,
    cache: "no-store",
  });

  return await responseComments.json();
}
export default async function EventPage({ params }) {
  const uuid = params.uuid;
  const eventInfo = await getEvent(uuid);
  const comments = await getComments(uuid);

  return (
    <article>
      <h1>{eventInfo.name}</h1>
      <dl>
        <dt>Hvornår</dt>
        <dd>{eventInfo.when}</dd>
      </dl>
      <p>{eventInfo.description}</p>
      <section>
        <h2>Kommentarer</h2>
        {comments.map((c) => (
          <div key={c.id}>
            <dl>
              <dt>{c.name}</dt>
              <dd>{c.comment}</dd>
            </dl>
          </div>
        ))}
        <AddComment uuid={uuid} />
      </section>
    </article>
  );
}
