/* ------------------------pre-fetching----------------------------------
function CurrentUserInfo() {
    const currentUser = useRecoilValue(currentUserInfoQuery);
    const friends = useRecoilValue(friendsInfoQuery);
  
    const changeUser = useRecoilCallback(({snapshot, set}) => (userID) => {
      snapshot.getLoadable(userInfoQuery(userID)); // pre-fetch user info
      set(currentUserIDState, userID); // change current user to start new render
    });
  
    return (
      <div>
        <h1>{currentUser.name}</h1>
        <ul>
          {friends.map((friend) => (
            <li key={friend.id} onClick={() => changeUser(friend.id)}>
              {friend.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  --------------------------------------------------------------------- */
