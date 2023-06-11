<!-- prettier-ignore-start -->
# recoilPR

recoil ---

## State

# atom()
- read by useRecoilState(), useRecoilValue()
# selector()
- It is a pure function that accepts atoms or other selectors as input.
- 상위 atoms, selectors가 업데이트되면, 하위의 selector 함수도 재실행
- no writeable
- read by only useRecoilValue()

const fontSizeLabelState = selector({
    key : 'fontSizeLabelState',
    get : ({get}) => {
        const fontSize = get(fontSizeState);    // 종속 관계(about Rendering)
        const unit = 'px';

        return `${fontSize}${unit}`;
    }

})

- # usage : 최소한의 상태 집합만 atoms에 저장 ==> 파생 데이터는 selector를 사용하여 계산

Loadable

# useRecoilState()

- similar with useState(), but can shared among components.

# useRecoilValue()

# useSetRecoilState()

# useResetRecoilState()

# useRecoilStateLoadable()
- return loadable having interface
- using with react suspense
- hasValue | loading | hasError

function UserInfo({userID}) {
  const [userNameLoadable, setUserName] = useRecoilStateLoadable(userNameQuery(userID));
  switch (userNameLoadable.state) {
    case 'hasValue':
      return <div>{userNameLoadable.contents}</div>;
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw userNameLoadable.contents;
  }
}
# useRecoilValueLoadable()

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

# useGetRecoilValueInfo()

# useRecoilRefresher()

# isRecoilValue()

## Util

useRecoilTransaction()

useRecoilCallback()

<!-- prettier-ignore-end -->
