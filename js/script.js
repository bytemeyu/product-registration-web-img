class Products {
    constructor(){
        this.name = this.getName();
        this.imgUrl = this.getImgUrl();
    }

    getName() {
        const productName = document.querySelector('#productName').value;
        return productName;
    }

    getImgUrl(){
        return document.querySelector('#productImgUrl').value;
    }
}

const registrationButton = document.querySelector('#registrationButton');
const allTheProducts = [];

function getObjectProductAndPutItInArray() {
    registrationButton.addEventListener('click', () => {
        const newProduct = new Products();
        allTheProducts.push(newProduct);
        console.log(allTheProducts);
    })
}

getObjectProductAndPutItInArray();

const productSelect = document.querySelector('#productSelect');

function renderProductInSelectOptions() {
    registrationButton.addEventListener('click', () => {
        const newOption = document.createElement('option');
        newOption.innerText = allTheProducts[allTheProducts.length - 1].name;
        newOption.value = allTheProducts[allTheProducts.length - 1].imgUrl;
        productSelect.appendChild(newOption);
    })
}

renderProductInSelectOptions();

function renderProductInPage() {
    document.querySelector('#displayButton').addEventListener('click', () => {
        console.log('clicou')
        const selectedOption = productSelect.options[productSelect.selectedIndex];
        const imgUrl = selectedOption.value;
        const name = selectedOption.innerText;

        const newFigure = document.createElement('figure');
        const newImage = document.createElement('img');
        newImage.src = imgUrl;
        const newFigCaption = document.createElement('figcaption');
        newFigCaption.innerText = name;
        
        newFigure.appendChild(newImage);
        newFigure.appendChild(newFigCaption);
        document.querySelector('#productCard').appendChild(newFigure);
    })
}

renderProductInPage();

//abacate https://cdn-icons-png.flaticon.com/256/395/395217.png
//maionese https://cdn-icons-png.flaticon.com/256/3376/3376991.png

//comment in portuguese (for myself): achei bem complexo aplicar o aprendizado de Classes para coisas simples, acredito que o código ficaria bem mais conciso se não tivesse usado Classes nesse caso, mas vamos ver qual seria a sugestão do GPT para criar esse projeto usando Classes (provavelmente ele vai me sugerir um código bem menor e melhor)...