import axios from "axios";

const BASE_URL = "https://660e982f356b87a55c4f867c.mockapi.io/contacts";

const removeContact = async (contactId) => {
  const response = await axios.delete(`${BASE_URL}/${contactId}`);

  return response.data.id;
};

export default removeContact;
