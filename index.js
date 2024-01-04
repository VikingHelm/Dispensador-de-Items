// Menu & main
const start = document.querySelector('.start');
const hamburguerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const menuPanel = document.querySelector('.panel');
const candyDisplay = document.querySelector('#container');
const candyInput = document.querySelector('#input');
const candyAdmin = document.querySelector('#admin');

let adminFunction = document.querySelector('.adminFunction');

// Menu btns
const btnCandyDisplay = document.querySelector('#showCandy');
const btnCandyInput = document.querySelector('#showInput');
const btnCandyAdmin = document.querySelector('#showAdmin');
const btnExit = document.querySelector('#showExit');

// Input
const inputSearch = document.querySelector('#input-search');
let candyResult = document.querySelector('.candy-result');
let inputPassword = document.querySelector('#password');

// Load DB
document.addEventListener('DOMContentLoaded', () => {
    showCandyList(candy);
})

// Show Menu
hamburguerIcon.addEventListener("click", () => {
    menuPanel.style.display = "block";
    hamburguerIcon.style.display = "none";
});

closeIcon.addEventListener("click", () => {
    menuPanel.style.display = "none";
    hamburguerIcon.style.display = "block";

});





// Show Input Search Candy
btnCandyInput.addEventListener('click', () => {
    {
        // candyInput.classList.toggle('show');
        candyInput.style.display = "block";

        candyDisplay.style.display = "none";
        candyAdmin.style.display = "none";
        menuPanel.style.display = "none";
        hamburguerIcon.style.display = "block";
        exitContent.style.display = "none";
        start.style.display = "none";
    };
});

inputSearch.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        let value = String(inputSearch.value);
        // console.log(value)

        let candySearch = candy.find((candyItem) => {
            return candyItem.position === value;
        });

        // console.log(value)
        // console.log(candy)

        if (candySearch) {
            candyResult.innerHTML = `                     
                <div class="card item-box position-${candySearch.position}">
                    <p id="position">Input: (${candySearch.position})</p>
                    <div id="img">
                        <img src="${candySearch.img}" alt="${candySearch.name}">
                    </div>
                    <p id="name">${candySearch.name}</p>
                    <p id="price">$${candySearch.price}</p>
                    <div id="btn-subtract"> 
                        <button class="button" onclick="subtractCandy('${candySearch.position}')">Comprar +1</button>
                    </div>
                    
                </div>
                `;
        } else {
            candyResult.innerHTML = `No hay resultados para la posición ingresada.`
        }
    } else {
        candyResult.innerHTML = '';
        candyNotification.innerHTML = "";
    }
});

// Request Candy
let candyNotification = document.querySelector('.candy-notification');
function subtractCandy(position) {
    let candyIndex = candy.findIndex((candyItem) => {
        return candyItem.position === position;
    });

    if (candyIndex !== -1) {
        if (candy[candyIndex].quantity > 0) {
            candy[candyIndex].quantity -= 1;
            candy[candyIndex].cart += 1;

            let finalCost = (candy[candyIndex].cart * candy[candyIndex].price)

            candyNotification.innerHTML = `
            <p>Cantidad de ${candy[candyIndex].name} a llevar: ${candy[candyIndex].cart}</p>
            <p>Costo total: $${finalCost.toFixed(2)}</p>
            
            <p>Cantidad de ${candy[candyIndex].name} disponible: ${candy[candyIndex].quantity}</p>
            


            `;

        } else {
            candyNotification.innerHTML = "Producto fuera de stock.";
        }
    }
}







// Show Display
btnCandyDisplay.addEventListener('click', () => {
    {
        // candyDisplay.classList.toggle('show');
        candyDisplay.style.display = "block";

        candyInput.style.display = "none";
        candyAdmin.style.display = "none";
        menuPanel.style.display = "none";
        hamburguerIcon.style.display = "block";
        exitContent.style.display = "none";
        start.style.display = "none";
    };
});














// Show Admin
btnCandyAdmin.addEventListener('click', () => {
    {
        // candyAdmin.classList.toggle('show');
        candyAdmin.style.display = "block";

        candyDisplay.style.display = "none";
        candyInput.style.display = "none";
        menuPanel.style.display = "none";
        hamburguerIcon.style.display = "block";
        exitContent.style.display = "none";
        start.style.display = "none";
    };
});

// Show Password Checkbox
function showPassword() {
    if (inputPassword.type === "password") {
        inputPassword.type = "text";
    } else {
        inputPassword.type = "password";
    }
}

// Enter Password
const passwordSection = document.querySelector('.adminPassword')
const errorMsg = document.querySelector('.errorAdmin');
inputPassword.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        let inputPasswordAdmin = inputPassword.value.trim();
        console.log(inputPasswordAdmin)

        if (inputPasswordAdmin === "TecChu2022") {
            adminFunction.style.display = "block";
            passwordSection.style.display = "none";
            errorMsg.style.display = "none";
        } else {
            errorMsg.innerHTML = "La contraseña introducida es incorrecta.";
        }
    }
});




// Fill Candy
let inputAdmin = document.querySelector('#input-admin');
let inputAddAdmin = document.querySelector('#input-addAdmin');
let btnAdmin = document.querySelector('.button-admin');
let candyResultAdmin = document.querySelector('.candy-result-admin');
let fillMessage = document.querySelector('.fill-message');
let noResults = document.querySelector('.no-results');

btnAdmin.addEventListener('click', () => {
    let value = String(inputAdmin.value);
    let quantity = parseInt(inputAddAdmin.value);
    console.log(quantity)

    let candySearch = candy.find((candyItem) => {
        return candyItem.position === value;
    });

    // console.log(value)
    // console.log(candy)
    candyResultAdmin.innerHTML = '';
    fillMessage.innerHTML = '';
    noResults.innerHTML = '';

    if (candySearch) {
        candySearch.quantity += quantity;
        candyResultAdmin.innerHTML = `                     
                <div class="card item-box position-${candySearch.position}">
                    <p id="position">Input: (${candySearch.position})</p>
                    <div id="img">
                        <img src="${candySearch.img}" alt="${candySearch.name}">
                    </div>
                    <p id="name">${candySearch.name}</p>
                    <p id="price">$${candySearch.price}</p>
                    <div id="btn-subtract"> 
                        <button class="button">Disponible: ${candySearch.quantity}</button>
                    </div>
                    
                </div>
                

                
                
        `;
        fillMessage.innerHTML = `
        Se ha añadido la cantidad de ${quantity} ${candySearch.name}
        `
        

        
    } else {
        noResults.innerHTML = "No hay resultados para la posición ingresada."
    };
})




// Close & Show Sales
const exitContent = document.querySelector('#exit');
btnExit.addEventListener('click', () => {
    {
        // candyAdmin.classList.toggle('show');
        exitContent.style.display = "block";

        candyDisplay.style.display = "none";
        candyInput.style.display = "none";
        candyAdmin.style.display = "none";
        menuPanel.style.display = "none";
        hamburguerIcon.style.display = "none";
        start.style.display = "none";

        displayTotalSales();
    };
});

function displayTotalSales() {
    let totalSales = 0;

    let soldItems = candy.filter((candyItem) => {
        return candyItem.cart > 0;
    });

    let salesReport = document.querySelector('#salesReport');
    let noSales = document.querySelector('#poverty');

    if (soldItems.length > 0) {
        noSales.style.display = "none";
        soldItems.forEach((item) => {
            let itemTotal = item.cart * item.price;
            totalSales += itemTotal;

            let itemDetails = document.createElement('p');
            itemDetails.innerHTML = `Ítem: ${item.name} | Cantidad: ${item.cart} | Total: $${itemTotal.toFixed(2)}`;

            salesReport.appendChild(itemDetails);
        });

        let totalAmount = document.createElement('p');
        totalAmount.innerHTML = `Total de ventas: $${totalSales.toFixed(2)}`;
        salesReport.appendChild(totalAmount);
        noSales.style.display = "none";

    } else {
        noSales.innerHTML = "No se generaron ventas.";
    }
}