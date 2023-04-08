function addToDb(idInfo) {
    let selectedProduct = {};
    const localData = localStorage.getItem("fake-stor");
    if (!localData) {
        selectedProduct[idInfo] = 1;
        localStorage.setItem("fake-stor", JSON.stringify(selectedProduct));
    } else {
        selectedProduct = JSON.parse(localData);
        if (idInfo in selectedProduct) {
            selectedProduct[idInfo] += 1;
        } else {
            selectedProduct[idInfo] = 1;
        }
        localStorage.setItem("fake-stor", JSON.stringify(selectedProduct))
    }

}

function dataForCartFromDb(ProductLIst, setState) {
    // data from db
    const localData = localStorage.getItem("fake-stor");
    const selectedProduct = [];
    if (localData) {
        const localObj = JSON.parse(localData);
        for (const id in localObj) {
            const eexist = ProductLIst.find((pd) => pd.id === +id);
            if (eexist) {
                eexist.quantity = localObj[id];
                selectedProduct.push(eexist);
            }
        }
    }
    console.log(selectedProduct);
    return selectedProduct
}


function addQuantityInDb(id, isAdd) {
    const dbCartStr = localStorage.getItem("fake-stor");
    if (dbCartStr) {
        const dbCart = JSON.parse(dbCartStr);
        let quantity = dbCart[id];
        if (isAdd) {
            dbCart[id] = +quantity + 1;
        } else {
            dbCart[id] = +quantity - 1;
        }
        localStorage.setItem("fake-stor", JSON.stringify(dbCart))
    }
}

function removeItemFromDb(id) {
    const dbCart = JSON.parse(localStorage.getItem("fake-stor"))
    delete dbCart[id]
    localStorage.setItem("fake-stor", JSON.stringify(dbCart))
}

export {
    addToDb,
    dataForCartFromDb,
    addQuantityInDb,
    removeItemFromDb
}