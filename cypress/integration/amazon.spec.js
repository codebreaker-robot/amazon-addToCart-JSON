import homePageEle from "./pageObjects/homePageEle";
const home = require("../fixtures/amazon.json");

describe("Amazon Add To Cart Functionality", () => {
  it("Visit Amazon Page", () => {
    //visit amazon website
    homePageEle.visit(home.amazon);
  });
  it("Navigate to cart details page and verify cart is empty", () => {
      homePageEle.naviagteToCart(home.cartEmptyMsg);
  });
  it("Search boat headphone using search functionality", () => {
    homePageEle.search(home.productName);
  });
  it("Visit the 3rd link from the search products", () => {
    homePageEle.clickOnThirdEle();
  });
  it("Add the 3rd item to cart", () => {
    homePageEle.goToCart(home.addToCartMsg);
    homePageEle.addedItemVer(home.productNameVer);
  });
  it("Delete the item and Check item count", () => {
    homePageEle.deleteItem();
    homePageEle.cartItemCount();
  });
});
