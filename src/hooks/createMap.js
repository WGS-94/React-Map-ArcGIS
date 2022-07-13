import { useEffect } from 'react';
import { loadModules } from 'esri-loader';

export const useCreateMap = (MapRef) => {

  useEffect(() => {

    let view;

    const initializedMap = async (MapRef) => {
      const modules = ["esri/Map", "esri/views/MapView"];
      const [Map, MapView] = await loadModules(modules);
      const map = new Map({ basemap: 'streets-relief-vector' });

      view = new MapView({
        map: map,
        center: [13.234444, -8.838333],
        zoom: 13,
        // use of ref as container
        container: MapRef.current
      })

      //basemap: 'topo-vector'
      //"esri/views/WebMap"
    }
    
    initializedMap(MapRef);

    return () => view?.destroy();

    /*return () => {
        // close the map
        if(!!view) {
          view.destroy();
          view = null;
        }
      }*/

  }, [MapRef]);

}
