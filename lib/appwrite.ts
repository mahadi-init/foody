import { Client } from "appwrite";

const client = new Client();
client.setProject(process.env.NEXT_PUBLIC_APPWRITE_ID as string);

export default client;
