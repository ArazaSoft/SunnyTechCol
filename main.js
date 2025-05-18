
document.getElementById('webForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const formData = new FormData(this);
  const data = {};

  data.nombre = formData.get('nombre');

  data.tramites = formData.getAll('tramites');
  data.fotovoltaicos = formData.getAll('fotovoltaicos');
  data.termicos = formData.getAll('termicos');

  let mensaje = `Hola, soy ${data.nombre}.%0A`;

  const intereses = [];
  if (data.tramites.length) intereses.push(`Trámites: ${data.tramites.join(', ')}`);
  if (data.fotovoltaicos.length) intereses.push(`Fotovoltaicos: ${data.fotovoltaicos.join(', ')}`);
  if (data.termicos.length) intereses.push(`Térmicos: ${data.termicos.join(', ')}`);

  if (intereses.length) {
    mensaje += `Estoy interesado en:%0A- ${intereses.join('%0A- ')}`;
  }

  const telefonoDestino = '573057624646'; 

  // Redirige a WhatsApp
  const url = `https://api.whatsapp.com/send?phone=${telefonoDestino}&text=${mensaje}`;
  window.location.href = url;
});
