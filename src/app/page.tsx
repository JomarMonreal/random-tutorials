import { pageOverviews } from "@/utils/pageOverviews";
import { HomeCover } from "../components/HomeCover";
import { PageOverview } from "../components/PageOverview";

export default function Home() {
  return (
    <main>
      
      <HomeCover/>

      {pageOverviews.map((pageOverview, index) => (
        <PageOverview
          key={index}
          isContentStart={pageOverview.isContentStart}
          title={pageOverview.title}
          description={pageOverview.description}
          buttonLabel={pageOverview.buttonLabel}
          bgStyleClassses={pageOverview.bgStyleClassses}
          buttonStyleClasses={pageOverview.buttonStyleClasses}
        />
      ))}

    </main>
  );
}


