import React, { FunctionComponent, useState } from 'react';

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
import { issueByMonthData } from '../../../../lib/data/issue-by-month';
import { issueByWeekData } from '../../../../lib/data/issue-by-week';
import { meaningfulKeywordData } from '../../../../lib/data/meaningful-keyword';
import { risingKeywordData } from '../../../../lib/data/rising-keyword';

import { Switch, Typography } from '@material-ui/core';
import TableChart from '../../chart/TableChart';
import { keywordRankRelatedData } from '../../../../lib/data/keyword-related';

const ReviewsAnalysisPage: FunctionComponent = () => {
  const [isMonth, setIsMonth] = useState(false);

  const handleChange = (event) => {
    setIsMonth(event.target.checked);
  };

  const pieChartDataOfKeywordRank = keywordRankData.data.map((data) => ({
    id: data.x,
    label: data.x,
    value: data.y,
  }));

  const mappingLineChartData = (line, index) => {
    return {
      id: line.id,
      data: line.data.map(d => ({ x: d.x, y: d.y, label: d.x_label }))
    };
  }

  const lineChartDataOfIssueMonth = issueByMonthData.lines.map(mappingLineChartData);

  const lineChartDataOfIssueWeek = issueByWeekData.lines.map(mappingLineChartData);

  const tableDataOfKeywordRank = {
    title: keywordRankData.title,
    description: keywordRankData.description,
    head: [{ name: '순위' }, { name: 'Keyword' }, { name: '등장횟수' }],
    rows: keywordRankData.data.map((item, index) => {
      const row = [{ name: `${index + 1}` }];
      row.push({ name: item.x });
      row.push({ name: `${item.y}` });
      return row;
    }),
  };

  const tableDataOfKeywordRelated = {
    title: keywordRankRelatedData.title,
    description: keywordRankRelatedData.description,
    head: [{ name: 'Keyword' }, { name: '연관 Keyword 1' }, { name: '연관 Keyword 2' }, { name: '연관 Keyword 3' }],
    rows: Object.entries(keywordRankRelatedData.data).map(([ key, values ], index) => {
      const row = [{ name: key }];
      row.push({ name: values[0].keyword });
      row.push({ name: values[1].keyword });
      row.push({ name: values[2].keyword });
      return row;
    }),
  };

  const tableDataOfMeaningfulKeyword = {
    title: meaningfulKeywordData.title,
    description: meaningfulKeywordData.description,
    head: [{ name: 'Issue' }, { name: 'Top 1' }, { name: 'Top 2' }, { name: 'Top 3' }],
    rows: meaningfulKeywordData.data.map((item) => {
      const row = [{ name: item.x }];
      for (let i = 0; i < 3; i ++) {
        row.push({ name: item.y.length > i ? item.y[i] : '' })
      }
      return row;
    }),
  };

  const tableDataOfRisingKeyword = {
    title: risingKeywordData.title,
    description: risingKeywordData.description,
    head: [{ name: 'Date' }, { name: 'Top 1' }, { name: 'Top 2' }, { name: 'Top 3' }],
    rows: risingKeywordData.data.map((item) => {
      const row = [{ name: item.x }];
      for (let i = 0; i < 3; i ++) {
        row.push({ name: item.y.length > i ? item.y[i] : '' })
      }
      return row;
    }),
  };

  return (
    <>
    <CommonAppBar />
    <main className="reviews-analysis-page-comp">
      <div className="center-page-content">
        <Typography variant="h3" style={{ marginBottom: '20px', marginTop: '20px' }}>리뷰 분석</Typography>
        <Typography variant="h4" style={{ marginBottom: '20px' }}>이슈 변화 추이 분석</Typography>
        <div className="issue-container">
          <div className="paper-wrapper issue-line-graph-page-wrapper">
            <Paper>
              <div className="contents-container">
                <div className="header">
                  <Switch color="primary" onChange={handleChange}/>
                  <Typography variant="h4">
                    {isMonth ? issueByMonthData.title : issueByWeekData.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {isMonth ? issueByMonthData.description : issueByWeekData.description}
                  </Typography>
                </div>
                {isMonth?
                  <div className="chart-wrapper fixed-height">
                    <LineChart
                      data={lineChartDataOfIssueMonth}
                    />
                  </div>
                  :
                  <div className="chart-wrapper fixed-height">
                    <LineChart
                      data={lineChartDataOfIssueWeek}
                    />
                  </div>
                }
              </div>
            </Paper>
          </div>
          <div className="paper-wrapper">
            <Paper>
              <div className="contents-container">
                <Typography variant="h4">{tableDataOfMeaningfulKeyword.title}</Typography>
                <Typography variant="subtitle1">{tableDataOfMeaningfulKeyword.description}</Typography>
                <div className="chart-wrapper">
                  <TableChart
                    head={tableDataOfMeaningfulKeyword.head}
                    rows={tableDataOfMeaningfulKeyword.rows}
                  />
                </div>
              </div>
            </Paper>
          </div>
        </div>
        <Typography variant="h4" style={{ marginBottom: '20px', marginTop: '40px' }}>Keyword</Typography>
        <div className="paper-wrapper">
          <Paper>
            <div className="contents-container">
              <Typography variant="h4">{tableDataOfKeywordRank.title}</Typography>
              <Typography variant="subtitle1">{tableDataOfKeywordRank.description}</Typography>
              <div className="chart-wrapper">
              <TableChart
                  head={tableDataOfKeywordRank.head}
                  rows={tableDataOfKeywordRank.rows}
                />
              </div>
            </div>
          </Paper>
        </div>
        <div className="paper-wrapper">
          <Paper>
            <div className="contents-container">
              <Typography variant="h4">{tableDataOfKeywordRelated.title}</Typography>
              <Typography variant="subtitle1">{tableDataOfKeywordRelated.description}</Typography>
              <div className="chart-wrapper">
              <TableChart
                  head={tableDataOfKeywordRelated.head}
                  rows={tableDataOfKeywordRelated.rows}
                />
              </div>
            </div>
          </Paper>
        </div>
        {/* <div className="paper-wrapper">
          <Paper>
            <div className="contents-container">
              <Typography variant="h4">{keywordRankData.title}</Typography>
              <Typography variant="subtitle1">{keywordRankData.description}</Typography>
              <div className="chart-wrapper fixed-height">
                <PieChart
                  data={pieChartDataOfKeywordRank}
                />
              </div>
            </div>
          </Paper>
        </div> */}
        <div className="paper-wrapper">
          <Paper>
            <div className="contents-container">
              <Typography variant="h4">{tableDataOfRisingKeyword.title}</Typography>
              <Typography variant="subtitle1">{tableDataOfRisingKeyword.description}</Typography>
              <div className="chart-wrapper">
                <TableChart
                  head={tableDataOfRisingKeyword.head}
                  rows={tableDataOfRisingKeyword.rows}
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
