import { useState, useEffect, useCallback } from 'react';
import { DoctoraliaAPI, Slot } from '../services/DoctoraliaAPI';
import { AnalyticsService } from '../services/AnalyticsService';

interface UseDoctoraliaBookingProps {
  doctorId: string;
  specialtyId: string;
}

interface UseDoctoraliaBookingReturn {
  availableSlots: Slot[];
  selectedSlot: Slot | null;
  isLoading: boolean;
  error: string | null;
  currentStep: number;
  selectSlot: (slot: Slot) => void;
  goBack: () => void;
  resetBooking: () => void;
  fetchSlots: () => Promise<void>;
}

export const useDoctoraliaBooking = ({
  doctorId,
  specialtyId
}: UseDoctoraliaBookingProps): UseDoctoraliaBookingReturn => {
  const [availableSlots, setAvailableSlots] = useState<Slot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const fetchSlots = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Rastrear visualização do widget
      AnalyticsService.trackBookingWidgetView(window.location.href);

      const slots = await DoctoraliaAPI.getAvailableSlots({
        doctorId,
        specialtyId,
        dateRange: 30
      });
      
      setAvailableSlots(slots);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      setError(errorMessage);
      
      AnalyticsService.trackError('fetch_slots_error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [doctorId, specialtyId]);

  const selectSlot = (slot: Slot) => {
    setSelectedSlot(slot);
    setCurrentStep(2);
    
    AnalyticsService.trackSlotSelection(slot.time, slot.date);
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      if (currentStep === 2) {
        setSelectedSlot(null);
      }
    }
  };

  const resetBooking = () => {
    setSelectedSlot(null);
    setCurrentStep(1);
    setError(null);
  };

  // Buscar horários disponíveis ao montar o componente
  useEffect(() => {
    fetchSlots();
  }, [fetchSlots]);

  return {
    availableSlots,
    selectedSlot,
    isLoading,
    error,
    currentStep,
    selectSlot,
    goBack,
    resetBooking,
    fetchSlots
  };
}; 