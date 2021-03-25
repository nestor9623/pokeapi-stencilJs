import { Component, Host, h, ComponentInterface, ComponentWillLoad, State, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'pokemon-paginator',
  styleUrl: 'paginador.scss',
  shadow: true,
})
export class Paginator implements ComponentInterface, ComponentWillLoad {
  @State() private totalPages: number;
  @State() private currentPage: number;
  @State() private previousPage: number | undefined;
  @State() private nextPage: number | undefined;

  @Prop() count: number;
  @Prop() itemsPerPage: number;
  @Prop() offset: number;
  @Event() paging: EventEmitter<{ offset: number }>;
  private handleClick(offset: number): void {
    this.offset = offset;
    this.calculate();
    this.paging.emit({ offset });
  }

  private calculate(): void {
    this.totalPages = Math.ceil(this.count / this.itemsPerPage);
    this.currentPage = Math.floor(this.offset / this.itemsPerPage) + 1;
    this.previousPage = this.currentPage - 1 <= 0 ? undefined : this.currentPage - 1;
    this.nextPage = this.currentPage + 1 >= this.totalPages ? undefined : this.currentPage + 1;
  }

  componentWillLoad(): void {
    this.calculate();
  }

  render() {
    return (
      <Host>
        <div class="pagination">
            <a class="button" onClick={() => this.handleClick(0)}>&laquo;</a>
            {this.previousPage && <a onClick={() => this.handleClick(this.offset - this.itemsPerPage)}>{this.previousPage}</a>}
            <a class="active">{this.currentPage}</a>
            {this.nextPage && <a onClick={() => this.handleClick(this.offset + this.itemsPerPage)}>{this.nextPage}</a>}
            <a onClick={() => this.handleClick(this.count - this.itemsPerPage)}>&raquo;</a>
        </div>
      </Host>
    );
  }
}
