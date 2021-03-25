import { r as registerInstance, h } from './index-6c533261.js';

const appRootCss = ":host{display:block}:host .header-principal{text-align:center !important}";

const AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: '/', component: 'app-home', exact: true }), h("stencil-route", { url: '/pokemon/:language', component: 'pokemon-list' }), h("stencil-route", { url: '/battle', component: 'pokemon-battle' }))))));
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
