interface Request<B, H> {
  url: string;
  body?: B;
  header?: H;
}

interface Response<D> {
  status: number;
  body: D;
}

interface CommonHeader {
  accessToken?: string;
  contentType?: 'multipart/form-data' | 'application/json';
}

const makeFetchHeaders = (commonHeader?: CommonHeader) => {
  const header: {[key: string]: string} = {};

  if (commonHeader && commonHeader.accessToken) {
    header['Authorization'] = `Bearer ${commonHeader.accessToken}`;
  }

  if (commonHeader && commonHeader.contentType === 'multipart/form-data') {

  } else {
    header['Content-Type'] = 'application/json';
  }

  return header;
};

const makeFetchBody = <B> ({ body }: {
  body: B;
}) => {
  const fetchBody = JSON.stringify(body);

  return fetchBody;
};

export default {
  sendGetRequest: async <D> ({ url, header }: Request<undefined, CommonHeader>) => {
    const fetchHeaders = makeFetchHeaders(header);

    const fetchResponse = await fetch(
      url,
      {
        method: 'GET',
        headers: fetchHeaders
      },
    );
  
    const jsonResponse = await fetchResponse.json();
  
    const response: Response<D> = {
      status: fetchResponse.status as number,
      body: jsonResponse.body as D,
    };
  
    return response;
  },

  sendPostRequest: async <D> ({ url, header, body }: Request<any, CommonHeader>) => {
    const fetchHeaders = makeFetchHeaders(header);

    let fetchBody;
    if (body) {
      fetchBody = makeFetchBody({ body });
    }
  
    const fetchResponse = await fetch(
      url,
      {
        method: 'POST',
        headers: fetchHeaders,
        body: fetchBody,
      },
    );
  
    const jsonResponse = await fetchResponse.json();

    const response: Response<D> = {
      status: fetchResponse.status,
      body: jsonResponse.body as D,
    };

    return response;
  },

  sendMultipartPostRequest: async <D> ({ url, header, body }: Request<FormData, CommonHeader>) => {
    const fetchHeaders = makeFetchHeaders(header);

    const fetchResponse = await fetch(
      url,
      {
        method: 'POST',
        headers: fetchHeaders,
        body,
      },
    );
  
    const jsonResponse = await fetchResponse.json();
  
    const response: Response<D> = {
      status: fetchResponse.status,
      body: jsonResponse.body as D,
    };
  
    return response;
  },

  sendPutRequest: async <D> ({ url, header, body }: Request<any, CommonHeader>) => {
    const fetchHeaders = makeFetchHeaders(header);

    let fetchBody;
    if (body) {
      fetchBody = makeFetchBody({ body });
    }
  
    const fetchResponse = await fetch(
      url,
      {
        method: 'PUT',
        headers: fetchHeaders,
        body: fetchBody,
      },
    );
  
    const jsonResponse = await fetchResponse.json();
  
    const response: Response<D> = {
      status: fetchResponse.status,
      body: jsonResponse.body as D,
    };
  
    return response;
  },

  sendDeleteRequest: async <D> ({ url, header }: Request<undefined, CommonHeader>) => {
    const fetchHeaders = makeFetchHeaders(header);
  
    const fetchResponse = await fetch(
      url,
      {
        method: 'DELETE',
        headers: fetchHeaders
      },
    );
  
    const jsonResponse = await fetchResponse.json();
  
    const response: Response<D> = {
      status: fetchResponse.status,
      body: jsonResponse.body as D,
    };
  
    return response;
  },
};
