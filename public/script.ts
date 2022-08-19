function handleTableSelect() {

    let e = event ? event as unknown as any : undefined
    e.preventDefault()
    console.log(e)
    if(e.target.name && e.target.value){
        let key = e.target.name;
        let value = e.target.value;

        changeTableData(value)
    }

}
let button = document.querySelector("input")

function changeTableData(value:string) {

    console.log(value)
}

button.addEventListener('click', handleTableSelect)