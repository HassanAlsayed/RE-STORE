import axios from "axios";
import { toast } from "react-toastify";

export const SendEmail = (email) => {
  axios
    .post(`http://localhost:5043/api/Products/sendEmail`, email)
    .then((res) => {
      console.log(res.data);
    }).catch(error=>{
        toast.error('Faild to send email');
    })
};
