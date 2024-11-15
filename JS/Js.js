/*Creamos una clase Alumno*/

class Alumno {
    constructor(dni, nombre, notaMedia) {
        this.dni = dni;
        this.nombre = nombre;
        this.notaMedia = notaMedia;
    }

    /*Desarrollamos un método para actualizar la nota media*/

    setNotaMedia(nuevaNota) {
        this.notaMedia = nuevaNota;
    }

    /*Desarrollamos un método para mostrar los datos del alumno*/

    getDetalles() {
        return `DNI: ${this.dni}, Nombre: ${this.nombre}, Nota Media: ${this.notaMedia}`;
    }
}

/*Creamos una clase para el CIFP*/

class CIFP {
    constructor(nombre, localidad, email, numeroAulas, numeroAlumnos) {
        this.nombre = nombre;
        this.localidad = localidad;
        this.email = email;
        this.numeroAulas = numeroAulas;
        this.numeroAlumnos = numeroAlumnos;
        this.alumnos = []; // Lista de alumnos
    }

    /*Desarrollamos un método para agregar un alumno*/
    agregarAlumno(alumno) {
        if (this.alumnos.length < this.numeroAlumnos) {
            this.alumnos.push(alumno);
        } else {
            alert("¡ERROR! No se pueden agregar más alumnos. Capacidad máxima alcanzada.");
        }
    }
/*Desarrollamos un método para obtener los detalles del CIFP*/

    getDetalles() {
        return `Nombre: ${this.nombre}, Localidad: ${this.localidad}, Email: ${this.email}, Aulas: ${this.numeroAulas}, Alumnos registrados: ${this.alumnos.length}`;
    }
}

/* Declaramos las variables globales*/

let cifp = null;

// Manejamos botón "Crear CIFP"

document.getElementById("crear-cifp").addEventListener("click", () => {
    const nombre = document.getElementById("cifp-nombre").value;
    const localidad = document.getElementById("cifp-localidad").value;
    const email = document.getElementById("cifp-email").value;
    const numeroAulas = parseInt(document.getElementById("cifp-aulas").value);
    const numeroAlumnos = parseInt(document.getElementById("cifp-alumnos").value);

    if (!nombre || !localidad || !email || isNaN(numeroAulas) || isNaN(numeroAlumnos)) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }

    cifp = new CIFP(nombre, localidad, email, numeroAulas, numeroAlumnos);
    document.getElementById("cifp-detalles").textContent = cifp.getDetalles();
    document.getElementById("lista-alumnos").textContent = "No hay alumnos registrados.";
});

// Manejamos botón "Agregar Alumno"
document.getElementById("agregar-alumno").addEventListener("click", () => {
    if (!cifp) {
        alert("Primero debes crear un CIFP.");
        return;
    }

    const dni = document.getElementById("alumno-dni").value;
    const nombre = document.getElementById("alumno-nombre").value;
    const notaMedia = parseFloat(document.getElementById("alumno-nota").value);

    if (!dni || !nombre || isNaN(notaMedia)) {
        alert("Por favor, completa todos los campos del alumno correctamente.");
        return;
    }

    const nuevoAlumno = new Alumno(dni, nombre, notaMedia);
    cifp.agregarAlumno(nuevoAlumno);

    // Mostramos la lista de alumnos
    const lista = cifp.alumnos.map((alumno) => alumno.getDetalles()).join("\n");
    document.getElementById("lista-alumnos").textContent = lista;
});