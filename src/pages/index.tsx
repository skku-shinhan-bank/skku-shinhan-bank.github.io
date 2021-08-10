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
    
    let newChatting = {
      review: newReview,
      comment: '[리뷰 등록 실패]',
      writeTime: '',
    };

    try {
      newChatting = await registerReview(newReview);
    } catch (error) {
      console.error(error);
    }

    const newChattings = [newChatting, ...chattings]

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

function getTwoPlaceString(num: number) {
  if (num < 9) {
    return `0${num}`;
  }
  return `${num}`;
}

export default IndexRoute;
