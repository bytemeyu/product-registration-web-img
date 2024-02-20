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

const allTheProducts = [];
const productSelect = document.querySelector('#productSelect');
const productCard = document.querySelector('#productCard');

document.querySelector('#registrationButton').addEventListener('click', () => {
    //get object product and put it in array:
    const newProduct = new Products();
    allTheProducts.push(newProduct);

    //render product in select options:
    const newOption = document.createElement('option');
    newOption.innerText = newProduct.name;
    newOption.value = newProduct.imgUrl;
    productSelect.appendChild(newOption);

    //reset inputs:
    document.querySelector('#productName').value = '';
    document.querySelector('#productImgUrl').value = '';
})

//render product in page:
document.querySelector('#displayButton').addEventListener('click', () => {
    //reset productCard:
    productCard.innerText = '';

    //get the option selected in productSelect:
    const selectedOption = productSelect.options[productSelect.selectedIndex];
    //takes the innerText and the value and puts it in the name and imgUrl respectively:
    const name = selectedOption.innerText;
    const imgUrl = selectedOption.value;
    
    //creates figure, figcaption and img and assigns their respective values:
    const newFigure = document.createElement('figure');
    const newFigCaption = document.createElement('figcaption');
    newFigCaption.innerText = name;
    const newImage = document.createElement('img');
    newImage.src = imgUrl;
    
    newFigure.appendChild(newFigCaption);
    newFigure.appendChild(newImage);
    productCard.appendChild(newFigure);

    //add class to style product Card:
    productCard.classList.add('product-card');
})

//abacate https://cdn-icons-png.flaticon.com/256/395/395217.png
//maionese https://cdn-icons-png.flaticon.com/256/3376/3376991.png
//picles https://images.vexels.com/media/users/3/299104/isolated/lists/079a3cef309bdbdde057b75ec05528ee-desenho-simples-de-picles.png



//comment in portuguese (for myself): achei bem complexo aplicar o aprendizado de Classes para coisas simples, acredito que o código ficaria bem mais conciso se não tivesse usado Classes nesse caso, mas vamos ver qual seria a sugestão do GPT para criar esse projeto usando Classes (provavelmente ele vai me sugerir um código bem menor e melhor)...