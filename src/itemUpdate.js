import RegularItem from './items/item_Regular'
import BackstagePassesItem from './items/item_BackstagePasses'
import AgedBrieItem from './items/item_AgedBrie'
import SulfurasItem from './items/item_Sulfuras'
import ConjuredItem from './items/item_Conjured'

/** Item Update Aggregating Class */
export default class ItemUpdate {
  /**
   * Update Item by Name
   * @param {Item} item - Item to update
   * @returns {Item} - Updated item
   */
  static update(item) {
    // Refactoring Note: Legacy code was more strict than specs for
    // _Sulfuras_ and _Backstage passes_ with only one item accepted for each
    // category.
    // An easy way to make it more robust would be to rewrite is as `item.name.includes('Sulfuras')`
    // In doubt we'll keep behaviour as close as the legacy code as possible

    if (item.name === 'Sulfuras, Hand of Ragnaros') return SulfurasItem.update(item)
    if (item.name === 'Backstage passes to a TAFKAL80ETC concert') return BackstagePassesItem.update(item)
    if (item.name === 'Aged Brie') return AgedBrieItem.update(item)
    if (item.name.includes('Conjured')) return ConjuredItem.update(item)
    // add new item type here
    return RegularItem.update(item)
  }
}
