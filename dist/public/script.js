function handleTableSelect() {
    let e = event ? event : undefined;
    e.preventDefault();
    console.log(e);
    if (e.target.name && e.target.value) {
        let key = e.target.name;
        let value = e.target.value;
        changeTableData(value);
    }
}
let button = document.querySelector("input");
function changeTableData(value) {
    console.log(value);
}
button.addEventListener('click', handleTableSelect);
//# sourceMappingURL=script.js.map