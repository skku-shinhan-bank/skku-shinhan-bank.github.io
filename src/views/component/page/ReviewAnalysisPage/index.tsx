import React, { FunctionComponent } from 'react';

import CommonAppBar from '../../../../lib/CommonAppBar';

import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

import './index.scss';

const data = [
  { argument: 'arg 1', value: 12 },
  { argument: 'arg 2', value: 7 },
  { argument: 'arg 3', value: 7 },
  { argument: 'arg 4', value: 7 },
  { argument: 'arg 5', value: 6 },
  { argument: 'arg 6', value: 5 },
  { argument: 'arg 7', value: 2 },
  { argument: 'arg 8', value: 55 },
];

const ReviewsAnalysisPage: FunctionComponent = () => {
  return (
    <>
    <CommonAppBar />
    <main className="reviews-analysis-page-comp">
      <div className="center-page-content">
        <div className="paper-wrapper">
          <Paper style={{ padding: '40px' }}>
            <Chart
              data={data}
            >
              <PieSeries
                argumentField="argument"
                valueField="value"
              />
              <Animation />
            </Chart>
          </Paper>
        </div>
        <div className="paper-wrapper">
          <Paper style={{ padding: '40px' }}>
            <Chart
              data={data}
            >
              <ArgumentAxis />
              <ValueAxis />

              <BarSeries
                valueField="value"
                argumentField="argument"
              />
              <Animation />
            </Chart>
          </Paper>
        </div>
      </div>
    </main>
    </>
  );
};

export default ReviewsAnalysisPage;
