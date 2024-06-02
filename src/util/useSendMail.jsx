import emailjs from "@emailjs/browser";
export default function useSendMail(message) {
  emailjs
    .send(
      "service_yzia22i",
      "template_0z4gz8c",
      {
        from_name: "rituraj10saha@gmail.com",
        to_name: "Team",
        message: message,
      },
      {
        publicKey: "nzOI_drXwe_GSriUw",
      }
    )
    .then(
      () => {
        window.alert("Mail Sent Successfully.");
      },
      (error) => {
        window.alert("Failed to sent mail.");
      }
    );
}
