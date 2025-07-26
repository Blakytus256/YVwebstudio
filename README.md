<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Tienda YV</title>
  <style>
    body { font-family: sans-serif; background: #f5f6fa; margin: 0; padding: 20px; }
    h1 { text-align: center; color: #2c3e50; }
    .grid { display: grid; gap: 20px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); margin-top: 30px; }
    .card { background: white; border-radius: 10px; padding: 15px; text-align: center; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
    .card img { max-width: 100%; height: 150px; object-fit: contain; border-radius: 8px; }
    .price { color: #e74c3c; font-weight: bold; margin: 10px 0; }
    button { background: #27ae60; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; }
    button:hover { background: #219150; }
  </style>
</head>
<body>

  <h1>🛍️ Tienda YV</h1>
  <div class="grid" id="productos"></div>

  <script>
    const productos = [
      { nombre: "Audífonos Bluetooth", precio: 89.9, img: "https://via.placeholder.com/250x180.png?text=Audífonos" },
      { nombre: "Mouse Gamer RGB", precio: 49.9, img: "https://via.placeholder.com/250x180.png?text=Mouse+Gamer" },
      { nombre: "Luz LED Escritorio", precio: 29.9, img: "https://via.placeholder.com/250x180.png?text=Luz+LED" }
    ];
    const wa = "51913161010";
    const cont = document.getElementById("productos");

    productos.forEach(p => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <img src="${p.img}" alt="${p.nombre}" />
        <h3>${p.nombre}</h3>
        <p class="price">S/ ${p.precio.toFixed(2)}</p>
        <button onclick="location.href='https://wa.me/${wa}?text=${encodeURIComponent('Hola, quiero comprar: ' + p.nombre + ' por S/ ' + p.precio)}'">Comprar</button>
      `;
      cont.appendChild(div);
    });
  </script>

</body>
</html>
