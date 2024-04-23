import { redirect } from "next/navigation";
export default async function AddEventPage() {
  async function submit(formData) {
    "use server";
    // let headersList = {
    //   Accept: "application/json",
    //   apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrdG9laWRzdGV3bmpud3JqcnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTE2MzksImV4cCI6MjAyNjMyNzYzOX0.BdU7kexk3VBblD1893zA94IEIxG5aAY59ZilRhjoAc8",
    //   Prefer: "return=representation",
    //   "Content-Type": "application/json",
    // };
    // console.log(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    // let bodyContent = JSON.stringify({
    //   name: formData.get("name"),
    //   when: formData.get("when"),
    //   description: formData.get("description"),
    // });
    // let response = await fetch(
    //   "https://lktoeidstewnjnwrjrra.supabase.co/rest/v1/events",
    //   {
    //     method: "POST",
    //     body: bodyContent,
    //     headers: headersList,
    //   }
    // );
    // let data = await response.json();
    // const id = data[0].id;
    console.log("n");
    redirect("/events/" + "2");
  }
  return (
    <form action={submit}>
      <div className="formcontrol">
        <label htmlFor="form_name">Titel</label>
        <input id="form_namne" type="text" name="name" />
      </div>
      <div className="formcontrol">
        <label htmlFor="form_when">Hvornår</label>
        <input id="form_when" type="date" name="when" />
      </div>
      <div className="formcontrol">
        <label htmlFor="form_description">Andet du vil sige?</label>
        <input id="form_description" type="text" name="description" />
      </div>
      <button>Gem</button>
    </form>
  );
}
