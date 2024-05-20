describe('Ejemplo de prueba para leer un objeto JSON', () => {
  it('Debería leer y acceder a un objeto JSON', () => {
    // Cargar el archivo JSON usando cy.fixture()
    cy.fixture('dataIn.json').then((datos) => {
      // Acceder a las propiedades del objeto JSON
      //expect(datos).to.have.property('grupo1');
      //expect(datos).to.have.property('grupo2');

      // Acceder a los elementos dentro de "grupo1" y "grupo2"
      const ruta = datos.ruta;
      let grupo = [];
      if(ruta==="Testing/Automation/carpeta 1"){
        grupo = datos.grupo1;

      }else{
        grupo = datos.grupo2;

      }
      cy.log(grupo[0].nameMedia1),
      cy.log(grupo[0].nameMedia2),
      cy.log(grupo[0].nameMedia3),
      cy.log(grupo[0].nameMedia4),
      cy.log(grupo[0].nameMedia5)

      // Hacer aserciones o realizar acciones con los elementos
      //expect(grupo1).to.be.an('array').that.has.lengthOf(1);
      //expect(grupo2).to.be.an('array').that.has.lengthOf(1);

      // Acceder a los valores dentro de los objetos en "grupo1" y "grupo2"
      //expect(grupo1[0].nameMedia1).to.equal('Pandas 1.jpg');
      //expect(grupo2[0].nameMedia5).to.equal('Pandas 10.jpg');
    });
  });
});