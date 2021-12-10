const publicRoute = {
  home: {
    path: '/',
  },
  profile: {
    path: `/profile`,
  },
  profileUpdate: {
    path: `/profile/update`,
  },
  itemView: {
    path: ({ id }) => `/items/${id}`,
  },
  itemSell: {
    path: ({ id }) => `/items/${id}/sell`,
  },
  gameView: {
    path: ({ titleSlug }) => `/games/${titleSlug}`,
  },
};

export default publicRoute;
