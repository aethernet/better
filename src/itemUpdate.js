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
    if (item.name.includes('Sulfuras')) return SulfurasItem.update(item)
    if (item.name.includes('Backstage passes')) return BackstagePassesItem.update(item)
    if (item.name.includes('Aged Brie')) return AgedBrieItem.update(item)
    if (item.name.includes('Conjured')) return ConjuredItem.update(item)
    // add new item type here
    return RegularItem.update(item)
  }
}
