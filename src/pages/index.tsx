import * as React from "react"
import { useState } from "react";
import CommonHead from '../lib/CommonHead';
import { registerReview } from "../lib/psh-sevice/register-review";

import HomePage from '../views/component/page/HomePage';

import '../views/styles/global.scss';

// markup
const IndexRoute = () => {
  const [chattings, setChattings] = useState<{
    review: string;
    comment: string;
    writeTime: string;
  }[]>([])
  const [input, setInput] = React.useState('');
  const [isReviewRegistering, setIsReviewRegistering] = useState(false);

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  const onClickSendButton = async () => {
    setIsReviewRegistering(true)

    const newReview = input;
    
    let reviewChat = null

    try {
      reviewChat = await registerReview(newReview);
    } catch (error) {
      console.error(error);
    }

    const today = new Date();

    const dateReviewChat = {
      review: newReview,
      comment: '',
      writeTime: `${today.getFullYear()} / ${today.getMonth() + 1} / ${today.getDate()}`,
    };

    if (reviewChat) {
      dateReviewChat.comment = reviewChat.comment;
    } else {
      dateReviewChat.comment = '[리뷰 등록 실패]';
    }

    const newChattings = [dateReviewChat, ...chattings]

    setChattings(newChattings);
    setInput('');
    setIsReviewRegistering(false)
  }

  return (
    <>
    <CommonHead
      title="SKKU Shinhan Bank Team"
      description="SKKU Shinhan Bank Team"
    />
    <HomePage
      input={input}
      onChangeInput={onChangeInput}
      chatting={chattings}
      onClickSendButton={onClickSendButton}
      isInputDisabled={isReviewRegistering}
      isSendButtonLoading={isReviewRegistering}
      isNewChattingLoading={isReviewRegistering}
    />
    </>
  )
}

export default IndexRoute;
