import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: process.env.NEXT_PUBLIC_API_TIMEOUT,
});

const handleError = async (error, hideError) => {
  const hideErrorNoti = hideError;
  const lang = 'en';
  const errorMessages = {
    golobal: {
      en: 'System is in maintenance. We are on it. Please check back in a few minute.',
      vi: 'Có lỗi xảy ra, vui lòng thử lại sau',
    },
    timeout: {
      en: 'Request is timeout, check internet connection',
      vi: 'Yêu cầu của bạn bị hết hạn. Vui lòng kiểm tra kết nối',
    },
    sessionExprire: {
      en: 'Session is expried, please re-login again',
      vi: 'Vui lòng đăng nhập để sử dụng tính năng này',
    },
  };
  let errorMessage = errorMessages.golobal[lang];
  if (
    error.response &&
    error.response.data &&
    error.response.data.meta &&
    error.response.data.meta.message &&
    typeof error.response.data.meta.message === 'string'
  ) {
    errorMessage = error.response.data.meta.message;
  } else if (
    error.response &&
    error.response.data &&
    error.response.data.message
  ) {
    errorMessage = error.response.data.message;
  }
  if (error.code === 'ECONNABORTED') {
    errorMessage = errorMessages.timeout[lang];
  }
  if (
    error.response &&
    (error.response.status === 401 ||
      error.response.status === 403 ||
      error.response.data.code === 401)
  ) {
    errorMessage = errorMessages.sessionExprire[lang];
    
  }
  if (!hideErrorNoti) {
    // show notification
  }

  // eslint-disable-next-line no-undef
  return Promise.reject(error.response, errorMessage);
};

const sendRequest = async ({
  url,
  method,
  params,
  data,
  headers,
  options,
  hideError,
  isServer,
  config,
  accessToken = '',
}) => {
  const access_token =
    accessToken ||
    localStorage.getItem('accessToken') ||
    sessionStorage.getItem('accessToken');
  // const lang = 'vi'; // language
  return instance({
    url,
    method,
    params: {
      // lang: lang,
      ...params,
      textSearch: params?.textSearch ? decodeURI(params.textSearch) : undefined,
    },
    data,
    config,
    headers: {
      // lang,
      'Content-Type': 'application/json',
      // 'Cache-Control': 'no-cache',
      Authorization: access_token ? `Bearer ${access_token}` : '',
      ...headers,
    },
    ...options,
  })
    .then((response) => {
      if (response.data.status && +response.data.status > 300) {
        throw {
          response: {
            data: {
              message: response.data.description,
            },
          },
        };
      }
      return response.data;
    })
    .catch((error) =>
      handleError(error, hideError, () =>
        sendRequest({
          url,
          method,
          params,
          data,
          headers,
          options,
          hideError,
          isServer,
          config,
        }),
      ),
    );
};

export const get = ({
  url,
  params,
  loading = true,
  headers = {},
  options,
  hideError,
  isServer,
}) =>
  sendRequest({
    url,
    params,
    method: 'GET',
    loading,
    headers,
    options,
    hideError,
    isServer,
  });

export const post = ({
  url,
  params,
  data,
  loading = true,
  headers = {},
  options,
  hideError,
  config,
  accessToken,
}) =>
  sendRequest({
    url,
    params,
    data,
    method: 'POST',
    loading,
    headers,
    options,
    config,
    hideError,
    accessToken,
  });

export const put = ({
  url,
  params,
  data,
  loading = true,
  headers = {},
  options,
  accessToken,
}) =>
  sendRequest({
    url,
    params,
    data,
    method: 'PUT',
    loading,
    headers,
    options,
    accessToken,
  });

export const patch = ({
  url,
  params,
  data,
  loading = true,
  headers = {},
  options,
}) =>
  sendRequest({
    url,
    params,
    data,
    method: 'PATCH',
    loading,
    headers,
    options,
  });

export const deleteData = ({
  url,
  params,
  data,
  loading = true,
  headers = {},
  options,
}) =>
  sendRequest({
    url,
    params,
    data,
    method: 'DELETE',
    loading,
    headers,
    options,
  });

export const getHTTPMethod = (baseURL) => ({
  get: ({ url, params, loading, headers, options = {}, hideError }) =>
    sendRequest({
      url,
      params,
      method: 'GET',
      loading,
      headers,
      options: { ...options, baseURL },
      hideError,
    }),
  post: ({
    url,
    params,
    data,
    loading = true,
    headers = {},
    options = {},
    hideError,
  }) =>
    sendRequest({
      url,
      params,
      data,
      method: 'POST',
      loading,
      headers,
      options: { ...options, baseURL },
      hideError,
    }),
  put: ({ url, params, data, loading = true, headers = {}, options = {} }) =>
    sendRequest({
      url,
      params,
      data,
      method: 'PUT',
      loading,
      headers,
      options: { ...options, baseURL },
    }),
  deleteData: ({
    url,
    params,
    data,
    loading = true,
    headers = {},
    options = {},
  }) =>
    sendRequest({
      url,
      params,
      data,
      method: 'DELETE',
      loading,
      headers,
      options: { ...options, baseURL },
    }),
});

export const service = getHTTPMethod(process.env.REACT_APP_API_URL);
