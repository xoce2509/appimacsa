document.addEventListener('DOMContentLoaded', async () => {
    // Función para agregar un registro
    window.addRegistry = async function(formId, table, field) {
      const form = document.getElementById(formId);
      const formData = new FormData(form);
      const value = formData.get(field);
      
      if (value.trim() === "") {
        alert("El campo no puede estar vacío.");
        return;
      }
  
      try {
        const query = `INSERT INTO ${table} (${field}) VALUES (?)`;
        await window.api.insertarDatosMySQL(query, [value]);
        alert("Registro agregado con éxito.");
        form.reset();
      } catch (error) {
        console.error('Error al agregar registro:', error);
        alert("Error al agregar registro.");
      }
    };
  
    // Función para eliminar un registro
    window.deleteRegistry = async function(formId, table, field) {
      const form = document.getElementById(formId);
      const formData = new FormData(form);
      const value = formData.get(field);
      
      if (value.trim() === "") {
        alert("El campo no puede estar vacío.");
        return;
      }
  
      try {
        const query = `DELETE FROM ${table} WHERE ${field} = ?`;
        await window.api.insertarDatosMySQL(query, [value]); // Reutilizando la función para ejecutar querys
        alert("Registro eliminado con éxito.");
        form.reset();
      } catch (error) {
        console.error('Error al eliminar registro:', error);
        alert("Error al eliminar registro.");
      }
    };
  });
  