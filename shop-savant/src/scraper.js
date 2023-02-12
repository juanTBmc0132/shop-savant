function scrapeAmazonPage () {
  const price = document.querySelector(".a-price .a-offscreen").innerHTML;
  const infoTable = document.querySelectorAll("#productDetails_techSpec_section_1 tbody tr");
  const infoHash = Array.from(infoTable)
    .map((node) => {
      const key = node.querySelector(".prodDetSectionEntry").innerHTML.trim();
      const value = node.querySelector(".prodDetAttrValue").innerHTML.trim();
      return {
        key: key,
        val: value
      }
    })
    .reduce((hashTable, hash) => {
      hashTable[hash["key"]] = hash["val"];
      return hashTable;
    }, {});

  const category = document.querySelector("#nav-subnav").dataset["category"];

  const ratingCount = document.querySelector("#acrCustomerReviewText").innerHTML.split(" ")[0];
  const ratingAvg = document.querySelector('span[data-hook="rating-out-of-text').innerHTML.split(" ")[0];
  const image = document.querySelector("#landingImage").src;

  const product = {
    "title": document.title.split(" : ")[0],
    "price": price,
    "category": category,
    "attributeTable": infoHash,
    "ratings": ratingCount,
    "averageRating": ratingAvg,
    "image": image
  };

  return product;
}

function scrapeSearchList () {
  const productList = document.querySelectorAll("h2 a");
  // .map gets all entries
  // .filter removes all the "Sponsored" entries
  // note that sponsored are redirects so you will get HTTP302 instead of just 200, causing problems
  const products = Array.from(productList).map((node) => {
      return {
        "title": node.firstChild.innerHTML,
        "url": node.href
      }
    })
    .filter((node) => !node["url"].includes("slredirect"));
  // console.table(products); //debug
  products
}

export { scrapeAmazonPage, scrapeSearchList };
