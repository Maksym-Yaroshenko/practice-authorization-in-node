// src/index.js

import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';
import { bubbleSort } from './utils/bubbleSort.js';
// import { firstArgumentForDispersion } from './utils/FirstArgumentForDispersion.js';
import { sampleaAverage } from './utils/sampleAverage.js';

const bootstrap = async () => {
  try {
    // const HVArr = bubbleSort(
    //   '89 91 102 96 94 102 93 89 95 99 98 88 86 92 95 103 81 76 103 100 123 105 116 102 89 81 98 93 100 95 88 117 96 122 102 124 121 98 96 89 109 96 100 93 101 119 104 103 90 91 83 112 116 101 100 97 102 116 101 92 97 107 110 112 104 89 121 95 85 109 107 113 123 101 93 94 83 112 111 103 103 102 123 100 98 96 106 113 117 119 106 111 112 103 105 108 109 108 99 92',
    // );
    // console.log(firstArgumentForDispersion(HVArr) - sampleaAverage(HVArr) ** 2);
    // console.log(sampleaAverage(HVArr) ** 2);

    // const sortArr = bubbleSort(
    //   '8 9 9 9 10 11 11 12 13 13 14 15 17 17 17 17 18 18 19 19 19 19 19 20 20 20 20 20 20 20 20 21 21 21 21 22 22 22 23 23',
    // );

    // const sortArr2 = bubbleSort(
    //   '2,9 3,8 4,2 4,4 4,5 4,7 5,1 5,3 5,3 5,4 5,6 5,6 5,6 5,8 5,8 5,9 6,0 6,0 6,0 6,0 6,1 6,1 6,1 6,2 6,4 6,5 6,5 6,7 6,7 6,8 6,9 7,1 7,4 7,7 8,2 8,5',
    // );
    const arr = [-11, 24, -16, 15, 8];
    console.log(sampleaAverage(arr));
    // console.log(firstArgumentForDispersion(sortArr));
    await initMongoDB();
    startServer();
  } catch (error) {
    console.log(error);
  }
};

bootstrap();
