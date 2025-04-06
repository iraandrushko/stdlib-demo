const express = require('express');
const path = require('path');
const normal = require('@stdlib/random/array/normal');
const mean = require('@stdlib/stats/base/mean');
const ddot = require('@stdlib/blas/base/ddot');

const app = express();
const port = 3000;

const a_true = 2.0;
const b_true = 5.0;
const sigma = 2.0;    
const N = 20;

const xVals = Array.from({ length: N }, (_, i) => i * (10/(N-1)) );
const noise = normal(N, 0.0, sigma, { 'dtype': 'generic' });
const yVals = xVals.map((x, i) => a_true * x + b_true + noise[i]);

const dataPoints = xVals.map((x, i) => ({ x: x, y: yVals[i] }));

const meanX = mean( N, xVals, 1 );
const meanY = mean( N, yVals, 1 );

const sumXY = ddot( N, xVals, 1, yVals, 1 );
const sumX2 = ddot( N, xVals, 1, xVals, 1 );

const a_est = ( sumXY - N * meanX * meanY ) / ( sumX2 - N * meanX * meanX );
const b_est = meanY - a_est * meanX;

const xMin = Math.min(...xVals);
const xMax = Math.max(...xVals);
const linePoints = [
    { x: xMin, y: a_est * xMin + b_est },
    { x: xMax, y: a_est * xMax + b_est }
];

app.get('/model-data', (req, res) => {
    res.json({
        dataPoints,
        regression: { a: a_est, b: b_est },
        linePoints
    });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Running server on: http://localhost:${port}`);
});
