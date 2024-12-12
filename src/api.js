import { API_URL } from "./config.js";

export async function fatchApi() {
  console.log(API_URL);
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("error", error);
  }
}
