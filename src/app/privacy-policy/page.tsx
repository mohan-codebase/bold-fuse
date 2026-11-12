import { pageMetadata } from "@/lib/metadata";
import InformationPage from "@/components/InformationPage";
export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How contact and appointment enquiries work on the Boldfuse website.",
  alternates: { canonical: "/privacy-policy/" },
});
export default function Page() {
  return (
    <InformationPage
      title="Privacy Policy"
      sections={[
        {
          heading: "Information you choose to share",
          text: "Contact and booking forms let you enter your name, phone number, email address, preferred service and a message. Share only the information needed for your enquiry; avoid including medical records or other sensitive details in these forms.",
        },
        {
          heading: "Email and WhatsApp handoff",
          text: "The contact form prepares a message in your email app. The booking form prepares a WhatsApp message, with email available as an alternative. These forms do not submit to a Boldfuse website database. You decide whether to send the prepared message. Email and WhatsApp providers handle messages under their own privacy terms.",
        },
        {
          heading: "Website requests",
          text: "Your browser requests pages, images and other assets from the website host. The host may process technical request information, including your IP address, for delivery and operation. The site does not currently include advertising trackers, analytics scripts or a user account system.",
        },
        {
          heading: "Enquiries sent to our team",
          text: "If you send a message, our team receives the contact details and information you include to respond to your enquiry and arrange the next steps. To ask about information you have shared, or to request a correction or deletion, contact us at the address below. Retention and deletion within third-party services are also subject to those providers’ terms.",
        },
        {
          heading: "External links",
          text: "The contact page embeds Google Maps. When the map loads, your browser connects to Google, which receives technical request information and handles it under its privacy terms. Social media and messaging links also take you to services operated by other providers. Review their privacy terms before sharing information there.",
        },
      ]}
    />
  );
}
