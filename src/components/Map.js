import React, { useRef, useEffect }from 'react';
import { loadModules } from 'esri-loader';

export default function Map() {

  const MapEl = useRef(null);
  
  useEffect(() => {
    let view;

    loadModules(["esri/views/MapView", "esri/views/WebMap"], {css: true})
      .then((MapView, WebMap) => {
      const webmap = new WebMap({
        basemap: 'topo-vector'
      })

      view = new MapView({
        map: webmap,
        center: [],
        zoom: 8,
        // use of ref as container
        container: MapEl.current
      })
      
      return () => {
        // close the map
        if(!!view) {
          view.destroy();
          view = null;
        }
      }
    
    })

  });

  return (
    <div style={{ height: 800}} ref={MapEl}>
      
    </div>
  );
}