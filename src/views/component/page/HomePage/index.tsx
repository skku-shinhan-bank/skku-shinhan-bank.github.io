import React, { ChangeEvent, FunctionComponent } from 'react';

import BasicAppBar from '../../app-bar/BasicAppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import ReviewChat from '../../display/ReviewChat';
import CommentChat from '../../display/CommentChat';

import './index.scss';

interface Props {
  input: string;
  onChangeInput: (event: ChangeEvent) => void;
  chatting: {
    review: string;
    comment: string;
  }[];
  onClickSendButton: () => void;
}

const HomePage: FunctionComponent<Props> = ({
  chatting, onClickSendButton, input, onChangeInput,
}) => {
  return (
    <>
    <BasicAppBar />
    <main className="home-page-comp">
      <div className="center-page-content">
        <Typography variant="h5" style={{ textAlign: 'center', marginTop: '30px' }}>
          SKKU 산학협력 프로젝트 Shinhan Bank Team
        </Typography>
        <div className="input-form">
          <div className="input-wrapper">
            <TextField
              variant="outlined"
              fullWidth
              value={input}
              onChange={onChangeInput}
            />
          </div>
          <div className="button-wrapper">
            <Button
              variant="contained"
              color="primary"
              onClick={onClickSendButton}
            >
              <SendIcon />
            </Button>
          </div>
        </div>
        <div className="chat-container">
          {
            chatting.map((chat) => (
              <div className="chat-wrapper">
                <div className="review">
                  <ReviewChat
                    text={chat.review}
                  />
                </div>
                <div className="comment">
                  <CommentChat
                    text={chat.comment}
                    />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </main>
    </>
  );
};

export default HomePage;
