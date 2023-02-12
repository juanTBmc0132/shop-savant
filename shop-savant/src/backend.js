function postNLP(input) {
    $.ajax({
        type: "POST",
        url: "https://api.cohere.ai/generate",
        headers: {
            accept: 'application/json',
            'Cohere-Version': '2022-12-06',
            'content-type': 'application/json',
            authorization: 'Bearer l0HLaS69csw8P2CKRN34mNlJrCa2sbRgC9tOTmmX'
          },
          data: {
            prompt: input,
            max_tokens: 1000,
            return_likelihoods: 'NONE',
            truncate: 'END',
            model: 'command-medium-nightly',
            temperature: 0.25
          },
        success: (response) => {
            return response;
        }
    });
}

function calculateAI(product, items=null) {
    const productString = JSON.stringify(product);

    const rating = postNLP("Rate this product out of five stars.\n\n" + JSON.stringify(productString));
    const pros = postNLP("Give me the pros of this product.\n\n" + productString);
    const cons = postNLP("Give me the cons of this product.\n\n" + productString);

    let comparison = "";
    let itemsToCompare = "";

    if (items == null) {
        chrome.storage.local.get([product.category], (result) => {
            items = result[product.category];
        });
    }
    if (items != undefined) {
        for (i in items) {
            let item = items[i];
            itemsToCompare += "\n\nProduct " + i + JSON.stringify(item);
        }
        comparison = postNLP("Compare the first product to the rest of the products.\n\n" + productString + itemsToCompare);
    }

    return [rating, pros, cons, comparison];
}

function addToList() {
    let product = scrapeAmazonPage();

    let items;
    chrome.storage.local.get([product.category], (result) => {
        items = result[product.category];
    });

    console.log(items);

    // let nlpResults = calculateAI(product, items);

    // product.rating = nlpResults[0];
    // product.pros = nlpResults[1];
    // product.cons = nlpResults[2];
    // product.comparison = nlpResults[3];

    if (items == undefined) {
        chrome.storage.local.set({[product.category]: [product]}, () => {
            console.log(product);
        });
    } else {
        items.push(product);
        chrome.storage.local.set({[product.category]: items}, () => {});
    }
}
