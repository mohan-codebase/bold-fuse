import type { Metadata } from "next";
import { CalendarX } from "lucide-react";
import UtilityPage from "@/components/booking/UtilityPage";
import { site } from "@/content/site";
import { routes } from "@/config/routes";

export const metadata: Metadata = {
  title: "Appointment canceled",
  description: "Cancel an existing Boldfuse appointment via WhatsApp or phone.",
  alternates: { canonical: routes["cancel-appointment"].path },
};

export default function Page() {
  return (
    <UtilityPage
      eyebrow="Appointments"
      title="Appointment canceled"
      heading="Appointment canceled"
      icon={CalendarX}
      message={[
        "Sorry to hear that you have requested to cancel the appointment.",
        "We have sent an email notification for your cancellation request. Click the button below to confirm the cancellation with our team.",
      ]}
      actions={[
        {
          label: "Confirm on WhatsApp",
          href: `https://wa.me/${site.telephone.replace("+", "")}?text=${encodeURIComponent(
            "Hello Boldfuse, I would like to confirm my appointment cancellation.",
          )}`,
          external: true,
        },
        {
          label: "Call us",
          href: `tel:${site.telephone}`,
          external: true,
          variant: "outline",
        },
      ]}
    />
  );
}
