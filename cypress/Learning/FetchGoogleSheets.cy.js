//Este learning tiene el objetivo 


//
describe('Describe TPL', () => {
  
     

    it("ADD", async () => {
    
            fetch('https://sheet.best/api/sheets/b84f208f-616d-46bc-a1e8-43baa2bc8789',{
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    User: "NewUser",
                    Password:"NewPassword",
                })
        
        
            })
        
    }) 
    it("UPDATE", async () => {

        fetch('https://sheet.best/api/sheets/b84f208f-616d-46bc-a1e8-43baa2bc8789/1',{
            method: 'PATCH',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                User: "tester",
                Password:"XXXXX",
            })
    
    
        })
    
    })

    it("READ", async () => {
    
        fetch('https://sheet.best/api/sheets/b84f208f-616d-46bc-a1e8-43baa2bc8789')
            .then((response) => response.json())
            .then((data) => {
                console.log(data[0].User);
            })
            .catch((error) => {
                console.error(error);
            });
        
        
     })

});