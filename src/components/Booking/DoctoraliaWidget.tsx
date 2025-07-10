import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-hot-toast';
import { DoctoraliaAPI, Slot } from '../../services/DoctoraliaAPI';
import { AnalyticsService } from '../../services/AnalyticsService';
import { siteConfig } from '../../siteConfig';
import './booking.css';

// Schema de validação
const patientSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  phone: yup.string().required('Telefone é obrigatório'),
  birthDate: yup.string().required('Data de nascimento é obrigatória'),
  reason: yup.string().required('Motivo da consulta é obrigatório'),
  parentName: yup.string().required('Nome do responsável é obrigatório'),
  parentPhone: yup.string().required('Telefone do responsável é obrigatório')
});

interface PatientFormData {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  reason: string;
  parentName: string;
  parentPhone: string;
  observations?: string;
}

interface DoctoraliaWidgetProps {
  doctorId: string;
  specialtyId: string;
  className?: string;
}

const DoctoraliaWidget: React.FC<DoctoraliaWidgetProps> = ({
  doctorId,
  specialtyId,
  className = ''
}) => {
  const [availableSlots, setAvailableSlots] = useState<Slot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm<PatientFormData>({
    resolver: yupResolver(patientSchema),
    mode: 'onChange'
  });

  // Buscar horários disponíveis
  useEffect(() => {
    const fetchAvailableSlots = async () => {
      setIsLoading(true);
      try {
        const slots = await DoctoraliaAPI.getAvailableSlots({
          doctorId,
          specialtyId,
          dateRange: 30 // próximos 30 dias
        });
        
        setAvailableSlots(slots);
      } catch (error) {
        console.error('Erro ao buscar horários:', error);
        toast.error('Erro ao carregar horários disponíveis. Tente novamente.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAvailableSlots();
  }, [doctorId, specialtyId]);

  // Selecionar horário
  const handleSlotSelection = (slot: any) => {
    setSelectedSlot(slot);
    setCurrentStep(2);
  };

  // Confirmar agendamento
  const onSubmit = async (data: PatientFormData) => {
    setIsLoading(true);
    
    try {
      await DoctoraliaAPI.createAppointment({
        doctorId,
        slotId: selectedSlot!.id,
        patient: {
          ...data,
          source: 'website_dralaura',
          utm_source: new URLSearchParams(window.location.search).get('utm_source') || 'direct'
        }
      });

      setCurrentStep(3);
      toast.success('Agendamento realizado com sucesso!');
      
      // Rastrear conversão de agendamento
      AnalyticsService.trackBookingCompleted(1);
      
      // Reset form
      reset();
      
    } catch (error) {
      console.error('Erro no agendamento:', error);
      toast.error('Erro ao realizar agendamento. Tente novamente ou entre em contato.');
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div className={`doctoralia-widget ${className}`}>
      <div className="widget-header">
        <h3>Agendar Consulta com Dra. Laura Thiersch</h3>
        <p>Neuropediatra em Belo Horizonte</p>
      </div>

      {/* Step 1: Seleção de Horário */}
      {currentStep === 1 && (
        <div className="step-container">
          <h4>Escolha uma data e horário</h4>
          
          {isLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Carregando horários disponíveis...</p>
            </div>
          ) : (
            <div className="calendar-container">
              {/* Aqui viria o componente de calendário */}
              <div className="time-slots">
                {availableSlots.map((slot: any) => (
                  <button
                    key={slot.id}
                    className="time-slot"
                    onClick={() => handleSlotSelection(slot)}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Step 2: Formulário do Paciente */}
      {currentStep === 2 && selectedSlot && (
        <div className="step-container">
          <h4>Dados do Paciente</h4>
          <p className="selected-slot">
            Horário selecionado: {selectedSlot.date} às {selectedSlot.time}
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="patient-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nome da Criança *</label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  placeholder="Nome completo"
                />
                {errors.name && <span className="error">{errors.name.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="birthDate">Data de Nascimento *</label>
                <input
                  {...register('birthDate')}
                  type="date"
                  id="birthDate"
                />
                {errors.birthDate && <span className="error">{errors.birthDate.message}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="parentName">Nome do Responsável *</label>
                <input
                  {...register('parentName')}
                  type="text"
                  id="parentName"
                  placeholder="Nome completo"
                />
                {errors.parentName && <span className="error">{errors.parentName.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="parentPhone">Telefone do Responsável *</label>
                <input
                  {...register('parentPhone')}
                  type="tel"
                  id="parentPhone"
                  placeholder="(31) 99999-9999"
                />
                {errors.parentPhone && <span className="error">{errors.parentPhone.message}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                {...register('email')}
                type="email"
                id="email"
                placeholder="seu@email.com"
              />
              {errors.email && <span className="error">{errors.email.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="reason">Motivo da Consulta *</label>
              <select {...register('reason')} id="reason">
                <option value="">Selecione o motivo</option>
                <option value="tea">Avaliação TEA (Autismo)</option>
                <option value="tdah">Avaliação TDAH</option>
                <option value="epilepsia">Acompanhamento Epilepsia</option>
                <option value="desenvolvimento">Atraso no Desenvolvimento</option>
                <option value="sono">Distúrbios do Sono</option>
                <option value="outro">Outro</option>
              </select>
              {errors.reason && <span className="error">{errors.reason.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="observations">Observações Adicionais</label>
              <textarea
                {...register('observations')}
                id="observations"
                rows={4}
                placeholder="Descreva sintomas, histórico médico, etc."
              />
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setCurrentStep(1)}
              >
                Voltar
              </button>
              <button
                type="submit"
                className="btn-appointment"
                disabled={!isValid || isLoading}
              >
                {isLoading ? 'Confirmando...' : 'Confirmar Agendamento'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Step 3: Confirmação */}
      {currentStep === 3 && (
        <div className="step-container success">
          <div className="success-icon">✅</div>
          <h4>Agendamento Confirmado!</h4>
          <p>
            Sua consulta foi agendada com sucesso. Você receberá um email de confirmação 
            com todos os detalhes e instruções de preparação.
          </p>
          <div className="confirmation-details">
            <p><strong>Data:</strong> {selectedSlot?.date}</p>
            <p><strong>Horário:</strong> {selectedSlot?.time}</p>
            <p><strong>Local:</strong> {siteConfig.contact.address.street} - Prado, BH</p>
          </div>
          <button
            className="btn-appointment"
            onClick={() => {
              setCurrentStep(1);
              setSelectedSlot(null);
            }}
          >
            Agendar Nova Consulta
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctoraliaWidget; 