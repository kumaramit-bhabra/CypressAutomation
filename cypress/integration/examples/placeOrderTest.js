/// <reference types="Cypress" />

describe("Place Order", ()=>{
    it("Place Order by selecting couple of products", ()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get("input.search-keyword").type("ca");
        cy.wait(2000);

        //select couple of products
        cy.get('div.products').find("div.product").each((el, index, $list)=>{
            const vegName = el.find(".product-name").text();
            cy.log(vegName);
            if(vegName.includes('Cauliflower'))
            {
                //This is to change the value with in a text box
                //cy.log(el.find(".quantity").val(2));
                
                el.find("div.stepper-input").find(".increment")[0].click();
                el.find('button[type="button"]').click(); 
            }   
        })
        cy.get("img[src ='./images/bag.png']").click();
        cy.contains("PROCEED TO CHECKOUT").click();
    })
})