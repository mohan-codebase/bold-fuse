import type { Metadata } from "next";
import { BadgeCheck } from "lucide-react";
import UtilityPage from "@/components/booking/UtilityPage";
import { site } from "@/content/site";
import { routes } from "@/config/routes";

export const metadata: Metadata = {
  title: "Appointment cancellation confirmation",
  description:
    "Your Boldfuse appointment cancellation has been confirmed. Rebook any time.",
  alternates: {
    canonical: routes["appointment-cancellation-confirmation"].path,
  },
};

export default function Page() {
  return (
    <UtilityPage
      eyebrow="Appointments"
      title="Appointment cancellation confirmation"
      heading="Cancellation confirmed"
      icon={BadgeCheck}
      message={[
        "Your appointment cancellation has been confirmed.",
        "If this was a mistake or you would like to book a new time, reach out to us any time — we're happy to help.",
      ]}
      actions={[
        {
          label: "Book a new appointment",
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
