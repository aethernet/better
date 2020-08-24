import ItemUpdate from './itemUpdate'

/** Gilded Rose Shop Class */
class Shop {
  /**
   *
   * @param {Items[]} items - Array of Items to sell in the shop
   */
  constructor(items = []) {
    this.items = items
  }

  /**
   * Daily inventory update
   * @returns {Items[]} - Array of updated items
  */
  updateQuality() {
    return this.items.map((item) => ItemUpdate.update(item))
  }
}

export default Shop
