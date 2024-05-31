"use client"

import React, { useEffect, useState } from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyWidget = () => {
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    setShowWidget(true);
  }, []);

  return showWidget ? (
    <InlineWidget 
      url="https://calendly.com/fotieno-gtwh/30min?back=1&month=2024-05" 
      styles={{ height: '600px', width: '100%' }} 
    />
  ) : null;
};

export default CalendlyWidget;