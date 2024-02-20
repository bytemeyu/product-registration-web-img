class Product {
    constructor(name, imgUrl){
        this.name = name;
        this.imgUrl = imgUrl;
    }
}

class ProductManager {
    constructor() {
        //the array to place the instances of the product class (it is an attribute):
        this.products = [];
        //calling a class method:
        this.registerEvents();
        //coment in portuguese (for myself): o construtor de uma classe não apenas cria e inicializa atributos; ele também pode chamar métodos [nossa, esse negócio de POO é legal demaisss! o código fica organizado que é uma beleza!]
    }

    registerEvents() {
        document.querySelector('#registrationButton').addEventListener('click', () => this.registerProduct());

        document.querySelector('#displayButton').addEventListener('click', () => this.displayProduct());
    } 
    
    registerProduct() {
        const productName = document.querySelector('#productName').value;
        const productImgUrl = document.querySelector('#productImgUrl').value;

        if(productName && productImgUrl) {
            //this if checks if both variables are not empty or do not have the value falsy
            const product = new Product(productName, productImgUrl);
            this.products.push(product);

            //after adding the new product object (instance of the Product class) to the products array, call the addProductToSelect method (with this new product object as a parameter):
            this.addProductToSelect(product);

            //reset inputs:
            document.querySelector('#productName').value = '';
            document.querySelector('#productImgUrl').value = '';
        } else {
            alert('por favor, preencha todos os campos.');
        }
    }

    addProductToSelect(product) {
        const productSelect = document.querySelector('#productSelect');
        //assigns to the option constant the return of the Option constructor. the two constructor parameters will become the option text and the option value respectively: the option text will be the name attribute of the product instance of the Product class; the option value will be the index of this object in the products array and not just the imgUrl attribute of this object (so that we can acquire more information about this object later):
        const option = new Option(product.name, this.products.length - 1);
        //add the option to select:
        productSelect.add(option);
    }

    displayProduct() {
        const productSelect = document.getElementById('productSelect');
        //gets the index of the selected option:
        const selectedIndex = productSelect.selectedIndex;
        //gets the selected product from the products array (and not directly from the select and its options):
        const selectedProduct = this.products[selectedIndex];

        if(selectedProduct) {
            const productCard = document.querySelector('#productCard');
            //reset productCard to not render one product under another:
            productCard.innerText = '';
            
            //creates figure, figcaption and img and assigns their respective values:
            const newFigure = document.createElement('figure');
            const newFigCaption = document.createElement('figcaption');
            newFigCaption.innerText = selectedProduct.name;
            const newImage = document.createElement('img');
            newImage.src = selectedProduct.imgUrl;
            
            newFigure.appendChild(newFigCaption);
            newFigure.appendChild(newImage);
            productCard.appendChild(newFigure);

            //add class to style product Card:
            productCard.classList.add('product-card');
        }
    }
}

//creates a new instance of the ProductManager class and runs it immediately. this means that the constructor of the ProductManager class is called, and any logic within that constructor is executed at instance creation time. this pattern is used when you want to initialize an object and do not need to maintain a reference to it for later use. it is useful in situations where the created instance performs its functions (such as adding event listeners to the DOM) without there being a need to interact directly with it afterwards. if I wanted to access that instance later, I should store that instance in a constant.
new ProductManager();



//abacate https://cdn-icons-png.flaticon.com/256/395/395217.png
//maionese https://cdn-icons-png.flaticon.com/256/3376/3376991.png
//picles https://images.vexels.com/media/users/3/299104/isolated/lists/079a3cef309bdbdde057b75ec05528ee-desenho-simples-de-picles.png



//comment in portuguese (for myself): achei bem complexo aplicar o aprendizado de Classes para coisas simples, acredito que o código ficaria bem mais conciso se não tivesse usado Classes nesse caso, mas vamos ver qual seria a sugestão do GPT para criar esse projeto usando Classes (provavelmente ele vai me sugerir um código bem menor e melhor)...
//comment in portuguese (for myself): atualização: como eu imaginava, o GPT me sugeriu um código belíssimo, que eu fui vendo passo-a-passo, entendendo linha por linha e aplicando aqui. foi ótimo pro aprendizado!