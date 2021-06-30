import React, { ChangeEvent, FunctionComponent } from 'react';

import BasicAppBar from '../../app-bar/BasicAppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import ReviewChat from '../../display/ReviewChat';
import CommentChat from '../../display/CommentChat';
import CircularProgress from '@material-ui/core/CircularProgress';

import './index.scss';

interface Props {
  input: string;
  onChangeInput: (event: ChangeEvent) => void;
  chatting: {
    review: string;
    comment: string;
  }[];
  onClickSendButton: () => void;
  isInputDisabled?: boolean;
  isSendButtonLoading?: boolean;
  isNewChattingLoading?: boolean;
}

const HomePage: FunctionComponent<Props> = ({
  chatting, onClickSendButton, input, onChangeInput,
  isInputDisabled = false, isSendButtonLoading = false, isNewChattingLoading = false,
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
              disabled={isInputDisabled}
            />
          </div>
          <div className="button-wrapper">
            <Button
              variant="contained"
              color="primary"
              onClick={onClickSendButton}
              disabled={isSendButtonLoading}
            >
              <SendIcon />
            </Button>
          </div>
        </div>
        {
          isNewChattingLoading && (
            <div className="new-char-pregress-container">
              <CircularProgress />
            </div>
          )
        }
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
