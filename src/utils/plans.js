export const plans = {
  basico: {
    id: 'basico',
    name: 'Plano Básico',
    description: 'Perfeito para começar sua jornada',
    price: 97,
    features: [
      'Acesso por 30 dias',
      '10 módulos de treinamento',
      'Suporte por email'
    ]
  },
  premium: {
    id: 'premium',
    name: 'Plano Premium',
    description: 'A escolha dos campeões',
    price: 197,
    features: [
      'Acesso vitalício',
      '20 módulos + bônus exclusivos',
      'Suporte prioritário 24/7',
      'Mentorias ao vivo mensais'
    ],
    badge: 'MAIS POPULAR'
  },
  vip: {
    id: 'vip',
    name: 'Plano VIP',
    description: 'Transformação completa garantida',
    price: 497,
    features: [
      'Tudo do Premium',
      'Consultoria individual 1-on-1',
      'Grupo VIP exclusivo',
      'Garantia estendida de 90 dias'
    ]
  }
};