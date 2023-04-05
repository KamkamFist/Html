window.addEventListener("load", () => {
    let zegar = document.getElementById("zegar")

    window.setInterval(() =>  {
        let date = new Date();

        let godzina = date.getHours().toString().length === 1? '0' + date.getHours() : date.getHours();
        let minuta = date.getMinutes().toString().length === 1? '0' + date.getMinutes() : date.getMinutes();
        let sekunda = date.getSeconds().toString().length === 1? '0' + date.getSeconds() : date.getSeconds();
        let milli = date.getMilliseconds().toString();
        if (milli.length ===1) {
            milli = "00" + milli;
        } else if (milli.length === 2) {
            milli = "0" + milli;
        }

        zegar.innerText = `${godzina}:${minuta}:${sekunda}:${milli}`
    }, 1);
})

