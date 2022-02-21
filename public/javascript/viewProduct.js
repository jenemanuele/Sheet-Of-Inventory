// // // async function viewProduct(event) {
// // //     event.preventDefault
// // //     console.log('View Products here');

// // //     await fetch("/api/product", {
// // //         method: "GET",
// // //         body: JSON.stringify({
// // //             product_name,
// // //             brand,
// // //             cost,
// // //             body_type,
// // //             category_id,
// // //         }),
// // //         headers: { "Content-Type": "application/json" },
// // //     });
// // //     document.location.replace('/product');
// // // }
// // // document.getElementById("viewProduct").addEventListener("click", viewProduct);

// async function viewProduct(event) {
//     event.preventDefault();

//     console.log("=====product viewing=====");

//     // const product_name = document.querySelector('input[id="nameInput"]').value.trim();
//     // var brand = "Martin";
//     // const cost = parseInt(document.querySelector('input[id="costInput"]').value.trim());
//     // const body_type = document.querySelector('input[id="bodyTypeInput"]').value.trim();
//     // var category_id = 1;

//     // var brandElements = document.getElementsByName('brandInput');
//     // for (i = 0; i < brandElements.length; i++) {
//     //     if (brandElements[i].checked) {
//     //         brand = brandElements[i].value
//     //     }
//     // }

//     // var categoryElements = document.getElementsByName('categoryInput');
//     // for (i = 0; i < categoryElements.length; i++) {
//     //     if (categoryElements[i].checked) {
//     //         category_id = parseInt(categoryElements[i].value)
//     //     }
//     // }


//     await fetch("/api/product", {
//         method: "GET",
//         body: JSON.stringify({
//             product_name,
//             brand,
//             cost,
//             body_type,
//             category_id,
//         }),
//         headers: { "Content-Type": "application/json" },
//     });

//     document.location.replace('/dashboard');

// };


// document.getElementById('viewProduct').addEventListener('click', viewProduct);