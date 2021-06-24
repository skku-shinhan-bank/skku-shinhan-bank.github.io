import React, { FunctionComponent } from 'react';

import './index.scss';

interface Props {
  text: string;
}

const CommentChat: FunctionComponent<Props> = ({
  text,
}) => {
  
  return (
    <div className="comment-chat-comp">
      {text}
    </div>
  )
};

export default CommentChat;
