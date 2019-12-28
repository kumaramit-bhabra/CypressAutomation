/// <reference types="Cypress" />
import homePage from '../../support/pageObjects/homePage';

describe("understanding the framework and to start with the hooks", function(){
    beforeEach(function()
    {
        this.homePage = new homePage();
        cy.fixture('userReg').then(function(data){
        this.dataFile = data;
        this.price = 0;
        
        })
    })

    it("Entering the values manually", function(){
    
        cy.visit(Cypress.env("url"));
         cy.get(this.homePage.nameTextBox).type(this.dataFile.name);
         cy.get(this.homePage.emailTextBox).type(this.dataFile.email);
         cy.get(this.homePage.genderSelection).select(this.dataFile.gender);
         cy.get(this.homePage.twoWayBindingTextBox).should('have.value',this.dataFile.name);
         cy.get(this.homePage.nameTextBox).should('have.attr','minlength','2');
         cy.get(this.homePage.enterpreneurRBttn).should('be.disabled');
    });

    it("Click on the shop link", function(){
        cy.visit(Cypress.env("url"));
        cy.get(this.homePage.shopLink).click();
        this.dataFile.productName.forEach(function(element){
        cy.selectProductAndAdd(element);
          
    })  
   });

   it("Click on the checkout link", function(){
    cy.visit(Cypress.env("url"));
    cy.get(this.homePage.shopLink).click();
    
    this.dataFile.productName.forEach(function(element){
    cy.selectProductAndAdd(element);
    })
    
    cy.get(this.homePage.checkOutLink).click();
    var totalPrice = 0;
    var shoppingBagTotal = 0;

    cy.get(this.homePage.shoppingBag).each(function(shopEl, shopIndex, $shopList){
        var indShopPriceWoAmend = shopEl.text();
        var indPrice = indShopPriceWoAmend.substring(2,indShopPriceWoAmend.length) * 1;
        totalPrice = totalPrice + indPrice;
    })

    cy.get(this.homePage.shoppingBagTotal).then(function(bagTotal){
        shoppingBagTotal = bagTotal.text();
        shoppingBagTotal = shoppingBagTotal.substring(2,shoppingBagTotal.length) * 1;
        expect(totalPrice).to.be.equal(shoppingBagTotal);
    })
    cy.get(this.homePage.checkOutBttn).click();

    cy.get(this.homePage.deliveryCountry).type("India");

    cy.get(this.homePage.deliveryCountryList).each(function(cntry, cntryIndex, $cntryList){
        var countryText = cntry.text();
        cy.get(this.homePage.deliveryCountryList).click();
        
    })
    cy.get(this.homePage.delCheckboxBttn).click({force: true});
    cy.get(this.homePage.purchaseButton).click();

    });
})