///<reference types = "Cypress"/>

describe("How we can interact with Web Elements", ()=>{
    it("Validate the checkboxes", ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#checkBoxOption1").check();
        cy.get("#checkBoxOption1").should('be.checked');

        cy.get("#checkBoxOption1").invoke('val');
        cy.get("#checkBoxOption1").uncheck(['option1']);
        cy.get("[type='checkbox']").check();
        cy.get("[type='checkbox']").uncheck(['option1','option2']);
        cy.get("#checkBoxOption1").should('not.be.checked');
        cy.get("#checkBoxOption2").should('not.be.checked');
    });

    it("Validate the static Select drop down",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#dropdown-class-example").select("option3");
        cy.wait(2000);
        cy.get("#dropdown-class-example").should('have.value','option3');

    })

    it("Validate the dynamic select drop down",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#autocomplete").type("In");
        cy.wait(2000);
        cy.get(".ui-menu-item div").each(function(el,index,$list){
            const nation = el.text();
    
            if(nation === 'India')
            el.click();
    
        })
        cy.get("#autocomplete").should('have.value','India');
    });

    it("Handling visible and Invisible element", ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("[name = 'show-hide']").should('be.visible');
        cy.get("#hide-textbox").click()
        cy.get("[name = 'show-hide']").should('not.be.visible');
        cy.get("#show-textbox").click();
        cy.get("[name = 'show-hide']").should('be.visible');

        cy.get("[value= 'radio2']").check();
        cy.get("[value= 'radio3']").click();
        cy.get("[value= 'radio3']").should('be.checked');
    });

    it("Hanlde Alerts window", ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("[placeholder = 'Enter Your Name']");
        cy.get("#alertbtn").click();
        cy.get("[value='Confirm']").click();
        cy.on('window:alert',(str)=>{
            console.log(str);
            expect(str).to.be.equal("Hello , share this practice page and share your knowledge");
        })
        cy.on("window:confirm",(confirmStr)=>{
            console.log(confirmStr);
            expect(confirmStr).to.be.equal("Hello , Are you sure you want to confirm?");
        })

    });

    it("Handling Child windows", ()=>{
        cy.visit("http://qaclickacademy.com/practice.php/");
        cy.get("#opentab").invoke('removeAttr','target').click();
        cy.url().should('include',"http://www.qaclickacademy.com/");
        cy.go("back");
    });

    it("Handling Web Table",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        cy.get("table#product").find("tr").find("td").each((el,index,$list)=>{
            var text = el.text();

            if(text === 'WebSecurity Testing for Beginners-QA knowledge to next level')
            {
                const priceRet = el.next("td").text();
                expect(priceRet).to.be.equal('20');
            }

        })
    });

    it.only("Handling Child tab w/o removeAttr", ()=>{
        cy.visit("http://qaclickacademy.com/practice.php/");
        //  cy.get("#opentab").then(function(el){
        //      var url = el.prop("href");
        //      cy.log(url);
        //      cy.visit(url);
        //  });
        cy.get("#opentab").invoke('removeAttr','target').click()
        
    })


    

})