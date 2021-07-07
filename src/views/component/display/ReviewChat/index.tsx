import React, { FunctionComponent } from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
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
  comment: string;
  time: string;
}

const ReviewChat: FunctionComponent<Props> = ({
  review, time, comment,
}) => {
  const classes = useStyles();

  return (
    <div className="review-chat-comp">
      <Paper style={{ padding: '20px' }} >
        <div className="user">
          <Avatar className={classes.primary} />
          <Typography style={{ marginLeft: '12px' }}>
            User
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
        <div className="avatar">
          <Avatar className={classes.secondary} />
        </div>
        <div className="comment">
          <Typography style={{ color: '#333333', fontSize: '14px' }}>
            {comment}
          </Typography>
        </div>
      </Paper>
    </div>
  )
};

export default ReviewChat;
