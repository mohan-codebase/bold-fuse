import type { Metadata } from "next";
import { CircleX } from "lucide-react";
import UtilityPage from "@/components/booking/UtilityPage";
import { site } from "@/content/site";
import { routes } from "@/config/routes";

export const metadata: Metadata = {
  title: "Cancel Payment",
  description:
    "Your Boldfuse payment did not go through. No amount has been charged — try again or contact us.",
  alternates: { canonical: routes["cancel-payment"].path },
};

export default function Page() {
  return (
    <UtilityPage
      eyebrow="Appointments"
      title="Cancel Payment"
      heading="Payment canceled"
      icon={CircleX}
      message={[
        "Sorry! Something went wrong. Your payment has failed.",
        "No amount has been charged. You can try again or continue without payment — your appointment request is still with us and our team will be in touch.",
      ]}
      actions={[
        {
          label: "Try booking again",
          href: "/book-appointment/",
        },
        {
          label: "WhatsApp us",
          href: `https://wa.me/${site.telephone.replace("+", "")}`,
          external: true,
          variant: "outline",
        },
      ]}
    />
  );
}
