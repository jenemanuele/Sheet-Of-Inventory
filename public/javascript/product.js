async function productSubmit(event) {
  event.preventDefault();

  console.log("=====product was added=====");
  // //add the values for these variables. hardcoded example below to show that it works
  // const product_name = "gibson les paul";
  // const brand = "gibson";
  // const cost = 499.99;
  // const body_type = "solid";
  // const category_id = 1;

  const product_name = document.querySelector('input[id="nameInput"]').value.trim();
  var brand = "Martin";
  const cost = parseInt(document.querySelector('input[id="costInput"]').value.trim());
  const body_type = document.querySelector('input[id="bodyTypeInput"]').value.trim();
  var category_id = 1;

var brandElements = document.getElementsByName('brandInput');
            for(i = 0; i < brandElements.length; i++) {
                if(brandElements[i].checked){
                brand = brandElements[i].value}
            }

var categoryElements = document.getElementsByName('categoryInput');
            for(i = 0; i < categoryElements.length; i++) {
                if(categoryElements[i].checked){
                category_id = parseInt(categoryElements[i].value)}
            }


  await fetch("/api/product", {
    method: "POST",
    body: JSON.stringify({
      product_name,
      brand,
      cost,
      body_type,
      category_id,
    }),
    headers: { "Content-Type": "application/json" },
  });

  // document.location.replace('/dashboard');

}

async function viewProduct (event) {
  event.preventDefault
  console.log('View Products here');

  const viewProduct = document.querySelector('.viewProduct')
  await fetch('/api/product', {
    method: "GET",
    body: JSON.stringify({
      product_name,
      brand,
      cost,
      body_type,
      category_id,
  })
}



document.getElementById("orderForm").addEventListener("submit", productSubmit);
