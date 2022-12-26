import { fetchAction } from "../utils";

const APP_BASE_URL = process.env.REACT_APP_BASE_URL;
 
export const GridSamplePageActions = (value) => {
  return fetchAction({
    type: "GRID",
    verb: "GET",
    endpoint: `${APP_BASE_URL}/api/MasterRequest/ListMasterRequest?Page=0&Size=0`,
  });
};
 
