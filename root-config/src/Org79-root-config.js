// import { registerApplication, start } from "single-spa";
// import {
//   constructApplications,
//   constructRoutes,
//   constructLayoutEngine,
// } from "single-spa-layout";
// import microfrontendLayout from "./microfrontend-layout.html";

// const routes = constructRoutes(microfrontendLayout);
// const applications = constructApplications({
//   routes,
//   loadApp({ name }) {
//     return System.import(name);
//   },
// });
// const layoutEngine = constructLayoutEngine({ routes, applications });

// applications.forEach(registerApplication);
// layoutEngine.activate();
// start();
import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@Org79/navbar-app",
  () => System.import("@Org79/navbar-app"),
  isActive.nav
);

registerApplication(
  "@Org79/signup-app",
  () => System.import("@Org79/signup-app"),
  isActive.signUp
);

registerApplication(
  "@Org79/manageitem-app",
  () => System.import("@Org79/manageitem-app"),
  isActive.manageItem
);

start();