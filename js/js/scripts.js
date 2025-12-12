window.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('mainNav');
    let scrollPos = window.pageYOffset;

    // Añade las clases iniciales
    if (scrollPos === 0) {
        mainNav.classList.add('is-visible', 'is-fixed');
    }

    window.addEventListener('scroll', function() {
        let currentTop = window.pageYOffset;
        if (scrollPos < currentTop) {
            // Scrolling Down
     
            mainNav.classList.remove('is-visible');
        } else if (scrollPos > currentTop) {
            // Scrolling Up
            mainNav.classList.add('is-visible', 'is-fixed');
            if (currentTop === 0) {
                mainNav.classList.add('is-visible', 'is-fixed');
            }
        }
        scrollPos = currentTop;
    });
});


var imagenes = [
    "assets/img/Limpieza\ Industrial.jpg",
    "assets/img/imagen-2.jpg",
    "assets/img/imagen-3.jpg",
  ];
  var indice = 0;
  var tiempo = 5000; // Tiempo en milisegundos
  
  function cambiarFondo() {
    indice = (indice + 1) % imagenes.length; // Incrementar el índice y volver al inicio si se llega al final
    var url = imagenes[indice]; // Obtener la URL de la imagen actual
    document.querySelector(".masthead").style.backgroundImage = "url('" + url + "')"; // Cambiar el fondo del header
  }
  
  setInterval(cambiarFondo, tiempo); // Llamar a la función cada cierto tiempo
  

  function showDropdown() {
        // Abrir el menú desplegable al pasar el ratón sobre "Servicios"
        document.getElementById("navbarDropdown").classList.add("show");
    }


    // Add this JavaScript to your existing script file or create a new one

// Function to open the modal and display the clicked image
function openModal(imgSrc) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("expandedImage");
    modal.style.display = "block";
    modalImg.src = imgSrc;

    // Close the modal when clicking outside of the image
    modal.onclick = function() {
        closeModal();
    };

    // Close the modal when pressing the "Esc" key
    window.onkeydown = function(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    };
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";

    // Reset click and keydown event listeners
    modal.onclick = null;
    window.onkeydown = null;
}

// Attach click event listeners to each image
var images = document.querySelectorAll('.col-md-6 img.img-fluid');
images.forEach(function(image) {
    image.addEventListener('click', function() {
        openModal(this.src);
    });
});
