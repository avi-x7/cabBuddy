import axios from "axios";
import { useEffect, useState } from "react";
import FeedbackDetails from "./FeedbackDetails";
import AdminHeader from "./AdminHeader";
const AllFeedbacks = () => {
  const [FeedbackData, setFeedbackData] = useState([]);
  const URL = "http://localhost:3000/a/allfeedbacks";

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get(URL);
      setFeedbackData(response.data.feedbackQuery);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <>
    <AdminHeader/>
      <h1 className="text-center" style={{marginTop:"60px"}}>All feedbacks details</h1>
      <FeedbackDetails data={FeedbackData} />
    </>
  );
};

export default AllFeedbacks;
