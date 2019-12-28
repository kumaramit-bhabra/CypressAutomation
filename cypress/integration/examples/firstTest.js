/// <reference types="Cypress" />
describe("First test case is Cypress", ()=>{
    it("First Test case",()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        const searchBox = cy.get("input.search-keyword");
        searchBox.type("ca");
        cy.wait(2000);
        //cy.get("div.products").find("div.product").eq(2).contains("ADD TO CART").click();

        cy.get('div.products').find("div.product").as('productLocator');

        cy.get('@productLocator').then(($prdList) =>{
            cy.log($prdList.length);
            if($prdList.length > 0)
            {
                cy.get($prdList.eq(2)).contains("ADD TO CART").click();
            }
        });

        // cy.get("div.products").find("div.product").eq(2).find('.product-name').then(function(textCall){
        // cy.log(textCall.text());
        // });

        cy.get('@productLocator').eq(2).find('.product-name');
        
        cy.get('@productLocator').each(($el, index, $list) => {
            
            const text = $el.find('.product-name').text();
            cy.log(text);

            if(text.includes('Cashew'))
            {
                cy.log(text);
                $el.find('button[type="button"]').click();
            }
        })
        
    });

    it("get the Title of the page", function(){
        cy.get('.brand.greenLogo').then(function(title){
        const logoTitle = title.text();
        console.log(logoTitle);
        expect(logoTitle).to.be.equal("GREENKART");
        cy.get('.brand.greenLogo').should('have.text','GREENKART');
        cy.log(logoTitle);
        })
    })
})