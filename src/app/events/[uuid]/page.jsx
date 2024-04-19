export default async function EventPage({ params }) {
  const uuid = params.uuid;

  const headersList = {
    Accept: "application/json",
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };
  const response = await fetch(
    "https://uwrwptibotlxlvcdeicv.supabase.co/rest/v1/events?id=eq." + uuid,
    {
      headers: headersList,
      cache: "no-cache",
    }
  );
  const data = await response.json();
  const eventInfo = data[0];

  const ep =
    "https://uwrwptibotlxlvcdeicv.supabase.co/rest/v1/events_comments?event_id=eq." +
    uuid;

  const responseComments = await fetch(ep, {
    headers: headersList,
    cache: "no-cache",
  });

  const comments = await responseComments.json();

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
      </section>
    </article>
  );
}
