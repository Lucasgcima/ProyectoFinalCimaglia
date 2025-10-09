import React, { useState } from 'react';

const ReservaForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    fecha: '',
    cantidad: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reserva enviada: ${JSON.stringify(formData)}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h3>Formulario de Reserva</h3>
      <label>
        Nombre:
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Fecha:
        <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Cantidad de personas:
        <input type="number" name="cantidad" min="1" value={formData.cantidad} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Reservar</button>
    </form>
  );
};

export default ReservaForm;
