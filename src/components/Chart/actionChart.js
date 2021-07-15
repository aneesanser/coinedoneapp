import axios from "axios";
import { SET_CHART_TIME } from "./actionTypes";
export const activityCheckApi = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    return axios
      .get("https://api.mocklets.com/mock68182/screentime")
      .then((response) => {
        const payload = {
          chartData: response.data,
        };
        console.log({ payload });
        dispatch({ type: SET_CHART_TIME, payload });
        return resolve();
      });
  });
};
