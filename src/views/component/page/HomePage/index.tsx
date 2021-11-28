import React, { ChangeEvent, FunctionComponent } from 'react';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import ReviewChat from '../../display/ReviewChat';
import CircularProgress from '@material-ui/core/CircularProgress';
import CommonAppBar from '../../../../lib/CommonAppBar';

import './index.scss';

interface Props {
  input: string;
  onChangeInput: (event: ChangeEvent) => void;
  chatting: {
    review: string;
    comments: string[];
    writeTime: string;
    issueName: string;
    totalIssueInfo: number[];
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
    <CommonAppBar />
    <main className="home-page-comp">
      <div className="center-page-content">
        <Typography variant="h4" style={{ textAlign: 'center', marginTop: '30px' }}>
          SKKU Shinhan Bank Team
        </Typography>
        <div className="input-form">
          <div className="input-wrapper">
            <TextField
              variant="outlined"
              fullWidth
              value={input}
              onChange={onChangeInput}
              disabled={isInputDisabled}
              placeholder="신한은행 앱 리뷰를 입력해주세요."
              multiline
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
            chatting.map((chat, index) => (
              <div className="chat-wrapper" key={index}>
                <div className="review">
                  <ReviewChat
                    review={chat.review}
                    comments={chat.comments}
                    time={chat.writeTime}
                    issueName={chat.issueName}
                    totalIssueInfo={chat.totalIssueInfo}
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
