import { siteConfig } from '../siteConfig.js';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export class WhatsAppService {
  private static WHATSAPP_NUMBER = siteConfig.contact.whatsapp; // Número da Dra. Laura
  private static WHATSAPP_MESSAGE_TEMPLATE = `Nova mensagem do site da Dra. Laura Thiersch:

👤 *Nome:* {{name}}
📧 *Email:* {{email}}
📱 *Telefone:* {{phone}}

💬 *Mensagem:*
{{message}}

---
Enviado através do formulário de contato do site.`;

  /**
   * Envia mensagem do formulário para o WhatsApp da Dra. Laura
   */
  static async sendContactForm(formData: ContactFormData): Promise<{ success: boolean; message: string }> {
    try {
      // Formatar a mensagem
      const formattedMessage = this.formatMessage(formData);

      // Criar URL do WhatsApp com a mensagem
      const whatsappUrl = this.createWhatsAppUrl(formattedMessage);

      // Abrir WhatsApp em nova aba
      window.open(whatsappUrl, '_blank');

      // Tracking de conversão
      if (window.gtag) {
        window.gtag('event', 'whatsapp_form_redirect', {
          event_category: 'Conversao_Contato',
          event_label: 'Formulario_WhatsApp_Redirecionado',
          conversion_type: 'whatsapp',
          contact_method: 'whatsapp',
          area_conversao: 'neuropediatra_bh',
          localizacao_consultorio: 'prado_bh',
          value: 1,
          currency: 'BRL'
        });
        console.log('🎯 Redirecionamento para WhatsApp rastreado');
      }

      return {
        success: true,
        message: 'WhatsApp aberto! Envie a mensagem para a Dra. Laura Thiersch.'
      };

    } catch (error) {
      console.error('❌ Erro ao abrir WhatsApp:', error);

      return {
        success: false,
        message: 'Erro ao abrir WhatsApp. Entre em contato diretamente: (31) 98548-6226'
      };
    }
  }

  /**
   * Formata a mensagem para o WhatsApp
   */
  private static formatMessage(formData: ContactFormData): string {
    return this.WHATSAPP_MESSAGE_TEMPLATE
      .replace('{{name}}', formData.name)
      .replace('{{email}}', formData.email)
      .replace('{{phone}}', formData.phone)
      .replace('{{message}}', formData.message);
  }

  /**
   * Cria URL do WhatsApp com a mensagem
   */
  private static createWhatsAppUrl(message: string): string {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encodedMessage}`;
  }

  /**
   * Método alternativo usando webhook (se necessário)
   * Exemplo de implementação para envio direto via API
   */
  static async sendViaWebhook(formData: ContactFormData): Promise<{ success: boolean; message: string }> {
    try {
      // Aqui você pode implementar um webhook para enviar diretamente
      // Por exemplo, usando serviços como Zapier, Make.com, ou webhook próprio

      // Exemplo de estrutura de dados para webhook:
      // {
      //   to: this.WHATSAPP_NUMBER,
      //   message: this.formatMessage(formData),
      //   timestamp: new Date().toISOString()
      // }

      // Exemplo de implementação de webhook (você precisaria configurar o endpoint):
      // const response = await fetch('https://seu-webhook.com/whatsapp', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     to: this.WHATSAPP_NUMBER,
      //     message: this.formatMessage(formData),
      //     timestamp: new Date().toISOString()
      //   })
      // });

      return {
        success: true,
        message: 'Mensagem enviada via webhook!'
      };

    // eslint-disable-next-line no-unreachable
    } catch (error) {
      console.error('❌ Erro no webhook:', error);
      return {
        success: false,
        message: 'Erro no envio. Tente novamente.'
      };
    }
  }
}

export default WhatsAppService; 