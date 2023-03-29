function addToDb(idInfo) {
    console.log(idInfo);
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



export {
    addToDb
}