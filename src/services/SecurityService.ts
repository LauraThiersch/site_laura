// src/services/SecurityService.ts
// Serviço de segurança para monitoramento e validação

export interface SecurityConfig {
  requiredEnvVars: string[];
  sensitivePatterns: RegExp[];
  allowedDomains: string[];
}

class SecurityService {
  private static config: SecurityConfig = {
    requiredEnvVars: [
      'REACT_APP_GA_MEASUREMENT_ID',
      'REACT_APP_CONTACT_PHONE',
      'REACT_APP_WHATSAPP_NUMBER',
      'REACT_APP_CONTACT_EMAIL'
    ],
    sensitivePatterns: [
      /api[_-]?key/i,
      /token/i,
      /secret/i,
      /password/i,
      /private/i
    ],
    allowedDomains: [
      'lauraneuroped.com.br',
      'localhost',
      'vercel.app'
    ]
  };

  /**
   * Valida se todas as variáveis de ambiente obrigatórias estão definidas
   */
  static validateEnvironment(): boolean {
    const missing = this.config.requiredEnvVars.filter(
      varName => !process.env[varName]
    );
    
    if (missing.length > 0) {
      console.error('❌ Variáveis de ambiente ausentes:', missing);
      
      if (process.env.NODE_ENV === 'production') {
        console.error('🚨 AMBIENTE DE PRODUÇÃO - Variáveis críticas ausentes!');
        return false;
      }
      
      console.warn('⚠️ AMBIENTE DE DESENVOLVIMENTO - Usando valores padrão');
    }
    
    return missing.length === 0;
  }

  /**
   * Verifica se há dados sensíveis expostos no código
   */
  static checkForSensitiveData(): boolean {
    const codeContent = document.documentElement.outerHTML;
    let hasSensitiveData = false;

    this.config.sensitivePatterns.forEach(pattern => {
      if (pattern.test(codeContent)) {
        console.warn(`⚠️ Possível dado sensível detectado: ${pattern}`);
        hasSensitiveData = true;
      }
    });

    if (hasSensitiveData) {
      console.error('🚨 DADOS SENSÍVEIS DETECTADOS NO CÓDIGO!');
      return false;
    }

    return true;
  }

  /**
   * Valida se o domínio atual é permitido
   */
  static validateDomain(): boolean {
    const currentDomain = window.location.hostname;
    const isAllowed = this.config.allowedDomains.some(
      domain => currentDomain.includes(domain)
    );

    if (!isAllowed) {
      console.warn(`⚠️ Domínio não autorizado: ${currentDomain}`);
      return false;
    }

    return true;
  }

  /**
   * Verifica se o site está sendo executado em HTTPS (produção)
   */
  static validateProtocol(): boolean {
    if (process.env.NODE_ENV === 'production') {
      const isHttps = window.location.protocol === 'https:';
      
      if (!isHttps) {
        console.error('🚨 PRODUÇÃO DEVE USAR HTTPS!');
        return false;
      }
    }

    return true;
  }

  /**
   * Executa auditoria completa de segurança
   */
  static runSecurityAudit(): {
    environment: boolean;
    sensitiveData: boolean;
    domain: boolean;
    protocol: boolean;
    overall: boolean;
  } {
    const results = {
      environment: this.validateEnvironment(),
      sensitiveData: this.checkForSensitiveData(),
      domain: this.validateDomain(),
      protocol: this.validateProtocol(),
      overall: false
    };

    results.overall = Object.values(results).every(result => result);

    if (results.overall) {
      console.log('✅ Auditoria de segurança: APROVADA');
    } else {
      console.error('❌ Auditoria de segurança: REPROVADA');
      console.table(results);
    }

    return results;
  }

  /**
   * Monitora tentativas de acesso a dados sensíveis
   */
  static setupSecurityMonitoring(): void {
    // Monitorar tentativas de acesso ao localStorage
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function(key: string, value: string) {
      if (SecurityService.config.sensitivePatterns.some(pattern => pattern.test(key))) {
        console.warn(`⚠️ Tentativa de armazenar dado sensível: ${key}`);
      }
      return originalSetItem.call(this, key, value);
    };

    // Monitorar tentativas de acesso ao sessionStorage
    const originalSessionSetItem = sessionStorage.setItem;
    sessionStorage.setItem = function(key: string, value: string) {
      if (SecurityService.config.sensitivePatterns.some(pattern => pattern.test(key))) {
        console.warn(`⚠️ Tentativa de armazenar dado sensível na sessão: ${key}`);
      }
      return originalSessionSetItem.call(this, key, value);
    };

    console.log('🔒 Monitoramento de segurança ativado');
  }

  /**
   * Gera relatório de segurança
   */
  static generateSecurityReport(): string {
    const audit = this.runSecurityAudit();
    
    return `
🔒 RELATÓRIO DE SEGURANÇA - Dra. Laura Thiersch

📊 Status Geral: ${audit.overall ? '✅ APROVADO' : '❌ REPROVADO'}

🔍 Detalhes:
- Ambiente: ${audit.environment ? '✅ Válido' : '❌ Inválido'}
- Dados Sensíveis: ${audit.sensitiveData ? '✅ Seguro' : '❌ Vulnerável'}
- Domínio: ${audit.domain ? '✅ Autorizado' : '❌ Não autorizado'}
- Protocolo: ${audit.protocol ? '✅ Seguro' : '❌ Inseguro'}

📅 Data: ${new Date().toISOString()}
🌐 Domínio: ${window.location.hostname}
🔧 Ambiente: ${process.env.NODE_ENV}
    `;
  }
}

// Executar auditoria automática em desenvolvimento
if (process.env.NODE_ENV === 'development') {
  SecurityService.setupSecurityMonitoring();
  SecurityService.runSecurityAudit();
}

export default SecurityService; 