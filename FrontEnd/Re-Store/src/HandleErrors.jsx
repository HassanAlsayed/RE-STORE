import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function HandleErrors() {
  const [error, setError] = useState(null);

  const handleApiError = (errorCode) => {
    let url;
    switch (errorCode) {
      case 400:
        url = "BadRequest";
        break;
      case 401:
        url = "UnAuthorized";
        break;
      case 404:
        url = "NotFound";
        break;
      case 500:
        url = "ServerError";
        break;
      case "ValidationError":
        url = "ValidationError";
        break;
      default:
        console.error(`Error code ${errorCode} not handled.`);
        return;
    }

    axios.get(`http://localhost:5043/api/Errors/${url}`)
      .then(res => {
        setError(res.data);
        if (res.data.title) {
          toast.error(res.data.title);
        }
      })
      .catch(error => {
        setError(error.response.data);
        if (error.response.data.title) {
          toast.error(error.response.data.title);
        }
      });
  };

  return {
    handleApiError,
  }
  }

export default HandleErrors;
