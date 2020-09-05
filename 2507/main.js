// import { getCategories } from "./services.js";

// window.displayCategory = (renderHTML) => {
//   getCategories().then(cates => {
//     let c = document.getElementById("cateId");
//     c.innerHTML = "";

//     cates.forEach(cat => {
//       c.innerHTML += renderHTML(cat);
//     });
//   })
// }

import { getCategories, getItems, addItem } from "./services.js";

window.displayCategory = (renderHTML) => {
    getCategories().then(cates => {
        let c = document.getElementById("cateId");
        c.innerHTML = "";
        cates.forEach(cat => {
            c.innerHTML += renderHTML(cat);
        });
    });
}

window.displayItems = (renderHTML, cate=-1, sortBy=null) => {
  getItems().then(items => {
    if (cateId > 0)
      items = items.filter(it => it.category == cateId);
    
    if (sortBy != null) {
      items.sort(sortBy);
    }

    let c = document.getElementById("itemId");
    c.innerHTML = "";
    items.forEach(it => c.innerHTML += renderHTML(it));

  });
}

window.itemDefault = item => {
  return `<tr>
  <td>${item.id}</td>
  <td>${item.name}</td>
  <td>${item.amount}</td>
  <td>${item.createdDate}</td>
  <td>${item.category}</td>
  <td></td>
</tr>`
};

window.addItem = () => {
  let name = document.getElementById("nameId").value;
  let amount = parseFloat(document.getElementById("amountId").value);
  let cateId = parseInt(document.getElementById("cateId").value);

  addItem(name, amount, cateId).then(res => {
    console.log(res);
    window.location = "index.html";
  }).catch(err => console.log(err));  
}

window.sortByName = (item1, item2) => {
  return item1.name.localCompare(item2.name);
}

window.sortByAmount = (item1, item2) => {
  return 
}