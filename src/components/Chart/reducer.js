import { SET_CHART_TIME } from "./actionTypes";

const INITIAL_STATE = { studentScreening: {}, chartData: {}, deviceData: {} };
export const studentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CHART_TIME:
      let data = action?.payload?.chartData?.map((item) => {
        return item.chartData;
      });
      console.log(data);
      return { ...state, chartData: data, deviceData: action?.payload };

    default:
      return state;
  }
};
