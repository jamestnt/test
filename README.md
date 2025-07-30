Pokémon Store
Este es un proyecto de Gatsby que muestra una lista 2 Pokémones a la venta en un grid responsive de 4 columnas, con un input de búsqueda sticky, efectos hover en los precios, y eventos onClick en las tarjetas. Utiliza Tailwind CSS para los estilos y Docker para un entorno de desarrollo consistente.
Características

Grid responsive: 1 columna en móviles, 2 en pantallas pequeñas, 3 en medianas, 4 en grandes.

Requisitos

Node.js (versión 16 o superior, si no usas Docker)
Docker y Docker Compose (para entorno con contenedores)
Git (para clonar el repositorio)

Instalación y ejecución con Docker

Clona el repositorio:
git clone [<https://github.com/jamestnt/test.git>](https://github.com/jamestnt/test.git)
cd test

Construye y ejecuta el contenedor:
docker-compose up --build (solo priera vez)

Accede al sitio:

Abre http://localhost:8000 para ver el sitio.
Abre http://localhost:8000/\_\_\_graphql para probar consultas GraphQL.

Detén el contenedor:

Presiona Ctrl+C o ejecuta:docker-compose down

para levantar el proyecto sin contruir el contenedor nuevamente.
docker-compose up
