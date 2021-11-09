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

import { lineData } from '../../../../lib/data/line-data';
import { pieData } from '../../../../lib/data/pie-data';
import { barData } from '../../../../lib/data/bar-data';
import { sunburstData } from '../../../../lib/data/sunburst-data';

import './index.scss';
import LineChart from '../../chart/LineChart';
import PieChart from '../../chart/PieChart';
import BarChart from '../../chart/BarChart';
import SunburstChart from '../../chart/SunburstChart';
import { keywordRankData } from '../../../../lib/data/keyword-rank';
import { keywordByMonthData } from '../../../../lib/data/keyword-by-month';
import { Typography } from '@material-ui/core';

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
  const pieChartDataOfKeywordRank = keywordRankData.data.map((data) => ({
    id: data.x,
    label: data.x,
    value: data.y,
  }));

  const initialLineDataOfKeywordMonth = [{
    id: 'issue 0',
    data: [],
  }, {
    id: 'issue 1',
    data: [],
  }, {
    id: 'issue 2',
    data: [],
  }, {
    id: 'issue 3',
    data: [],
  }, {
    id: 'issue 4',
    data: [],
  }];

  const lineChartDataOfKeywordMonth = keywordByMonthData.data.reduce((acc, cur) => {
    acc[0].data.push({ x: cur.x, y: cur.y0, label: cur.x_lable });
    acc[1].data.push({ x: cur.x, y: cur.y1, label: cur.x_lable });
    acc[2].data.push({ x: cur.x, y: cur.y2, label: cur.x_lable });
    acc[3].data.push({ x: cur.x, y: cur.y3, label: cur.x_lable });
    acc[4].data.push({ x: cur.x, y: cur.y4, label: cur.x_lable });
    return acc;
  }, initialLineDataOfKeywordMonth);

  return (
    <>
    <CommonAppBar />
    <main className="reviews-analysis-page-comp">
      <div className="center-page-content">
        <div className="paper-wrapper">
          <Paper>
            <div className="contents-container">
              <Typography variant="h4">{keywordByMonthData.title}</Typography>
              <Typography variant="subtitle1">{keywordByMonthData.description}</Typography>
              <div className="chart-wrapper">
                <LineChart
                  data={lineChartDataOfKeywordMonth}
                />
              </div>
            </div>
          </Paper>
        </div>
        <div className="paper-wrapper">
          <Paper>
            <div className="contents-container">
              <Typography variant="h4">{keywordRankData.title}</Typography>
              <Typography variant="subtitle1">{keywordRankData.description}</Typography>
              <div className="chart-wrapper">
                <PieChart
                  data={pieChartDataOfKeywordRank}
                />
              </div>
            </div>
          </Paper>
        </div>
        {/*
        <div className="paper-wrapper">
          <Paper style={{ height: '400px', padding: '40px' }}>
            <BarChart
              data={barData}
            />
          </Paper>
        </div>
        <div className="paper-wrapper">
          <Paper style={{ height: '400px', padding: '40px' }}>
            <SunburstChart
              data={sunburstData}
            />
          </Paper>
        </div>
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
        */}
      </div>
    </main>
    </>
  );
};

export default ReviewsAnalysisPage;
