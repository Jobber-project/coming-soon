import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  z-index: 1;
  position: absolute;
  right: 11%;
  right: clamp(20px, 11%, 148px);
  bottom: 39%;
  bottom: clamp(20px, 13%, 180px);

  @media (min-width: 600px) {
    right: 148px;
    right: clamp(20px, 11%, 148px);
    bottom: 180px;
    bottom: clamp(20px, 13%, 180px);
  }
`

export default function Waves() {
  return (
    <Svg width="74px" height="59px" viewBox="0 0 74 59" fill="white">
      <path d="M34.8111364,47.3816323 L37.0772597,48.873673 C39.0606194,50.1932628 41.4049526,51.7717559 41.6691052,51.9451162 L42.4577289,52.4569765 C44.3658126,53.6803315 45.8159028,54.4904917 47.2146252,55.0905178 C53.3380035,57.7173341 59.3987564,56.1721281 71.2425115,48.0358282 L72.1417276,47.4132096 L73.8582724,49.8735904 L72.9362965,50.511724 L72.000352,51.1484916 C59.9671438,59.2598035 53.1163729,60.8866462 46.0319122,57.8475433 C44.3565157,57.1288291 42.6766587,56.1768265 40.4475889,54.730299 L34.1982264,50.5645587 L33.3275923,49.9946714 L33.3275923,49.9946714 L33.1888636,49.9051677 C24.7913086,44.5067395 12.3576546,48.8470407 3.32721032,56.9644433 L3.01358694,57.2491312 L0.986413057,55.0376688 C4.80175643,51.5402707 10.1883838,48.1299059 15.5458779,46.2181506 C22.6387491,43.6871474 29.2807298,43.8263709 34.8111364,47.3816323 Z M35.3111364,25.2382323 L38.4599829,27.3186466 C40.1998385,28.4801681 41.9434551,29.6536247 42.1691052,29.8017162 C44.4782087,31.3171531 46.1294064,32.2670882 47.7146252,32.9471178 L48.1738525,33.1362687 C54.2212043,35.5227631 60.3499965,33.7819097 72.1893745,25.5842226 L72.6417276,25.2698096 L74.3582724,27.7301904 L73.4362965,28.368324 L72.500352,29.0050916 C60.4671438,37.1164035 53.6163729,38.7432462 46.5319122,35.7041433 C44.961228,35.0303488 43.3866234,34.1515156 41.3592364,32.8523915 L40.340581,32.1884828 L35.4141101,28.8948316 C34.7174415,28.4325779 34.1013479,28.0269362 33.6888636,27.7617677 C25.3889546,22.4261119 13.1462636,26.6040202 4.14359454,34.5394195 L3.51358694,35.1057312 L1.48641306,32.8942688 C5.30175643,29.3968707 10.6883838,25.9865059 16.0458779,24.0747506 C23.1387491,21.5437474 29.7807298,21.6829709 35.3111364,25.2382323 Z M34.8111351,3.38165147 L37.0772635,4.87369246 C39.060627,6.19328212 41.4049624,7.77177368 41.6691043,7.94512648 L42.4577282,8.45698617 C44.3658125,9.68033947 45.8159023,10.4904982 47.2146246,11.0905236 C53.338005,13.7173376 59.3987587,12.1721347 71.2425124,4.03584671 L72.1417284,3.41322903 L73.8582716,5.87361097 L72.9362959,6.51174353 L72.0003515,7.14851019 C59.9671451,15.25981 53.1163742,16.8866491 46.0319128,13.8475496 C44.3565167,13.1288365 42.6766604,12.1768357 40.4475901,10.7303103 L34.1982293,6.56457916 L33.3275927,5.99469149 L33.3275927,5.99469149 L33.1888636,5.90518771 C24.791312,0.506761706 12.3576757,4.84705136 3.32720911,12.9644454 L3.01358494,13.249133 L0.98641506,11.037667 C4.80176512,7.54027545 10.1883887,4.12991943 15.5458784,2.2181679 C22.6387511,-0.312832781 29.2807306,-0.173608606 34.8111351,3.38165147 Z" />
    </Svg>
  )
}
