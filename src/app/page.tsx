import { WEBSITE_DESCRIPTION, WEBSITE_NAME } from "../constants/about";

export default function Home() {
  return (
    <main>
      <h1>{WEBSITE_NAME}</h1>
      <p>{WEBSITE_DESCRIPTION}</p>
    </main>
  );
}
