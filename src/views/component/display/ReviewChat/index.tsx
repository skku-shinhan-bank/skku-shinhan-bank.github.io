import React, { FunctionComponent } from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import InfoIcon from '@material-ui/icons/Info';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    primary: {
      color: theme.palette.getContrastText(theme.palette.primary.main),
      backgroundColor: theme.palette.primary.main,
    },
    secondary: {
      color: theme.palette.getContrastText(theme.palette.secondary.main),
      backgroundColor: theme.palette.secondary.main,
    },
  }),
);

import './index.scss';

interface Props {
  review: string;
  comments: string[];
  time: string;
  issueName: string;
  totalIssueInfo: number[];
}

const ReviewChat: FunctionComponent<Props> = ({
  review, time, comments, issueName, totalIssueInfo,
}) => {
  const classes = useStyles();

  return (
    <div className="review-chat-comp">
      <Paper>
        <div className="container">
          <div className="review-container">
            <div className="user">
              <Avatar className={classes.primary} />
              <Typography style={{ marginLeft: '12px', fontWeight: 600, fontSize: '16px' }}>
                고객
              </Typography>
            </div>
            <div className="time">
              {time}
            </div>
            <div className='review'>
              <Typography style={{ color: '#666666', fontSize: '14px' }}>
                {review}
              </Typography>
            </div>
            <div className="issue-container">
              <div className="header">
                <InfoIcon color="primary" fontSize="large"/>
                <Typography style={{ fontSize: '16px', marginLeft: '8px', fontWeight: 500  }}>
                  ISSUE
                </Typography>
              </div>
              <Typography style={{ fontWeight: 600, fontSize: '14px', paddingLeft: '8px' }}>
                [{issueName}]
              </Typography>
              <Typography style={{ fontSize: '14px', marginLeft: '8px' }}>
                [{totalIssueInfo.reduce((acc, cur) => acc + " " + cur.toFixed(2), "")}]
              </Typography>
            </div>
          </div>
          <div className="comments-container">
            <div className="comments">
              {
                comments.map((comment, index) => (
                  <div className="comment" key={index}>
                    <div className="header">
                      <Typography style={{ marginRight: '8px', fontWeight: 600, fontSize: '16px'  }}>
                        상담사 {index + 1}
                      </Typography>
                      <Avatar className={classes.secondary} />
                    </div>
                    <div className="time">
                      {time}
                    </div>
                    <Typography style={{ color: '#333333', fontSize: '14px', whiteSpace: 'pre-line' }}>
                      {comment}
                    </Typography>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </Paper>
    </div>
  )
};

export default ReviewChat;
