import { useUTM } from '../hooks/useUTM';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { plans } from '../utils/plans';

export default function CheckoutPage() {
  const { getUTMs, getUTMString } = useUTM();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  // Captures the selected plan from the URL
  const selectedPlanId = searchParams.get('plan') || 'premium';
  const selectedPlan = plans[selectedPlanId] || plans.premium;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulates payment processing  
    setTimeout(() => {
      // Saves the selected plan in localStorage  
      localStorage.setItem('selectedPlan', JSON.stringify(selectedPlan));
      
      // Redirects to the thank-you page WITH UTMs
      navigate(`/obrigado${getUTMString()}`);
    }, 2000);
  };

  const utms = getUTMs();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Finalizar Compra</h1>
          <p className="text-gray-600">Você está a um passo da transformação!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Dados Pessoais</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome Completo</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="João Silva"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="joao@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Telefone</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">CPF</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="000.000.000-00"
                />
              </div>

              <hr className="my-6" />

              <h3 className="text-xl font-bold mb-4">Dados do Cartão</h3>

              <div>
                <label className="block text-sm font-medium mb-2">Número do Cartão</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="0000 0000 0000 0000"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Validade</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="MM/AA"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">CVV</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="123"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed mt-6"
              >
                {loading ? 'Processando...' : 'Finalizar Compra'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h2 className="text-2xl font-bold mb-6">Resumo do Pedido</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <h3 className="font-bold">{selectedPlan.name}</h3>
                    <p className="text-sm text-gray-600">{selectedPlan.description}</p>
                  </div>
                  <p className="font-bold text-lg">R$ {selectedPlan.price.toFixed(2)}</p>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>R$ {selectedPlan.price.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Desconto</span>
                  <span className="text-green-600">- R$ 0,00</span>
                </div>

                <hr />

                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total</span>
                  <span className="text-purple-600">R$ {selectedPlan.price.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Info UTMs */}
            {Object.keys(utms).length > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-sm font-bold mb-2 text-blue-900">🔍 UTMs Capturados:</h3>
                <div className="text-xs space-y-1">
                  {Object.entries(utms).map(([key, value]) => (
                    <div key={key} className="flex">
                      <span className="font-mono text-blue-700">{key}:</span>
                      <span className="ml-2 text-blue-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Security Seals */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-3">Compra 100% segura</p>
              <div className="flex justify-center space-x-4">
                <div className="bg-gray-200 px-4 py-2 rounded text-xs font-semibold">🔒 SSL</div>
                <div className="bg-gray-200 px-4 py-2 rounded text-xs font-semibold">💳 PCI</div>
                <div className="bg-gray-200 px-4 py-2 rounded text-xs font-semibold">✓ Verificado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}