export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  //Decreasing quality of item by one if the quality is above 0
  decreaseQuality(){
      if(this.quality > 0){
          this.quality--
      }
  }
  //Quality increase by one but never over 50
  increaseQuality() {
    if(this.quality < 50) {
      this.quality++;
    }
  }  
}

export class Basic extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }
  updateQuality(){
    this.decreaseQuality()
    this.sellIn = this.sellIn - 1;
    if (this.sellIn < 0) {
      this.decreaseQuality();
    }
  }
}

 export class Concert extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality
  }
    concertOver(){
      if(this.sellIn < 0){
        this.quality = this.quality - this.quality
      }
    }
  increaseBackStageQuality(){
    if (this.name == "Backstage passes to a TAFKAL80ETC concert") {
      if (this.sellIn < 11) {
        if (this.quality < 50) {
          this.quality = this.quality + 1;
        }
      }
      if (this.sellIn < 6) {
        if (this.quality < 50) {
          this.quality = this.quality + 1;
        }
      }
    }
  }
  updateQuality() {
    this.increaseBackStageQuality();
    this.increaseQuality(); 
    this.sellIn = this.sellIn - 1;
    this.concertOver();
  }
}

export class Cheese extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }
  updateQuality(){
    this.increaseQuality()
    this.sellIn = this.sellIn - 1;
  }
}

export class Legendary extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }
  updateQuality() {
  }
}

export class Conjure extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }
  updateQuality(){
    this.decreaseQuality()
    this.sellIn = this.sellIn - 1;
    if (this.sellIn < 0) {
      this.decreaseQuality();
    }
    this.decreaseQuality();
  }
}

export let items = [];

items.push(new Basic("+5 Dexterity Vest", 10, 20)); 
items.push(new Cheese("Aged Brie", 2, 0));
items.push(new Basic("Elixir of the Mongoose", 5, 7));
items.push(new Legendary("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Concert("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Conjure("Conjured Mana Cake", 3, 6));


export const updateQuality = () => {
  for (let item of items) {
    item.updateQuality()
  }
};
