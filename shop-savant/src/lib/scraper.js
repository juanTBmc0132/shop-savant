const scrapeAmazonPage = function () {
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

    const product = {
        "title": document.title.split(" : ")[0],
        "price": price,
        "category": category,
        "attributeTable": infoHash,
        "ratings": ratingCount,
        "averageRating": ratingAvg
    };

    return product;
}

const scrapeAmazonXHR = function (url) {

    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", (e) => {
        console.log(e);
        return e;
    })
    xhr.open("GET", url);
    xhr.send();
}

export {scrapeAmazonPage, scrapeAmazonXHR};
