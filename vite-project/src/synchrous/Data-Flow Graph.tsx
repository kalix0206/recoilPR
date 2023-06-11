/* --------------------------------------------------------------
const currentUserIDState = atom({
  key: "CurrentUserID",
  default: null,
});

const userInfoQuery = selectorFamily({
  key: "UserInfoQuery",
  get: (userID) => async () => {
    const response = await myDBQuery({ userID });
    if (response.error) {
      throw response.error;
    }
    return response;
  },
});

const currentUserInfoQuery = selector({
  key: "CurrentUserInfoQuery",
  get: ({ get }) => get(userInfoQuery(get(currentUserIDState))),
});

const friendsInfoQuery = selector({
  key: "FriendsInfoQuery",
  get: ({ get }) => {
    const { friendList } = get(currentUserInfoQuery);
    return friendList.map((friendID) => get(userInfoQuery(friendID)));
  },
});

function CurrentUserInfo() {
  const currentUser = useRecoilValue(currentUserInfoQuery);
  const friends = useRecoilValue(friendsInfoQuery);
  const setCurrentUserID = useSetRecoilState(currentUserIDState);
  return (
    <div>
      <h1>{currentUser.name}</h1>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id} onClick={() => setCurrentUserID(friend.id)}>
            {friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MyApp() {
  return (
    <RecoilRoot>
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <CurrentUserInfo />
        </React.Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  );
}

------------------------------------------------------------------- */ 

/* --------------waitForAll & waitForNone -------------------------
const friendsInfoQuery = selector({ //waitForAll
    key: 'FriendsInfoQuery',
    get: ({get}) => {
      const {friendList} = get(currentUserInfoQuery);
      const friends = get(
        waitForAll(friendList.map((friendID) => userInfoQuery(friendID))),        
      );
      return friends;
    },
  });

  const friendsInfoQuery = selector({ // waitForNone
    key: 'FriendsInfoQuery',
    get: ({get}) => {
      const {friendList} = get(currentUserInfoQuery);
      const friendLoadables = get(
        waitForNone(friendList.map((friendID) => userInfoQuery(friendID))),
      );
      return friendLoadables
        .filter(({state}) => state === 'hasValue')
        .map(({contents}) => contents);
    },
  });
 ------------------------------------------------------------------- */
