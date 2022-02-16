async function productSubmit(event) {
  event.preventDefault();

  console.log("product test");
  //add the values for these variables. hardcoded example below to show that it works
  const product_name = "gibson les paul";
  const brand = "gibson";
  const cost = 499.99;
  const body_type = "solid";
  const category_id = 1;

  // const product_name = document.querySelector('input[id="nameInput"]').value;
  // const brand = document.querySelector('input[id="brandInput"]').value;
  // const cost = document.querySelector('input[id="costInput"]').value;
  // const body_type = document.querySelector('input[id="bodytypeInput"').value;
  // const category_id = document.querySelector('input[name="categoryInput"]').value;

  await fetch("/api/product", {
    method: "POST",
    body: JSON.stringify({
      product_name,
      brand,
      category_id,
      cost,
      body_type,
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace('/dashboard');

}

document.getElementById("orderForm").addEventListener("submit", productSubmit);
