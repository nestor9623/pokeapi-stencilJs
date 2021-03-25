import { r as registerInstance, f as createEvent, h, e as Host } from './index-6c533261.js';

const paginadorCss = ":host{display:block}:host .pagination{display:inline-block}:host .pagination a{color:black;float:left;padding:8px 16px;text-decoration:none}:host .pagination a.active{background-color:#ff0000;color:white}:host .pagination a:hover:not(.active){background-color:#ddd}";

const Paginator = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.paging = createEvent(this, "paging", 7);
  }
  handleClick(offset) {
    this.offset = offset;
    this.calculate();
    this.paging.emit({ offset });
  }
  calculate() {
    this.totalPages = Math.ceil(this.count / this.itemsPerPage);
    this.currentPage = Math.floor(this.offset / this.itemsPerPage) + 1;
    this.previousPage = this.currentPage - 1 <= 0 ? undefined : this.currentPage - 1;
    this.nextPage = this.currentPage + 1 >= this.totalPages ? undefined : this.currentPage + 1;
  }
  componentWillLoad() {
    this.calculate();
  }
  render() {
    return (h(Host, null, h("div", { class: "pagination" }, h("a", { class: "button", onClick: () => this.handleClick(0) }, "\u00AB"), this.previousPage && h("a", { onClick: () => this.handleClick(this.offset - this.itemsPerPage) }, this.previousPage), h("a", { class: "active" }, this.currentPage), this.nextPage && h("a", { onClick: () => this.handleClick(this.offset + this.itemsPerPage) }, this.nextPage), h("a", { onClick: () => this.handleClick(this.count - this.itemsPerPage) }, "\u00BB"))));
  }
};
Paginator.style = paginadorCss;

export { Paginator as pokemon_paginator };
