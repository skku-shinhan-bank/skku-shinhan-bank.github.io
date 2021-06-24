import React, { FunctionComponent } from 'react';

import './index.scss';

interface Props {
  text: string;
}

const ReviewChat: FunctionComponent<Props> = ({
  text,
}) => {
  
  return (
    <div className="review-chat-comp">
      {text}
    </div>
  )
};

export default ReviewChat;
