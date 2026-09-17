import Breadcrumbs from "@/components/Breadcrumbs";
import Industries from "@/components/industries/industries-section";
import Our_work_herosection from "./startup/components/Our_work_herosection";
import Work_portfolio_gallery from "./startup/components/Work_portfolio_gallery";


export default function About() {
  return (
    <>
      <Our_work_herosection />
      <Breadcrumbs pageTitle="Industries We Serve" />
      <Industries />
      <Work_portfolio_gallery />
    </>
  );
}
