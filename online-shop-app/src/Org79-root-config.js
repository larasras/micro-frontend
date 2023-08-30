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
import * as isActive from './activity-functions.js'

registerApplication(
  "@Org79/navbar-app",
  () => System.import("@Org79/navbar-app"),
  isActive.nav,
  { domElement: document.getElementById('nav-container') }
);

registerApplication(
  "@Org79/customer-app",
  () => System.import("@Org79/customer-app"),
  isActive.page1,
  { domElement: document.getElementById('customer-container') }
);

registerApplication(
  "@Org79/seller-app",
  () => System.import("@Org79/seller-app"),
  isActive.page2,
  { domElement: document.getElementById('seller-container') }
);

start();