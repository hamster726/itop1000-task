const initialState = {
  stopwatchTime: "00:00:00.00",
  isStopwatchActive: false,
  minuteHand: 0,
  secondHand: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "UPDATE_TIME": {
      let secondHandDegree = parseInt(action.payload.slice(6, 8));
      let minuteHandDegree = parseInt(action.payload.slice(3, 5));

      //render new degree every 100ms
      secondHandDegree = parseFloat(
        String(secondHandDegree) + "." + action.payload.slice(9, 10)
      );
      minuteHandDegree =
        parseFloat(String(minuteHandDegree)) +
        parseFloat("." + action.payload.slice(6, 8)) * 1.667;

      if (secondHandDegree !== state.secondHand) {
        return {
          ...state,
          stopwatchTime: action.payload,
          secondHand: secondHandDegree,
          minuteHand: minuteHandDegree,
        };
      }

      return {
        ...state,
        stopwatchTime: action.payload,
      };
    }

    case "SWITCH_TIME": {
      let status = !state.isStopwatchActive;
      if (typeof action.payload === "boolean") {
        status = action.payload;
      }

      return {
        ...state,
        isStopwatchActive: status,
      };
    }

    default:
      return state;
  }
};

export default reducer;
