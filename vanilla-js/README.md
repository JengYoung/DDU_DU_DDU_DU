# VanillaJS

## 목적

> 목적은 계속해서 만들고 싶으면 todo list를 점점 확장하며 세운다.

### Router 컴포넌트를 만들어 보자. (0.0.0)

#### 배경

기본적으로 `router`에 관한 history 이동 로직은 모던한 웹 개발에 있어 페이지를 이동하는 데 있어 매우 빈번히 사용하는 로직이다.  
그러나, `Vanilla JS`에서 이를 클래스화 시켜서 재사용하며 사용한 기억은 없었던 듯하다.  
앞으로 `Vanilla JS`로 개발할 때, 재사용해보고자 라우터 컴포넌트를 이번 `DDU-DU`에 추가한다.  

또한, 정규표현식으로 충분히 라우트를 찾을 수 있을 것 같다.  
페이지 전환에 있어 올바른 경로를 **반드시** 정규표현식으로 구현해야 한다.

- [x] todo에 관한 여러 detail들을 넘어갈 수 있어야 한다.
- [x] replace, push, back 메서드를 구현할 수 있어야 한다.
- [x] 넘어가는 동시에, 페이지를 라우트할 수 있는 `route`를 구현할 수 있어야 한다. 이때, 조건은 무조건 정규표현식으로 구현해낸다.
- [x] React에서 아쉬운 게 있다. 바로 라우트의 메타 정보이다. 네비게이션 가드 로직도 이때 세워주면서 Meta 정보를 넘겨주면 어떨까 싶다.

#### 🍀 Expected Growth Point

Redirect를 위한 라우트 이동 전환 상태 관리는 굉장히 중요하다.  
특히 이는 인증이나, 다른 페이지 전환을 위한 에니메이션을 작동할 때 굉장히 유용하다.  
이번에 직접 이를 구현하면서, 어떻게 내부적으로 라우트 이동에 관해서 관리하고 있을지 유추할 수 있는 즐거움을 느낄 수 있다.  

### 🔥 Pain Point

#### 완전 일치 정규표현식

완전히 일치하는 문자열을 정규표현식으로 어떻게 찾을 수 있을지 고민했다.  
결과적으로 `^`와 `$`로 현재 기준, 엄격하게 원하는 pathname을 검사할 수 있었다.

예컨대, 다음 정규식은 이러한 엄격한 정규식 검사를 체크할 수 있다.

```js
const regex = /^1$/

console.log(regex.test('1')); // true
console.log(regex.test('11')); // false
```

### 🌙 Next

> 이 챕터는 다음에 할 일을 미래의 내가 기억하기 위해 기록하는 파트이다.

#### params를 개발합시다.

현재의 `params`를 기억해주면 좋을 것 같다.  
이를 통해 현재의 데이터에 대한 정보를 빠르게 검색할 수 있기 때문이다.

> 아마 이를 개발하는 것이 우선적인 다음 목표가 되지 않을까 싶다.

#### RoutePage 컴포넌트 개발

페이지의 경우 `RouteHistory`라는 특정한 파라미터를 갖고 있으며, 이는 페이지에서 항상 공통적으로 사용된다.  
추후 확장성을 용이하게 하기 위해 이 로직을 상위 컴포넌트로 분리하고, 이를 상속하며 관리하는 것이 좋을 것 같다.