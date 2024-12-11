'use client'

import { YMaps, Map as YMap, Placemark } from '@pbe/react-yandex-maps'

interface Props {
  width: string
  height: string
  defaultState: {
    center: [number, number]
    zoom: number
  }
  placemark: [number, number]

}
export const Map = ({ width, height, defaultState, placemark }: Props) => (
  <YMaps>
    <YMap
      width={width}
      height={height}
      defaultState={defaultState}
    >
      <Placemark
        geometry={placemark}
        defaultProperties={{
          hintContent: 'Расположение клуба ОМ',
          balloonContent: 'Йога клуб ОМ',
        }}
        options={{
          iconLayout: 'default#image',
          iconImageHref: '/icons/placemarkYandex.svg',
          iconImageSize: [ 60, 68 ],
          iconImageOffset: [ -30, -68 ],
        }}
      />
    </YMap>
  </YMaps>
)
