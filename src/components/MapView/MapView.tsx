import { Map, Marker, } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import style from "../../styles/styles.json";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import ToolTipCard from '../ToolTipCard/ToolTipCard';


const MapView = ({ regions }: any) => {
  const mapStyles: any = style
  return (
    <Map
      initialViewState={{
        longitude: -41.6622,
        latitude: 47.1771,
        zoom: 2.5
      }}
      style={{ width: '100vw', height: '80vh' }}
      mapStyle={mapStyles}
    >
      {
        regions?.map((region: any) => {
          const { lat, lon, id, data, region_name } = region

          const getColorIntensity = (data: number, maxValue: number) => {
            const intensity = maxValue ? 1 - data / maxValue : 1;
            const lightness = 20 + intensity * 60;

            return `hsl(0, 0%, ${lightness}%)`;
          };

          return (
            <>
              <Marker longitude={lon} latitude={lat} anchor="bottom" key={id}  >
                <Tippy
                  key={id}
                  trigger='click'
                  interactive={true}
                  arrow={false}
                  placement='right-start'
                  content={
                    <ToolTipCard region_name={region_name} lon={lon} lat={lat} data={data} />
                  }
                >
                  <div

                    style={{
                      width: data / 20,
                      height: data / 20,
                      borderRadius: '50%',
                      backgroundColor: getColorIntensity(data, 1000),
                      opacity: 0.8,
                      border: '2px solid #fff',
                      zIndex: -99

                    }}
                  />
                </Tippy>
              </Marker>
            </>

          )
        })
      }

    </Map>
  )
};

export default MapView;