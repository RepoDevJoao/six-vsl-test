import { useUTM } from '../hooks/useUTM';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { plans } from '../utils/plans';

export default function ThankYouPage() {
  const { getUTMs } = useUTM();
  const [utms, setUtms] = useState({});
  const [orderId] = useState(() => `VSL-${Math.random().toString(36).substr(2, 6).toUpperCase()}`);
  const [selectedPlan, setSelectedPlan] = useState(plans.premium);

  useEffect(() => {
    setUtms(getUTMs());
    
    const savedPlan = localStorage.getItem('selectedPlan');
    if (savedPlan) {
      setSelectedPlan(JSON.parse(savedPlan));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Compra Realizada com Sucesso! 🎉
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Parabéns! Sua jornada de transformação começa agora.
          </p>

          {/* Information */}
          <div className="bg-purple-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="font-bold text-lg mb-4 text-center">📧 Próximos Passos</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">1.</span>
                <span>Você receberá um email de confirmação em instantes</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">2.</span>
                <span>Verifique sua caixa de entrada e spam</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">3.</span>
                <span>Acesse a área de membros com suas credenciais</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">4.</span>
                <span>Comece agora mesmo sua transformação!</span>
              </li>
            </ul>
          </div>

          {/* Purchase Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="font-bold mb-4">📦 Detalhes da Compra</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Produto:</span>
                <span className="font-semibold">{selectedPlan.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Valor:</span>
                <span className="font-semibold text-green-600">R$ {selectedPlan.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="font-semibold text-green-600">✓ Aprovado</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pedido:</span>
                <span className="font-mono text-xs">#{orderId}</span>
              </div>
            </div>
          </div>

          {/* Preserved UTMs (debug) */}
          {Object.keys(utms).length > 0 && (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-8">
              <h3 className="text-sm font-bold mb-3 text-blue-900">
                UTMs Preservados
              </h3>
              <div className="grid grid-cols-1 gap-2 text-xs text-left">
                {Object.entries(utms).map(([key, value]) => (
                  <div key={key} className="flex bg-white rounded p-2">
                    <span className="font-mono font-bold text-blue-700 w-32">{key}:</span>
                    <span className="text-blue-900 break-all">{value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-blue-700 mt-3 italic">
                Estes parâmetros foram preservados durante todo o fluxo do VSL
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition shadow-lg">
              Acessar Área de Membros
            </button>
            
            <Link
              to="/"
              className="block w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Voltar para Home
            </Link>
          </div>

          {/* Support */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Precisa de ajuda? Entre em contato:
            </p>
            <p className="text-sm font-semibold text-purple-600 mt-2">
              suporte@sixvsl.com | WhatsApp: (11) 99999-9999
            </p>
          </div>
        </div>

        {/* Warranty */}
        <div className="mt-6 text-center text-sm text-gray-600 bg-white rounded-lg p-4 shadow">
          <p className="font-semibold mb-2">🛡️ Garantia de 30 Dias</p>
          <p>
            Se não ficar satisfeito, devolvemos 100% do seu investimento sem perguntas.
          </p>
        </div>
      </div>
    </div>
  );
}