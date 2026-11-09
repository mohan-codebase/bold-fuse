import type { Metadata } from "next";
import CounsellingDetail from "@/components/editorial/CounsellingDetail";
import {
  counsellingDetails,
  getCounsellingByRoute,
} from "@/content/counselling-details";
import { routes } from "@/config/routes";

const route = "anxiety-counselling";
const detail = getCounsellingByRoute(route);

export const metadata: Metadata = {
  title: detail.title,
  description: detail.metaDescription,
  alternates: { canonical: routes[route].path },
};

export default function Page() {
  const related = counsellingDetails.filter((item) => item.route !== route);
  return <CounsellingDetail detail={detail} related={related} />;
}
