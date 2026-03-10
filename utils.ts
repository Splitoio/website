import { DASHBOARD_HOST, BUSINESS_DASHBOARD_HOST } from "./constants";

export const getDashboardUrl = (route?: string) => {
  if (route === "organization") {
    return BUSINESS_DASHBOARD_HOST;
  }
  return `${DASHBOARD_HOST}${route ? `/${route}` : ""}`;
};