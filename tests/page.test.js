// Importamos Puppeteer para controlar Chrome 🚀
const puppeteer = require('puppeteer');

// Describe define un grupo de pruebas relacionadas
describe('Pruebas para página web Hola Mundo 🌎', () => {
  let browser;
  let page;

  // Antes de todas las pruebas, lanzamos Puppeteer
  beforeAll(async () => {
    // Inicia Chrome en modo headless (sin interfaz gráfica)
    browser = await puppeteer.launch({
      headless: true, 
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    // Crea una nueva pestaña
    page = await browser.newPage();

    // Visita la URL local
    await page.goto('http://localhost:8080');
  });

  // Al final, cerramos el navegador para liberar recursos
  afterAll(async () => {
    await browser.close();
  });

  // Test 1: verificar que el título de la página sea correcto
  test('El título debe ser "Hola Mundo 🌎"', async () => {
    const titulo = await page.title();
    expect(titulo).toBe('Hola Mundo 🌎');
  });

  // Test 2: verificar que el contenido del h1 es correcto
  test('La página debe contener un h1 que diga "¡Hola Mundo!"', async () => {
    const h1 = await page.$eval('h1', el => el.textContent);
    expect(h1).toBe('¡Hola Mundo!');
  });
});
