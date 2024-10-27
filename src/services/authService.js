export const authService = {
  login: (email, password) => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        const user = users.find(u => u.email === email);
        const validPassword = "contrasena123"; // Cambiar a un sistema de autenticación real en el futuro

        if (user && password === validPassword) {
          console.log('login exitoso');
          return { success: true, email: user.email, name: user.name };
        } else {
          return { success: false, message: 'email o contraseña incorrecta' };
        }
      })
      .catch(error => {
        console.error('error en la autenticacion:', error.message);
        return { success: false, message: error.message };
      });
  }
};