// Serviço para integração com a API do Doctoralia
// Nota: Esta é uma implementação mock. Para produção, será necessário
// configurar a API real do Doctoralia ou usar o widget embeddable

interface Slot {
  id: string;
  date: string;
  time: string;
  available: boolean;
}

interface PatientData {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  reason: string;
  parentName: string;
  parentPhone: string;
  observations?: string;
  source: string;
  utm_source?: string;
}

interface BookingRequest {
  doctorId: string;
  slotId: string;
  patient: PatientData;
}

interface BookingResponse {
  id: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  appointmentDate: string;
  appointmentTime: string;
  confirmationCode: string;
}

class DoctoraliaAPI {
  private static baseURL = process.env.REACT_APP_DOCTORALIA_API_URL || 'https://api.doctoralia.com.br';
  private static apiKey = process.env.REACT_APP_DOCTORALIA_API_KEY;

  // Mock de horários disponíveis para desenvolvimento
  private static mockSlots: Slot[] = [
    { id: '1', date: '2024-01-15', time: '08:00', available: true },
    { id: '2', date: '2024-01-15', time: '09:00', available: true },
    { id: '3', date: '2024-01-15', time: '10:00', available: false },
    { id: '4', date: '2024-01-16', time: '08:00', available: true },
    { id: '5', date: '2024-01-16', time: '09:00', available: true },
    { id: '6', date: '2024-01-16', time: '10:00', available: true },
    { id: '7', date: '2024-01-17', time: '08:00', available: true },
    { id: '8', date: '2024-01-17', time: '09:00', available: false },
    { id: '9', date: '2024-01-17', time: '10:00', available: true },
  ];

  static async getAvailableSlots(params: {
    doctorId: string;
    specialtyId: string;
    dateRange: number;
  }): Promise<Slot[]> {
    try {
      // Em produção, faria a chamada real para a API do Doctoralia
      if (this.apiKey) {
        const response = await fetch(`${this.baseURL}/slots`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(params)
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar horários disponíveis');
        }

        return await response.json();
      }

      // Mock para desenvolvimento
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simular delay
      
      const today = new Date();
      const availableSlots = this.mockSlots.filter(slot => {
        const slotDate = new Date(slot.date);
        const daysDiff = Math.ceil((slotDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        return slot.available && daysDiff >= 0 && daysDiff <= params.dateRange;
      });

      return availableSlots;
    } catch (error) {
      console.error('Erro na API Doctoralia:', error);
      throw new Error('Não foi possível carregar os horários disponíveis');
    }
  }

  static async createAppointment(request: BookingRequest): Promise<BookingResponse> {
    try {
      // Em produção, faria a chamada real para a API do Doctoralia
      if (this.apiKey) {
        const response = await fetch(`${this.baseURL}/appointments`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(request)
        });

        if (!response.ok) {
          throw new Error('Erro ao criar agendamento');
        }

        return await response.json();
      }

      // Mock para desenvolvimento
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simular delay
      
      const selectedSlot = this.mockSlots.find(slot => slot.id === request.slotId);
      if (!selectedSlot) {
        throw new Error('Horário não encontrado');
      }

      // Simular confirmação
      const confirmationCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      
      return {
        id: `booking_${Date.now()}`,
        status: 'confirmed',
        appointmentDate: selectedSlot.date,
        appointmentTime: selectedSlot.time,
        confirmationCode
      };
    } catch (error) {
      console.error('Erro ao criar agendamento:', error);
      throw new Error('Não foi possível realizar o agendamento');
    }
  }

  static async cancelAppointment(appointmentId: string): Promise<boolean> {
    try {
      if (this.apiKey) {
        const response = await fetch(`${this.baseURL}/appointments/${appointmentId}/cancel`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          }
        });

        return response.ok;
      }

      // Mock para desenvolvimento
      await new Promise(resolve => setTimeout(resolve, 1000));
      return true;
    } catch (error) {
      console.error('Erro ao cancelar agendamento:', error);
      throw new Error('Não foi possível cancelar o agendamento');
    }
  }

  // Método para verificar se a API está disponível
  static async checkAvailability(): Promise<boolean> {
    try {
      if (this.apiKey) {
        const response = await fetch(`${this.baseURL}/health`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
          }
        });
        return response.ok;
      }
      return true; // Mock sempre disponível
    } catch (error) {
      return false;
    }
  }
}

export { DoctoraliaAPI };
export type { Slot, PatientData, BookingRequest, BookingResponse }; 