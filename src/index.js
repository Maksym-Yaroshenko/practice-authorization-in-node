// src/index.js

import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';
import { bubbleSort } from './utils/bubbleSort.js';
import { firstArgumentForDispersion } from './utils/FirstArgumentForDispersion.js';
import './utils/binaryTree.js';
import { sampleaAverage } from './utils/sampleAverage.js';

const bootstrap = async () => {
  try {
    // const HVArr = bubbleSort(
    //   '89 91 102 96 94 102 93 89 95 99 98 88 86 92 95 103 81 76 103 100 123 105 116 102 89 81 98 93 100 95 88 117 96 122 102 124 121 98 96 89 109 96 100 93 101 119 104 103 90 91 83 112 116 101 100 97 102 116 101 92 97 107 110 112 104 89 121 95 85 109 107 113 123 101 93 94 83 112 111 103 103 102 123 100 98 96 106 113 117 119 106 111 112 103 105 108 109 108 99 92',
    // );
    // console.log(firstArgumentForDispersion(HVArr) - sampleaAverage(HVArr) ** 2);
    // console.log(sampleaAverage(HVArr) ** 2);

    const sortArrHV5 = bubbleSort(
      '118 90 106 113 99 103 125 91 99 97 101 98 103 117 102 84 103 93 93 113 95 104 84 113 94 97 117 111 98 108 106 99 113 109 105 104 90 112 104 109 97 95 94 117 90 96 112 100 101 120 104 103 118 97 114 94 107 114 89 87 104 82 122 77 104 101 103 110 97 101 102 124 92 93 96 103 89 90 82 99 92 102 110 101 105 94 102 96 96 108 110 86 107 100 90',
    );

    console.log(
      firstArgumentForDispersion(sortArrHV5) - sampleaAverage(sortArrHV5) ** 2,
    );

    // const sortArr2 = bubbleSort(
    //   '118 90 106 113 99 103 125 91 99 97 101 98 103 117 102 84 103 93 93 113 95 104 84 113 94 97 117 111 98 108 106 99 113 109 105 104 90 112 104 109 97 95 94 117 90 96 112 100 101 120 104 103 118 97 114 94 107 114 89 87',
    // );

    // const arr = [
    //   31, 54, 17, 7, 56, 32, 40, 35, 43, 31, 39, 46, 40, 26, 29, 35, 32, 27, 42,
    //   45, 28, 36, 30, 43, 30,
    // ];
    // console.log(sortArr);
    // console.log(sampleaAverage(sortArr2));
    // console.log(sampleaAverage(sortArr2));
    // console.log(firstArgumentForDispersion(sortArr2));
    await initMongoDB();
    startServer();
  } catch (error) {
    console.log(error);
  }
};

bootstrap();
