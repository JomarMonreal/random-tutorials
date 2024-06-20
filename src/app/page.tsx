import { WEBSITE_DESCRIPTION, WEBSITE_NAME } from "../constants/about";
import { HomeCover } from "../components/HomeCover";

export default function Home() {
  return (
    <main>
      <HomeCover/>
      <h1>{WEBSITE_NAME}</h1>
      <p>{WEBSITE_DESCRIPTION}</p>
    </main>
  );
}

