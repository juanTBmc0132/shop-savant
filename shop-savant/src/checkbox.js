let div = document.createElement("div");
div.innerHTML = "<input type='checkbox' id='shoppingSavantCheckbox' name='shoppingSavant'>" +
    "<label for='shoppingSavantCheckbox' style='display:inline;'> Add to Shopping Savant</label>";

document.getElementById("averageCustomerReviews_feature_div")
        .after(div);

document.getElementById("shoppingSavantCheckbox").addEventListener("click", () => {
    addToList();
});
