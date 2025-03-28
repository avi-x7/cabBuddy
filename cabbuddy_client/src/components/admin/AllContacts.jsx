import axios from "axios";
import { useEffect, useState } from "react";
import ContactDetails from "./ContactDetails";
const AllContacts = () => {
  const [contactData, setContactData] = useState([]);
  const URL = "http://localhost:3000/a/allcontacts";

  const fetchContacts = async () => {
    try {
      const response = await axios.get(URL);
      setContactData(response.data.contactQuery);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <>
      <h1>daslfh</h1>
      <ContactDetails data={contactData} />
    </>
  );
};

export default AllContacts;
