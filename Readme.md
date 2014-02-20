*This repository is a mirror of the [component](http://component.io) module [yields/sortable-table](http://github.com/yields/sortable-table). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/yields-sortable-table`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# sortable-table

  Sortable table. [demo](http://yields.github.io/sortable-table/index.html)

## Installation

  Install with [component(1)](http://component.io):

    $ component install yields/sortable-table

## API

Inherits [yields/sortable](https://github.com/yields/sortable).

## Example

```js
var sortable = require('sortable-table');
var body = document.getElementsByTagName('tbody')[0];
sortable(body).bind();
```

## License

  MIT
