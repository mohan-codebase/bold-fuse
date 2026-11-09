import type { Metadata } from "next";
import { CircleCheck } from "lucide-react";
import UtilityPage from "@/components/booking/UtilityPage";
import { routes } from "@/config/routes";

export const metadata: Metadata = {
  title: "Thank you",
  description:
    "Your Boldfuse appointment request has been received. Our team will confirm your slot shortly.",
  alternates: { canonical: routes["thank-you"].path },
};

export default function Page() {
  return (
    <UtilityPage
      eyebrow="Appointments"
      title="Thank you"
      heading="Thank you"
      icon={CircleCheck}
      message={[
        "Your appointment has been booked successfully!",
        "We have sent your booking information to your email address. Our team will confirm your date and time shortly.",
      ]}
      actions={[
        {
          label: "Book another appointment",
          href: "/book-appointment/",
        },
        {
          label: "Back to home",
          href: "/",
          variant: "outline",
        },
      ]}
    />
  );
}
