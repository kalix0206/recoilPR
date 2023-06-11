/* -------------- using atom with selector ------------
const currentUserIDState = atom({
    key: 'CurrentUserID',
    default: selector({
      key: 'CurrentUserID/Default',
      get: () => myFetchCurrentUserID(),
    }),
  });

  ---------------------------------------------------- */
