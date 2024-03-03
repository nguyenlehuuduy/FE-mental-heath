import { AppClient } from "@/api";

const appClient = new AppClient({
  BASE: process.env.API_BASE_URL,
});

export default appClient;
