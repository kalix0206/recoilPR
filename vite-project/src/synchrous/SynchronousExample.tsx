import { atom, selector, selectorFamily, useRecoilValue } from "recoil";

const currentUserIDState = atom({
  key: "CurrentUserID",
  default: 1,
});

// Synchronous Example -------------------------------------
// const currentUserNameState = selector({
//   key: "CurrentUserName",
//   get: ({ get }) => {
//     return tableOfUsers[get(currentUserIDState)].name;
//   },
// });
/////////////////////////////////////////////////////////////
const CurrentUserInfo = () => {
  const userName = useRecoilValue(currentUserNameState);
  return <div>{userName}</div>;
};

// Asynchronous Example -------------------------------------
// const currentUserNameQuery = selector({
//   key: "CurrentUserName",
//   get: async ({ get }) => {
//     const response = await myDBQuery({
//       userID: get(currentUserIDState),
//     });
//     if(response.error) {
//       throw response.error;
//     }
//     return response.name;
//   },
// });
//
//  --> before response, rendering nothing ==> use React Suspense
//
//      <React.Suspense fallback = {<div>Loading...</div>}>
//          <CurrentUserInfo
//      </React.Suspense>
//
//////////////////////////////////////////////////////////////

/* -----------------Async Queries without react suspense -----
function UserInfo({userID}) {
  const userNameLoadable = useRecoilValueLoadable(userNameQuery(userID));
  switch (userNameLoadable.state) {
    case 'hasValue':
      return <div>{userNameLoadable.contents}</div>;
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw userNameLoadable.contents;
  }
}

------------------------------------------------------------ */

// using Queries with Parameters -----------------------------
// const userNameQuery = selectorFamily({
//   key: "UserName",
//   get: (userID) => async () => {
//     const response = await myDBQuery({ userID });
//     if (response.error) {
//       throw response.error;
//     }
//     return response.name;
//   },
// });
//    <ErrorBoundary>
//      <React.Suspense fallback={<div>Loading...</div>}>
//          <UserInfo userID={1} />
//          <UserInfo userID={2} />
//          <UserInfo userID={3} />
//      </React.Suspense>
//    </ErrorBoundary>
///////////////////////////////////////////////////////////////
