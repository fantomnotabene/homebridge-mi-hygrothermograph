module.exports = homebridge => {
  const { HygrothermographAccessory } = require("./lib/accessory")(homebridge);
  homebridge.registerAccessory(
    "homebridge-mi-hygrothermograph",
    "hygrothermograph",
    HygrothermographAccessory
  );
};
