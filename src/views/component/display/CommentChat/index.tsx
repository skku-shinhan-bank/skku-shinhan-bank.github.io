import React, { FunctionComponent } from 'react';

import Typography from '@material-ui/core/Typography';


import './index.scss';

interface Props {
  text: string;
}

const CommentChat: FunctionComponent<Props> = ({
  text,
}) => {
  
  return (
    <div className="comment-chat-comp">
      <div className="speech-bubble">
        <Typography>
          {text}
        </Typography>
      </div>
    </div>
  )
};

export default CommentChat;
