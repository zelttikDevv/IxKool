// Bloqueo de menú contextual (Click derecho)
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

// Bloqueo de teclas de inspección (F12, Ctrl+Shift+I, etc.)
document.onkeydown = function(e) {
    const isInspectKey = 
        e.keyCode == 123 || 
        (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 67 || e.keyCode == 74)) || 
        (e.ctrlKey && e.keyCode == 85);

    if (isInspectKey) {
        return false;
    }
};

// Puedes agregar aquí más funciones personalizadas en el futuro
console.log("Ix-Kool Site Ready");
