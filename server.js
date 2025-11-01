const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Middleware para servir los archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Middleware para permitir JSON
app.use(express.json());

// Ruta principal (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta que tu script.js consulta
app.get('/professional', (req, res) => {
  const data = {
    professionalName: "Benjamin Velázquez",
    base64Image: "", // puedes dejarlo vacío o poner una imagen convertida a Base64
    nameLink: { firstName: "Benjamin", url: "https://www.linkedin.com/in/Benjamin" },
    primaryDescription: "Frontend Developer & Educator passionate about creating meaningful interfaces.",
    workDescription1: "Experienced with HTML, CSS, JavaScript, Node.js, and MongoDB.",
    workDescription2: "Currently exploring backend architecture with Express and APIs.",
    linkTitleText: "Connect with me:",
    linkedInLink: { text: "LinkedIn", link: "https://www.linkedin.com/in/Benjamin" },
    githubLink: { text: "GitHub", link: "https://github.com/Benjaminvelazquez" }
  };

  res.json(data);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
