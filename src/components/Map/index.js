import React, { useRef}from 'react';
import { useCreateMap } from '../../hooks/createMap';

export default function Map() {

  const MapRef = useRef(null);
  useCreateMap(MapRef);
  
  return (
    <div style={{ height: 800}} ref={MapRef} />
  );
}