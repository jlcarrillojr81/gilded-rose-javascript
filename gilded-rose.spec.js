import { expect, describe, it } from "vitest";
import { Item, items, updateQuality, Basic, Concert, Cheese, Legendary, Conjure } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Basic("basic", 5, 3); //Changed to basic
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
  it('Once the `sellIn` days is less then zero, `quality` degrades twice as fast.', ()=>{
    const testItem = new Basic('basic', -1, 10) //Changed to basic
    items.push(testItem)

    updateQuality()

    expect(testItem.quality).toBe(8);
  });
  it("The `quality` of an item is never negative", () => { //name, sellIn, quality
    const testItem = new Basic('Basic', 11, 0); //Changed to basic
    items.push(testItem);

    updateQuality();
   
    expect(testItem.quality).toBe(0);
  })
  it('"Aged Brie" actually increases in `quality` the older it gets.', () => {
    const testItem = new Cheese('Aged Brie', 10, 10)
    items.push(testItem)

    updateQuality()

    expect(testItem.quality).toBe(11)
  })
  it('The `quality` of an item is never more than `50`.', () => {
    const testItem = new Basic('Basic', 10, 50);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(49);
  })
  it('Sulfuras, Hand of Ragnaros, being a legendary item, never has to be sold nor does it decrease in `quality`.', () => {
    const testItem = new Legendary('Sulfuras, Hand of Ragnaros', 100, 100)
    items.push(testItem)

    updateQuality()

    expect(testItem.quality).toBe(100)
    expect(testItem.sellIn).toBe(100)
  })
  it("Backstage passes to a TAFKAL80ETC concert, increase in `quality` as it's `sellIn` value decreases:", () => {
    const testItem1 = new Concert('Backstage passes to a TAFKAL80ETC concert', 10, 10);
    const testItem2 = new Concert('Backstage passes to a TAFKAL80ETC concert', 5, 10);
    const testItem3 = new Concert('Backstage passes to a TAFKAL80ETC concert', 0, 10);
    
    items.push(testItem1);
    items.push(testItem2);
    items.push(testItem3);


    updateQuality();
    //test item1
    expect(testItem1.quality).toBe(12);
    expect(testItem1.sellIn).toBe(9);
    //test item2
    expect(testItem2.quality).toBe(13);
    expect(testItem2.sellIn).toBe(4);
    //test item3
    expect(testItem3.quality).toBe(0);
    expect(testItem3.sellIn).toBe(-1);
  })

  it('Conjured items degrade in quality twice as fast', () => {
    const testItem = new Conjure('Conjured Item', 10, 10);

    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(8);
  })
  

});


/*
XX Once the `sellIn` days is less then zero, `quality` degrades twice as fast
XX The `quality` of an item is never negative.
XX "Aged Brie" actually increases in `quality` the older it gets.
XX The `quality` of an item is never more than `50`.
XX Sulfuras, Hand of Ragnaros," being a legendary item, never has to be sold nor does it decrease in `quality`.
XX "Backstage passes to a TAFKAL80ETC concert", increase in `quality` as it's `sellIn` value decreases:
  - `quality` increases by `2` when there are `10` days or less left before the concert.
  - `quality` increases by `3` when there are `5` days or less left before the concert.
  - `quality` drops to `0` after the concert.
XX Conjured items degrade in quality twice as fast
*/