const div = document.createElement("div");
div.innerHTML = "<input type='checkbox' name='shoppingSavant' onclick='shoppingSavant()'>" +
    "<label for='shoppingSavantCheckbox' style='display:inline;'> Add to Shopping Savant</label>";

document.getElementById("averageCustomerReviews_feature_div")
        .after(div);

function shoppingSavant() {
    // main logic goes here - should call the backend (TODO)
}
