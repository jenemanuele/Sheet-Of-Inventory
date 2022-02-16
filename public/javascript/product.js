async function productSubmit(event) {
  event.preventDefault();

  console.log("product test");
  //add the values for these variables.
  const product_name = "gibson les paul";
  const brand = "gibson";
  const category_id = 1;
  const cost = 499.99;
  const body_type = "solid";

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
