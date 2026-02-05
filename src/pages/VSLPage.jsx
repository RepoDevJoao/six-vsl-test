import { useUTM } from '../hooks/useUTM';
import { Link } from 'react-router-dom';
import { plans } from '../utils/plans';

export default function VSLPage() {
  const { addUTMsToURL } = useUTM();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Headline */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Transforme Sua Vida em 30 Dias com Nosso Método Revolucionário
          </h1>
        </div>
      </section>

      {/* Video Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="VSL Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Video Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="VSL Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Escolha Seu Plano</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {Object.values(plans).map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-lg shadow-lg p-8 ${
                plan.id === 'premium' ? 'border-4 border-purple-600 relative' : 'border-2 border-gray-200'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  {plan.badge}
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <p className="text-4xl font-bold mb-6">R$ {plan.price}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to={addUTMsToURL(`/checkout?plan=${plan.id}`)}
                className={`block w-full text-white text-center py-3 rounded-lg font-semibold transition ${
                  plan.id === 'premium'
                    ? 'bg-purple-600 hover:bg-purple-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                Quero Este Plano
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials e Footer */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">O Que Nossos Alunos Dizem</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  MR
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Maria Rodrigues</h4>
                  <p className="text-sm text-gray-600">São Paulo, SP</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Resultado incrível! Em apenas 15 dias já vi mudanças significativas. Método simples e eficaz!"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  JS
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">João Silva</h4>
                  <p className="text-sm text-gray-600">Rio de Janeiro, RJ</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Melhor investimento que fiz este ano. O suporte é excepcional e os resultados falam por si."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  AC
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Ana Costa</h4>
                  <p className="text-sm text-gray-600">Belo Horizonte, MG</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Superou todas as minhas expectativas. Recomendo demais!"
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-400 mb-4">
            © 2026 Six VSL Test - Todos os direitos reservados
          </p>
          <p className="text-xs text-gray-500 mb-2">
            Este site não faz parte do Facebook ou Meta Inc.
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-white">Política de Privacidade</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}