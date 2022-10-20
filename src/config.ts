import dotenv from "dotenv";
dotenv.config();

interface AppConfig {
  port: number;
  openApi: {
    url: string;
    key: string;
  };
}

const appConfig: AppConfig = {
  port: Number(process.env.PORT) || 3000,
  openApi: {
    url: process.env.OPEN_API_URL || "",
    key: process.env.OPEN_API_KEY || "",
  },
};

export default function AppConfig() {
  return appConfig;
}