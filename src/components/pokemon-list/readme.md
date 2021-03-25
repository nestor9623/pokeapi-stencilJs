# pokemon-list



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type           | Default     |
| -------- | --------- | ----------- | -------------- | ----------- |
| `match`  | --        |             | `MatchResults` | `undefined` |


## Dependencies

### Depends on

- stencil-route-link
- [pokemon-card](../pokemon-card)
- [pokemon-paginator](../paginador)

### Graph
```mermaid
graph TD;
  pokemon-list --> stencil-route-link
  pokemon-list --> pokemon-card
  pokemon-list --> pokemon-paginator
  pokemon-card --> pokemon-modal-dialog
  pokemon-modal-dialog --> stencil-route-link
  style pokemon-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
