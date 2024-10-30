//---------------------------------------------------------------------------------------------------------------------------
//PARA FORMULARIO DEL "iNICIAR SESIÓN"


//---------------------------------------------------------------------------------------------------------------------------
//PARA PONER UN MODAL A LAS CARD Y CAMBIAR LA IMAGEN AL SELECCIONAR UN COLOR
const detalleButtons = document.querySelectorAll('.ver-detalles');

detalleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const producto = button.parentElement;

        const nombre = producto.querySelector('h3').innerText;
        const precio = producto.querySelector('.precio').innerText;
        const imagen = producto.querySelector('img').src;

        // Actualizar el contenido del modal
        document.getElementById('modalProductName').innerText = nombre;
        document.getElementById('modalPrice').innerText = precio;
        document.getElementById('modalImage').src = imagen;

        // Establecer el select de colores
        const colorSelect = document.getElementById('colorSelect');
        colorSelect.innerHTML = ""; // Limpiar las opciones
        Object.keys(productos[nombre].imagenes).forEach(color => {
            const option = document.createElement('option');
            option.value = color;
            option.textContent = color;
            colorSelect.appendChild(option);
        });

        // Cambiar imagen según el color seleccionado
        colorSelect.addEventListener('change', () => {
            const selectedColor = colorSelect.value;
            document.getElementById('modalImage').src = productos[nombre].imagenes[selectedColor];
        });

        // Mostrar el modal
        const modal = new bootstrap.Modal(document.getElementById('detalleModal'));
        modal.show();
    });
});


const productos = {
    "Nombre del Producto 1": {
        precio: "$29.99",
        imagenes: {
            "Azul": "Imagenes/CamisetaArgentina.jpeg",
            "Rojo": "Imagenes/CamisetaSanMartin.jpg",
            "Verde": "Imagenes/CamisetaAtletico.jpg",
            "Negro": "Imagenes/CamisetaEjemplo.jpg",
        }
    },
    "Nombre del Producto 2": {
        precio: "$39.99",
        imagenes: {
            "Rojo": "Imagenes/Campera_Rojo.jpeg",
            "Azul": "Imagenes/Campera_Azul.jpeg",
            "Verde": "Imagenes/Campera_Verde.jpeg",
            "Negro": "Imagenes/Campera_Negro.jpeg",
        }
    },
    "Nombre del Producto 3": {
        precio: "$39.99",
        imagenes: {
            "Rojo": "Imagenes/Campera_Rojo.jpeg",
            "Azul": "Imagenes/Campera_Azul.jpeg",
            "Verde": "Imagenes/Campera_Verde.jpeg",
            "Negro": "Imagenes/Campera_Negro.jpeg",
        }
    },
    "Nombre del Producto 4": {
        precio: "$39.99",
        imagenes: {
            "Rojo": "Imagenes/Campera_Rojo.jpeg",
            "Azul": "Imagenes/Campera_Azul.jpeg",
            "Verde": "Imagenes/Campera_Verde.jpeg",
            "Negro": "Imagenes/Campera_Negro.jpeg",
        }
    },
    // Agrega más productos según sea necesario
};


//---------------------------------------------------------------------------------------------------------------------------

//PARA LA GALERIA DE IMAGENES
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModalGaleria');
    const modalImage = document.getElementById('modalGaleriaImage');
    const caption = document.getElementById('captionGaleria');
    const closeButton = document.querySelector('.closeGaleria');

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', (e) => {
            modal.style.display = 'flex';
            modalImage.src = e.target.src;
            caption.innerText = e.target.alt;
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

//---------------------------------------------------------------------------------------------------------------------------

//SECCION DE SELECCCION GALERIA DE PRODUCTOS
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.img-fluid');
    let maxHeight = 0;

    // Encuentra la altura máxima entre todas las imágenes
    images.forEach(img => {
        const height = img.clientHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    // Ajusta todas las imágenes a la altura máxima
    images.forEach(img => {
        img.style.height = maxHeight + 'px';
    });
});