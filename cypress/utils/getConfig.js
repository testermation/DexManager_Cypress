export default async function getConfig() {
    try {
      const response = await fetch('https://sheet.best/api/sheets/b84f208f-616d-46bc-a1e8-43baa2bc8789');
      if (!response.ok) {
        throw new Error('Error al realizar la solicitud');
      }
      const data = await response.json();
      console.log(data[0]);
      return data[0];
    } catch (error) {
        console.error(error);
        return null;
    }
}