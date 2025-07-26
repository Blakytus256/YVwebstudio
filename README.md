<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Tienda YV - Productos en Venta</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f4f6f8;
      margin: 0;
      padding: 20px;
      color: #2c3e50;
    }

    h1 {
      text-align: center;
      color: #2980b9;
    }

    .product-grid {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      margin-top: 30px;
    }

    .product-card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      padding: 20px;
      text-align: center;
    }

    .product-card img {
      max-width: 100%;
      height: 180px;
      object-fit: contain;
      border-radius: 10px;
    }

    .product-card h3 {
      margin: 10px 0;
    }

    .price {
      color: #e74c3c;
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    .btn {
      background-color: #27ae60;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1rem;
    }

    .btn:hover {
      background-color: #219150;
    }

    footer {
      text-align: center;
      margin-top: 40px;
      font-size: 0.9rem;
      color: #888;
    }
  </style>
</head>
<body>
  <h1>🛒 Bienvenido a Tienda YV</h1>
  <p style="text-align:center">Elige tu producto y compra directamente por WhatsApp</p>

  <div class="product-grid" id="productGrid">
    <!-- Aquí se generarán los productos con JS -->
  </div>

  <footer>
    © 2025 Yerson Vera - Sitio de ventas web
  </footer>

  <script>
    const productos = [
      {
        nombre: "Audífonos Bluetooth",
        precio: 89.90,
        imagen: "https://via.placeholder.com/250x180.png?text=Audífonos",
        descripcion: "Con cancelación de ruido y estuche cargador"
      },
      {
        nombre: "Mouse Gamer RGB",
        precio: 49.90,
        imagen: "https://via.placeholder.com/250x180.png?text=Mouse+Gamer",
        descripcion: "Sensor óptico de alta precisión"
      },
      {
        nombre: "Luz LED para Escritorio",
        precio: 29.90,
        imagen: "https://via.placeholder.com/250x180.png?text=Luz+LED",
        descripcion: "Luz blanca y cálida con regulador táctil"
      }
    ];

    const numeroWhatsApp = "51913161010"; // tu número con código de país (ej: Perú = 51)

    function generarProductos() {
      const contenedor = document.getElementById("productGrid");
      productos.forEach(prod => {
        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
          <img src="${prod.imagen}" alt="${prod.nombre}" />
          <h3>${prod.nombre}</h3>
          <p>${prod.descripcion}</p>
          <p class="price">S/ ${prod.precio.toFixed(2)}</p>
          <button class="btn" onclick="comprarProducto('${prod.nombre}', ${prod.precio})">Comprar</button>
        `;
        contenedor.appendChild(div);
      });
    }

    function comprarProducto(nombre, precio) {
      const mensaje = `Hola, estoy interesado en el producto: *${nombre}* por S/ ${precio.toFixed(2)}. ¿Está disponible?`;
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank");
    }

    generarProductos();
  </script>
</body>
</html>
