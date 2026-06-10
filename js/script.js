document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simulación de envío exitoso (puedes conectar aquí tu API o servicio de email)
    if (feedback) {
      feedback.textContent = "¡Consulta recibida con éxito! Nos pondremos en contacto contigo en menos de 24 horas.";
      feedback.removeAttribute("hidden");
      
      // Estilo de éxito instantáneo
      feedback.style.display = "block"; 

      // Limpieza elegante del formulario
      form.reset();

      // Esconder el feedback después de 7 segundos de forma sutil
      setTimeout(() => {
        feedback.style.display = "none";
        feedback.setAttribute("hidden", "true");
      }, 7000);
    }
  });
});