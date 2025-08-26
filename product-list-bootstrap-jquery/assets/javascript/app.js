const Data = {
    "Salted Caramel Brownie": "./assets/images/image-brownie-thumbnail.jpg",
    "Red Velvet Cake": "./assets/images/image-cake-thumbnail.jpg",
    "Pistachio Baklava": "./assets/images/image-baklava-thumbnail.jpg",
    "Vanilla Bean Crème Brûlée":
        "./assets/images/image-creme-brulee-thumbnail.jpg",
    "Macaron Mix of Five": "./assets/images/image-macaron-thumbnail.jpg",
    "Lemon Meringue Pie": "./assets/images/image-meringue-thumbnail.jpg",
    "Vanilla Panna Cotta": "./assets/images/image-panna-cotta-thumbnail.jpg",
    "Classic Tiramisu": "./assets/images/image-tiramisu-thumbnail.jpg",
    "Waffle with Berries": "./assets/images/image-waffle-thumbnail.jpg",
};

function sideFoot(value) {
    $(".side-1th").each((indexTr, itemTr) => {
        let a = $(itemTr).find(".side-head").text().trim();
        let b = $(value).find("#card-p").text().trim();
        if (a === b) {
            $(itemTr)
                .find(".ft-red")
                .text(`${$(value).find(".cart-new-p").text()}x`);

            $(itemTr)
                .find(".span-color")
                .text(
                    `$${(
                        +$(value).find(".card-red").text().trim().slice(1) *
                        +$(value).find(".cart-new-p").text()
                    ).toFixed(2)}`
                );

            $(".order-1th")
                .eq(indexTr)
                .find(".span-red")
                .text($(itemTr).find(".ft-red").text());
            $(".order-1th")
                .eq(indexTr)
                .find(".order-price")
                .text($(itemTr).find(".span-color").text());
        }
    });
}
function orderTotal() {
    let r = $(".span-color").text().slice(1).split("$");
    let c = 0;
    for (i of r) {
        c += +i;
    }
    $(".side-4th-p").text(`$${c.toFixed(2)}`);
    $(".order-last-span").text(`$${c.toFixed(2)}`);
}
function totalCount() {
    let r = $(".ft-red").text().split("x");
    let c = 0;
    for (i of r) {
        c += +i;
    }
    $(".aside-h").find("span").text(c);
    if (c === 0) {
        $(".side-bar-main").addClass("display-hide");
        $(".side-bar-bot").removeClass("display-hide");
    }
}

$(".content-card").each((index, item) => {
    let num = $(item).find("#card-p").text().trim();
    let srct;
    for (let [key, str] of Object.entries(Data)) {
        if (key === num) {
            srct = str;
        }
    }
    // console.log(srct);

    $(item)
        .find(".card-btn")
        .on("click", () => {
            $(item).find(".card-btn-new").removeClass("display-hide");
            $(item).find(".card-btn").addClass("display-hide");

            $(item).find(".content-card-img").addClass("content-border");

            $(".side-bar-main").removeClass("display-hide");
            $(".side-bar-bot").addClass("display-hide");

            $(".tr-class").append(`
                            <tr>
                                <td class="side-1th">
                                    <div class="side-left">
                                        <p class="side-head">
                                            ${$(item).find("#card-p").text()}
                                        </p>
                                        <div class="side-foot">
                                            <span class="ft-red">1x</span>
                                            <span class="span-item"
                                                >@ ${$(item)
                                                    .find("#card-red")
                                                    .text()}
                                                <span class="span-color"
                                                    >${$(item)
                                                        .find("#card-red")
                                                        .text()}</span
                                                ></span
                                            >
                                        </div>
                                    </div>
                                    <button class="remove-btn">
                                        <img
                                            class="remove-img"
                                            src="./assets/images/icon-remove-item.svg"
                                            alt=""
                                        />
                                    </button>
                                </td>
                            </tr>`);

            $(".tr-modal").append(`<tr>
                                                        <td class="order-1th">
                                                            <img
                                                                class="aside-modal-img"
                                                                src="${srct}"
                                                                alt=""
                                                            />
                                                            <div
                                                                class="order-main"  
                                                            >
                                                                <p
                                                                    class="order-name" id="order-name"
                                                                >${$(item)
                                                                    .find(
                                                                        "#card-p"
                                                                    )
                                                                    .text()}</p>
                                                                <p
                                                                    class="order-p"
                                                                >
                                                                    <span
                                                                        class="span-red"
                                                                        >1x</span
                                                                    >
                                                                    <span
                                                                        >@
                                                                        ${$(
                                                                            item
                                                                        )
                                                                            .find(
                                                                                "#card-red"
                                                                            )
                                                                            .text()}</span
                                                                    >
                                                                </p>
                                                            </div>
                                                            <p
                                                                class="order-price order-name"
                                                            >
                                                                ${$(item)
                                                                    .find(
                                                                        "#card-red"
                                                                    )
                                                                    .text()}
                                                            </p>
                                                        </td>
                                                    </tr>`);

            orderTotal();
            totalCount();
        });

    $(item)
        .find(".right-btn")
        .on("click", () => {
            const value = +$(item).find(".cart-new-p").text();
            $(item)
                .find(".cart-new-p")
                .text(value + 1);

            sideFoot(item);

            orderTotal();
            totalCount();
        });

    $(item)
        .find(".left-btn")
        .on("click", () => {
            const value = +$(item).find(".cart-new-p").text();
            if (value > 1) {
                $(item)
                    .find(".cart-new-p")
                    .text(value - 1);
            } else {
                $(item).find(".card-btn-new").addClass("display-hide");
                $(item).find(".card-btn").removeClass("display-hide");

                $(item).find(".content-card-img").removeClass("content-border");

                $(".side-1th").each((sideIndex, sideItem) => {
                    let o = $(sideItem).find(".side-head").text().trim();
                    let y = $(item).find("#card-p").text().trim();

                    if (o === y) {
                        $(sideItem).closest("tr").remove();
                        $(".order-1th").eq(sideIndex).closest("tr").remove();
                    }
                });
            }

            sideFoot(item);

            orderTotal();
            totalCount();
        });
});

$(".tr-class").on("click", ".remove-btn", (event) => {
    $(event.currentTarget).closest("tr").remove();

    let b = $(event.currentTarget)
        .closest("tr")
        .find(".side-head")
        .text()
        .trim();

    $(".order-1th").each((index, item) => {
        let a = $(item).find("#order-name").text().trim();
        if (a === b) {
            $(item).closest("tr").remove();
        }
    });

    $(".content-card").each((index, item) => {
        let a = $(item).find("#card-p").text().trim();
        if (a === b) {
            $(item).find(".card-btn-new").addClass("display-hide");
            $(item).find(".card-btn").removeClass("display-hide");

            $(item).find(".content-card-img").removeClass("content-border");
        }
    });

    orderTotal();
    totalCount();
});
