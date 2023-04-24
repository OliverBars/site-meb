const rengeSlider = document.getElementById("renge-slider");

if (rengeSlider) {
  noUiSlider.create(rengeSlider, {
    start: [2000, 50000],
    connect: true,
    step: 1,
    range: {
      min: 500,
      max: 50000,
    },
  });

  const input0 = document.getElementById("input-0");
  const input1 = document.getElementById("input-1");
  const inputs = [input0, input1];
  rengeSlider.noUiSlider.on("update", function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });
}
