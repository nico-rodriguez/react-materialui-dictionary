import axios from "axios";

export const getDefinitions = async (word) => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_DICTIONARY_API}${word}`);
    return data;
  } catch (error) {
  }
}
