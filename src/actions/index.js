const updateTimer = (time) => {
  return {
    type: "UPDATE_TIME",
    payload: time,
  };
};

const switchTimer = (status) => {
  return {
    type: "SWITCH_TIME",
    payload: status,
  };
};

export { updateTimer, switchTimer };
