import RequestSender from '../request-sender';
import { Chatting } from '../model/ReviewChat';
import { getPSHHost } from '../util';

export const registerReview = async (review: string) => {

  const url = `${getPSHHost()}/reviews`;

  const { status, body } = await RequestSender.sendPostRequest<Chatting>({
    url,
    body: {
      review,
    }
  });

  if (status !== 200) {
    throw new Error();
  }

  return body;
};
