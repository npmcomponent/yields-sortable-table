
/**
 * dependencies
 */

var Sortable = require('yields-sortable')
  , classes = require('component-classes')
  , proto = Sortable.prototype
  , inherit = require('component-inherit');

/**
 * Export `SortableTable`
 */

module.exports = SortableTable;

/**
 * Initialize `SortableTable`.
 *
 * @param {Element} el
 */

function SortableTable(el){
  if (!(this instanceof SortableTable)) return new SortableTable(el);
  Sortable.call(this, el);
}

/**
 * Inherit `Sortable`
 */

inherit(SortableTable, Sortable);

/**
 * Bind internal events.
 *
 * @return {Sortable}
 */

SortableTable.prototype.bind = function(){
  proto.bind.call(this)
  this.clone = clone(this.els[0]);
  classes(this.clone).add('sortable-placeholder');
  return this;
};

/**
 * Clone a table row.
 *
 * @param {Element} el
 * @return {Sortable}
 */

function clone(el){
  var rect = el.getBoundingClientRect();
  el = el.cloneNode(true);
  el.style.height = rect.height + 'px';
  for (var i = 0; i < el.children.length; ++i) {
    el.children[i].innerHTML = '';
  }
  return el;
}
