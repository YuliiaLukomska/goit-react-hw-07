import axios from "axios";

const BASE_URL = "https://660e982f356b87a55c4f867c.mockapi.io";

const postContact = async (newContact) => {
  const response = await axios.post(`${BASE_URL}/contacts`, newContact);

  return response.data;
};

export default postContact;
