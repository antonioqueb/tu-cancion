'use client';
import React, { useState, useEffect } from 'react';

const PaymentForm = () => {
  const [routerReady, setRouterReady] = useState(false);
  const [email, setEmail] = useState('');
  const [cardToken, setCardToken] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRouterReady(true);
      if (window.MercadoPago) {
        const mp = new window.MercadoPago('PUBLIC_KEY', { locale: 'es-MX' });
        setLoaded(true);
      }
    }
  }, []);

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!routerReady) return; // Asegúrate de que el router esté listo
    const paymentData = {
      transactionAmount: 1038,
      token: cardToken,
      description: "Canción personalizada",
      installments: 1,
      paymentMethodId: "visa",
      email: email,
    };

    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      const data = await response.json();
      if (data.status === "approved") {
        console.log('Pago aprobado:', data);
      } else {
        setPaymentStatus(`Pago no aprobado: ${data.status_detail}`);
      }
    } catch (error) {
      setPaymentStatus('Error al procesar el pago. Por favor intenta de nuevo.');
    }
  };

  const handleTokenCreation = (event) => {
    event.preventDefault();
    if (!loaded) return; // Asegúrate de que MercadoPago está cargado
    const mp = new window.MercadoPago('PUBLIC_KEY', {
      locale: 'es-MX'
    });

    const cardData = {
      cardNumber: document.getElementById('cardNumber').value,
      cardExpirationMonth: document.getElementById('cardExpirationMonth').value,
      cardExpirationYear: document.getElementById('cardExpirationYear').value,
      securityCode: document.getElementById('securityCode').value,
      cardholderName: document.getElementById('cardholderName').value,
    };

    mp.createCardToken(cardData).then(function (response) {
      setCardToken(response.id);
    }).catch(function (error) {
      console.error('Error creating token:', error);
    });
  };

  return (
    <div className="max-w-md mx-auto my-10 p-5 border rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Compra tu canción personalizada</h1>
      <form onSubmit={handlePayment} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="cardNumber" className="block text-gray-700">Número de tarjeta:</label>
          <input type="text" id="cardNumber" required className="mt-1 block w-full p-2 border border-gray-300 rounded"/>
        </div>
        <div>
          <label htmlFor="cardholderName" className="block text-gray-700">Nombre del titular:</label>
          <input type="text" id="cardholderName" required className="mt-1 block w-full p-2 border border-gray-300 rounded"/>
        </div>
        <div>
          <label htmlFor="cardExpirationMonth" className="block text-gray-700">Mes de vencimiento:</label>
          <input type="text" id="cardExpirationMonth" required className="mt-1 block w-full p-2 border border-gray-300 rounded"/>
        </div>
        <div>
          <label htmlFor="cardExpirationYear" className="block text-gray-700">Año de vencimiento:</label>
          <input type="text" id="cardExpirationYear" required className="mt-1 block w-full p-2 border border-gray-300 rounded"/>
        </div>
        <div>
          <label htmlFor="securityCode" className="block text-gray-700">CVC:</label>
          <input type="text" id="securityCode" required className="mt-1 block w-full p-2 border border-gray-300 rounded"/>
        </div>
        <button type="button" onClick={handleTokenCreation} className="text-white bg-red-600 hover:bg-red-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Generar Token de Tarjeta
        </button>
        <button type="submit" className="text-white bg-red-600 hover:bg-red-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Pagar 1038 MXN
        </button>
      </form>
      {paymentStatus && <p className="text-red-600">{paymentStatus}</p>}
    </div>
  );
};

export default PaymentForm;
