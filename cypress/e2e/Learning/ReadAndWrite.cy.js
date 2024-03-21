//En este learning se tiene el objetivo aprender sobre el proceso de escritura 
// y lectura de archivos .json
describe('Prueba de escritura y lectura de JSON', () => {
  it('Escribe datos en un archivo JSON y luego los lee', () => {
    const datos = {
      nombre: 'Nesstor',
      edad: 32,
      ciudad: 'VENEZUELA'
    };

    // Escribir en el archivo JSON
    cy.escribirJSON('C:/Cypress_project/cypress/data/datos.json', datos);

    // Leer el archivo JSON
    cy.readFile('C:/Cypress_project/cypress/data/datos.json').then(json => {
      // Buscar un atributo específico (por ejemplo, "nombre") y almacenarlo en una variable
      const nombre = json.nombre;
      const edad = json.edad;
      const ciudad = json.ciudad;
      cy.log(nombre) // Puedes hacer afirmaciones sobre el valor almacenado en la variable
      cy.log(edad) // Puedes hacer afirmaciones sobre el valor almacenado en la variable
      cy.log(ciudad) // Puedes hacer afirmaciones sobre el valor almacenado en la variable

    });
  });

  describe('Prueba de actualización de atributo en archivo JSON', () => {
    it('Actualiza un atributo específico en un archivo JSON', () => {
      // Leer el archivo JSON
      cy.readFile('C:/Cypress_project/cypress/data/datos.json').then(json => {
        // Modificar el atributo específico (por ejemplo, "edad")
        json.edad = 32; // Nueva edad
  
        // Escribir el archivo JSON actualizado
        cy.writeFile('C:/Cypress_project/cypress/data/datos.json', json);
  
        // Leer el archivo nuevamente para confirmar la actualización
        cy.readFile('C:/Cypress_project/cypress/data/datos.json').then(jsonActualizado => {
          // Comprobar que el atributo se ha actualizado correctamente
          expect(jsonActualizado.edad).to.equal(32);
        });
      });
    });
  });


  describe('Prueba de actualización de atributos en archivo JSON', () => {
    it('Actualiza 2 atributo específico en un archivo JSON', () => {
      // Leer el archivo JSON
      cy.readFile('C:/Cypress_project/cypress/data/datos.json').then(json => {
        // Modificar el atributo específico (por ejemplo, "edad")
        json.edad = 32; // Nueva edad
        json.ciudad = 'Barinas'; // Nueva ciudads
        // Escribir el archivo JSON actualizado
        cy.writeFile('C:/Cypress_project/cypress/data/datos.json', json);
  
        // Leer el archivo nuevamente para confirmar la actualización
        cy.readFile('C:/Cypress_project/cypress/data/datos.json').then(jsonActualizado => {
          // Comprobar que el atributo se ha actualizado correctamente
          expect(jsonActualizado.edad).to.equal(32);
          
        });

      });

      cy.readFile('C:/Cypress_project/cypress/data/datos.json').then(json => {
        // Buscar un atributo específico (por ejemplo, "nombre") y almacenarlo en una variable
        const nombre = json.nombre;
        const edad = json.edad;
        const ciudad = json.ciudad;
        cy.log(nombre) // Puedes hacer afirmaciones sobre el valor almacenado en la variable
        cy.log(edad) // Puedes hacer afirmaciones sobre el valor almacenado en la variable
        cy.log(ciudad) // Puedes hacer afirmaciones sobre el valor almacenado en la variable
  
    });
  });
});
});