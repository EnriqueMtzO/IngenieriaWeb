const inputBusqueda = document.getElementById('inputBusqueda');
        const tarjetas = document.querySelectorAll('.tarjeta');
        const mensajeNoEncontrado = document.getElementById('noEncontrado');

        inputBusqueda.addEventListener('input', (e) => {
            const textoBusqueda = e.target.value.toLowerCase().trim();
            let matches = 0;

            tarjetas.forEach(tarjeta => {
                const nombre = tarjeta.getAttribute('data-nombre').toLowerCase();
                
                if (nombre.includes(textoBusqueda)) {
                    tarjeta.style.display = 'flex';
                    matches++;
                } else {
                    tarjeta.style.display = 'none';
                }
            });

            // mensaje no encontrado
            if (matches === 0) {
                mensajeNoEncontrado.style.display = 'block';
            } else {
                mensajeNoEncontrado.style.display = 'none';
            }
        });