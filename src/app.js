import { registerApplication, start } from "single-spa";

registerApplication({
  name: "app-mf-javascript",
  app: window.appJavascript,
  activeWhen: ["/"],
  customProps: {
    codigo: "001",
    nombre: "Microfrontend en Javascipt"
  }
});

registerApplication({
  name: "app-mf-react",
  app: window.appReact,
  activeWhen: ["/"],
  customProps: {
    codigo: "002",
    nombre: "Microfrontend en React"
  }
});

start();