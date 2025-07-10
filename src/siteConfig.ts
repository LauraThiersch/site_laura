// Configuração centralizada do site - Dados sensíveis
// Use variáveis de ambiente para produção
// Vercel build fix - arquivo atualizado para resolver cache

export const siteConfig = {
  // Analytics
  googleAnalyticsId: process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-RWY87ZSVH3',
  
  // Contato (dados públicos permitidos)
  contact: {
    fullName: process.env.REACT_APP_CONTACT_FULL_NAME || 'Dra. Laura Maria Silva Thiersch',
    phone: "+5531985486226",
    whatsapp: "5531985486226",
    email: process.env.REACT_APP_CONTACT_EMAIL || 'contato@lauraneuroped.com.br',
    address: {
      street: process.env.REACT_APP_ADDRESS_STREET || 'Rua Turquesa, 347',
      city: process.env.REACT_APP_ADDRESS_CITY || 'Belo Horizonte',
      state: process.env.REACT_APP_ADDRESS_STATE || 'MG',
      zipCode: process.env.REACT_APP_ADDRESS_ZIP || '30411-177',
      country: process.env.REACT_APP_ADDRESS_COUNTRY || 'BR'
    },
    coordinates: {
      latitude: process.env.REACT_APP_LATITUDE || '-19.93085798660937',
      longitude: process.env.REACT_APP_LONGITUDE || '-43.96385768462244'
    }
  },
  
  // Doctoralia
  doctoralia: {
    doctorId: process.env.REACT_APP_DOCTORALIA_DOCTOR_ID || '',
    apiKey: process.env.REACT_APP_DOCTORALIA_API_KEY || ''
  },
  
  // URLs
  baseUrl: process.env.REACT_APP_BASE_URL || 'https://www.laurathiersch.com.br',
  
  // SEO
  seo: {
    title: 'Dra. Laura Thiersch | Neuropediatra em Belo Horizonte',
    description: 'Neuropediatra especialista em TEA, TDAH e Epilepsia Infantil em Belo Horizonte. Agende sua consulta.',
    keywords: 'neuropediatra belo horizonte, neurologista infantil bh, tea tratamento, tdah crianças, epilepsia infantil, dra laura thiersch'
  }
};

// Validação de configuração
export const validateConfig = () => {
  const requiredEnvVars = [
    'REACT_APP_GA_MEASUREMENT_ID',
    'REACT_APP_CONTACT_PHONE',
    'REACT_APP_WHATSAPP_NUMBER',
    'REACT_APP_CONTACT_EMAIL'
  ];
  
  const missing = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0 && process.env.NODE_ENV === 'production') {
    console.warn('⚠️ Variáveis de ambiente ausentes:', missing);
  }
  
  return missing.length === 0;
}; 