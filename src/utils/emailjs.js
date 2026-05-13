import emailjs from "@emailjs/browser";

export async function sendEmail({
  serviceId,
  templateId,
  publicKey,
  templateParams,
}) {
  // emailjs.init should be called once per page load; keeping wrapper thin.
  emailjs.init(publicKey);
  return emailjs.send(serviceId, templateId, templateParams);
}
