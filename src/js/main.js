// New Arivals item images start

import item1 from "../assets/item1.jpg";
import item2 from "../assets/item2.jpg";
import item3 from "../assets/item3.jpg";
import item4 from "../assets/item4.jpg";

const imagesDivNewArrivals = document.querySelectorAll(".new__arrivals .pti-header-img");

const catalog = [
    item1, item2, item3, item4
]

imagesDivNewArrivals.forEach((item, index) => {
    item.insertAdjacentHTML(
        "afterbegin",
        `<img class="pti-img" src="${catalog[index]}">`
    )
})

// New Arivals item images end


// Best Sellers item images start

import best__seller1 from "../assets/best-seller1.jpg";
import best__seller2 from "../assets/best-seller2.jpg";
import best__seller3 from "../assets/best-seller3.jpg";
import best__seller4 from "../assets/best-seller4.jpg";

const imagesDivBestSeller = document.querySelectorAll(".best__seller .pti-header-img");

const catalogBestSeller = [
    best__seller1, best__seller2, best__seller3, best__seller4
]

imagesDivBestSeller.forEach((item, index) => {
    item.insertAdjacentHTML(
        "afterbegin",
        `<img class="pti-img" src="${catalogBestSeller[index]}">`
    )
})


// Best Sellers item images end

// Table decor Collection item images start

import table1 from "../assets/table1.jpg";
import table2 from "../assets/table2.jpg";
import table3 from "../assets/table3.jpg";
import table4 from "../assets/table4.jpg";



const imagesTableDecortion = document.querySelectorAll(".table__decor__colection .tdc__item-img");

const catalogTableDecoration = [
    table1, table2, table3, table4
]

imagesTableDecortion.forEach((item, index) => {
    item.insertAdjacentHTML(
        "afterbegin",
        `<img class="pti-img" src="${catalogTableDecoration[index]}">`
    )
})
