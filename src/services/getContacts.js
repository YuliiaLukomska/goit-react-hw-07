import axios from "axios";

const BASE_URL = "https://660e982f356b87a55c4f867c.mockapi.io";

const getContacts = async () => {
  const response = await axios.get(`${BASE_URL}/contacts`);
  return response.data;
};

export default getContacts;
