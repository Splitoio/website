import { DASHBOARD_HOST } from "./constants";

export const getDashboardUrl = (route?: string) => {
  return `${DASHBOARD_HOST}${route ? `/${route}` : ""}`;
};