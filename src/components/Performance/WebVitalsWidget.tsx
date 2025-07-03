import React, { useEffect, useState } from 'react';
import { getCLS, getFID, getLCP, getFCP, getTTFB, Metric } from 'web-vitals';

const widgetStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: 16,
  right: 16,
  background: 'rgba(30,30,30,0.9)',
  color: '#fff',
  padding: '12px 16px',
  borderRadius: 8,
  fontSize: 14,
  zIndex: 9999,
  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  minWidth: 180,
  fontFamily: 'monospace',
  pointerEvents: 'none', // não interfere com o site
};

const labelStyle: React.CSSProperties = {
  fontWeight: 700,
  marginRight: 8,
};

const WebVitalsWidget: React.FC = () => {
  const [metrics, setMetrics] = useState<Record<string, number>>({});

  useEffect(() => {
    function updateMetric(metric: Metric) {
      setMetrics((prev) => ({ ...prev, [metric.name]: Math.round(metric.value * 100) / 100 }));
    }
    getCLS(updateMetric);
    getFID(updateMetric);
    getLCP(updateMetric);
    getFCP(updateMetric);
    getTTFB(updateMetric);
  }, []);

  return (
    <div style={widgetStyle}>
      <div><span style={labelStyle}>LCP:</span> {metrics.LCP ?? '--'} ms</div>
      <div><span style={labelStyle}>FID:</span> {metrics.FID ?? '--'} ms</div>
      <div><span style={labelStyle}>CLS:</span> {metrics.CLS ?? '--'}</div>
      <div><span style={labelStyle}>FCP:</span> {metrics.FCP ?? '--'} ms</div>
      <div><span style={labelStyle}>TTFB:</span> {metrics.TTFB ?? '--'} ms</div>
    </div>
  );
};

export default WebVitalsWidget; 