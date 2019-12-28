class homePage
{
//define all the page objects related to home page 
nameTextBox = "input[name='name']:nth-child(2)";
emailTextBox = "input[name='email']";
genderSelection = "#exampleFormControlSelect1";
enterpreneurRBttn = "#inlineRadio3";
dobTextBox = "input[name='bday']";
submitBttn = ".btn.btn-success";
twoWayBindingTextBox = "input[name='name']:nth-child(1)";

shopLink = "a[href='/angularpractice/shop']";
homeLink = "a[href='/angularpractice']";

checkOutLink = "a[class='nav-link btn btn-primary']";

shoppingBag = "tr td:nth-child(4) strong";
//shoppingBagTotal = "tr td h3 strong";
shoppingBagTotal = "h3 > strong";

checkOutBttn = ".btn.btn-success";

//Delivery Location
deliveryCountry = "#country";

//Delivery Country list
deliveryCountryList = "div[class='suggestions'] ul li a";

//checkbox button Delivery page
delCheckboxBttn = "#checkbox2";

//Purchasebutton
purchaseButton = ".btn.btn-success.btn-lg";

}

export default homePage;