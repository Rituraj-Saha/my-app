import emailjs from "@emailjs/browser";
import swal from "sweetalert";
export default function useSendMail(fromName, handleLoading, message) {
  emailjs
    .send(
      "service_yzia22i",
      "template_0z4gz8c",
      {
        from_name: fromName,
        to_name: "Team",
        message: message,
      },
      {
        publicKey: "nzOI_drXwe_GSriUw",
      }
    )
    .then(
      () => {
        // window.alert("Mail Sent Successfully.");
        handleLoading();
        swal("Email Sent Successfully", "", "success");
      },
      (error) => {
        handleLoading();
        window.alert("Failed to sent mail.");
      }
    );
}
