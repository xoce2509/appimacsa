import { ejecutarSQL } from '../js/db.js'; // Ajusta la ruta si es necesario

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.formuser');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const u_name = document.getElementById('u_name').value.trim();
    const u_lastname = document.getElementById('u_lastname').value.trim();
    const u_login = document.getElementById('u_login').value.trim();
    const u_password = document.getElementById('u_password').value.trim();

    if (!u_name || !u_lastname || !u_login || !u_password) {
      alert('⚠️ Todos los campos son obligatorios.');
      return;
    }

    const sql = `
      INSERT INTO users (u_name, u_lastname, u_login, u_password)
      VALUES (?, ?, ?, ?)
    `;

    try {
      await ejecutarSQL(sql, [u_name, u_lastname, u_login, u_password]);
      alert('✅ Usuario agregado correctamente.');
      form.reset();
    } catch (error) {
      console.error('Error al insertar usuario:', error);
      alert('❌ No se pudo guardar el usuario. Verifica si el login ya existe.');
    }
  });
});
