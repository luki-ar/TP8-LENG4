import React from 'react';
import { pageStyle } from './Inicio';

export default function Acerca() {
  return (
    <div style={pageStyle}>
      <div style={{ maxWidth: '600px', textAlign: 'center', padding: '0 20px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', letterSpacing: '-1px', marginBottom: '15px', color: '#ffffff' }}>
          Acerca de
        </h1>
        <p style={{ color: '#888888', fontSize: '1.05rem', lineHeight: '1.6' }}>
          Acerca de Lenguajes IV.<br/>
            Mas información próximamente...
        </p>
      </div>
    </div>
  );
}