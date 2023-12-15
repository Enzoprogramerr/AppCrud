# Título del Proyecto

appCrud es una aplicación utilizando NodeJS, express y mysq(base de datos), con dos tablas de registros,con la posibilidad de listar, agregar, modificar y borrar registros de tipo Oficina y Personay también realizar búsquedas de personas y oficinas.

### Pre-requisitos 📋

Qué cosas necesitas para instalar el software y cómo instalarlas:

. Javascript.
. NodeJS.
. Express
. Mysql
. Git para clonar el proyecto.
. (Opcional) Entorno virtual para Python como venv.

# En sistemas basados en Debian/Ubuntu

Para instalar Python y pip:
sudo apt-get install python3 python3-pip

### Instalación 🔧

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu computadora local para propósitos de desarrollo y pruebas:

1. Clona el repositorio:

git clone https://github.com/proger2/aplicacion-CRUD.git

2. Navega al directorio del proyecto:

cd appCrud

3. Desplegarlo en docker:
docker-compose up -d


4. ¡Ya esta listo para usar!


### Funcionalidades: 🔩

1- Registro de oficina: Esta accion se realiza en la ruta "/agregarOf" nos brindará un espacio para agregar nombre de la oficina, y automaticamente se brindará un número identificador de oficina que luego lo utilizaremos en el momento de agregar una persona.

2- Registro de persona: Se comienza la accion en la ruta "/agregar" donde nos brinda tres espacios que permiten agregar nombre y apellido, email, id oficina. Luego se presiona el boton agregar.

3- Listado de personas: El listado de personas se ubica en la ruta "/personas" del localhost aquí obtendremos todos los nombres de personas que previamente agregamos.

4- Listado de oficinas: En la ruta "/oficinas" del localhost:300 obtendremos el listado de todas las oficinas que tengas cargado en la base de datos.

5- Modificacion de datos y borrado: La modificación de datos la obtenemos en el botón que se ubica en la parte derecha de cada persona con el nombre "EDITAR", al presionar el boton te llevara a la ruta correspondiente mostrándote el espacio con el dato del registro para que lo modifiques a tu gusto, luego presionas "update" y listo. Y la eliminacion del registro la obtenemos en el botón "BORRAR"una vez presionado dicho registro será eliminado.


## Despliegue 📦

Para desplegar este proyecto en un entorno de producción, sigue los siguientes pasos:

Configuración del Entorno:

Asegúrate de que el entorno de producción tiene Javascript, node , express y mysql instalado y configurado.
Si tu aplicación depende  servicios externos, asegúrate de que estén accesibles desde el entorno de producción.
Clonar el Repositorio:

Clona el repositorio en el entorno de producción: git clone https://github.com/proger2/aplicacion-CRUD.git

## Construido con 🛠️

. Javascript - Lenguaje de programacion principal.
. NodeJS - Node.js es un entorno de tiempo de ejecución multiplataforma para la capa del servidor basado en JavaScript.
.Express - Express es un marco de aplicación web minimalista, flexible y rápido para Node.js, ofrece características fundamentales de aplicaciones web.
. Mysql - MySQL es un sistema de administración de bases de datos relacionales de código abierto desarrollado por Oracle.
. Git - Sistema de control de versiones.
. Docker - Docker es una plataforma de software que ayuda a los desarrolladores a construir, compartir y ejecutar aplicaciones en cualquier lugar con imágenes y contenedores de Docker.


## Versionado 📌

Para todas las versiones disponibles, los tags del repositorio son los siguientes: https://github.com/proger2/aplicacion-CRUD/tags . 

El versionado se realiza a través de Git.

## Autor- contacto. ✒️

- **Enzo Medina** - _Desarrollador_ - [EnzoMedina] [https://github.com/proger2]

## Licencia 📄

Este proyecto está bajo la Creative Commons Atribución- CompartirIgual(CC BY-SA) - mira el archivo LICENSE.md para detalles.

## Expresiones de Gratitud 🎁

Me gustaría expresar mi agradecimiento a:
. Luis Romano por su orientación y valiosos consejos a lo largo del desarollo de este proyecto y de la cursada de la materia "Práctica" de la carrera de Desarrollo de Software del Instituto Técnico Superior Córdoba.
. Nuestros compañeros/as de curso por sus feedbacks.

## Este proyecto no sería posible sin su ayuda y apoyo. 🙌