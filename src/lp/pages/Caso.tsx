import { useParams, Navigate } from "react-router-dom";
import CaseStudyPage from "@/lp/components/CaseStudyPage";
import { caseStudiesBySlug } from "@/lp/config/caseStudies";

const Caso = () => {
  const { slug } = useParams<{ slug: string }>();
  const cs = slug ? caseStudiesBySlug[slug] : undefined;
  if (!cs) return <Navigate to="/" replace />;
  return <CaseStudyPage caseStudy={cs} />;
};

export default Caso;
