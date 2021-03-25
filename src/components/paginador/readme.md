# list-pagination



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description | Type     | Default     |
| -------------- | ---------------- | ----------- | -------- | ----------- |
| `count`        | `count`          |             | `number` | `undefined` |
| `itemsPerPage` | `items-per-page` |             | `number` | `undefined` |
| `offset`       | `offset`         |             | `number` | `undefined` |


## Events

| Event    | Description | Type                               |
| -------- | ----------- | ---------------------------------- |
| `paging` |             | `CustomEvent<{ offset: number; }>` |


## Dependencies

### Used by

 - [pokemon-list](../pokemon-list)

### Graph
```mermaid
graph TD;
  pokemon-list --> pokemon-paginator
  style pokemon-paginator fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
