# 🔎 strict mode

## ✨ strict mode 란?

`strict mode` 란 자바스크립트 언어의 문법을 더 엄격히 적용하여 오류를 발생시킬 가능성이 높거나 자바스크립트 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대한 명시적인 에러를 발생시킵니다.

## ✨ strict mode의 적용 방법

전역의 선두 또는 함수 몸체의 선두에 `use strict` 를 추가합니다.

전역 선두

- 스크립트 전체에 strict mode가 적용됨

함수 몸체

- 해당 함수와 중첩 함수에 strict mode가 적용됨

## ✨ strict mode 적용을 피해야하는 상황

아래의 예제와 같이 스크립트 단위로 적용된 `strict mode`는 다른 스크립트에 영향을 주지 않고 해당 스크립트에 한정되어 적용됩니다.

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      "use strict";
    </script>
    <script>
      x = 1; // OK
    </script>
    <script>
      "use strict";
      y = 1; // Reference Error
    </script>
  </body>
</html>
```

### 👀 전역에 strict mode 적용하는 것은 피하자

`strict mode` 와 `non-strict mode` 를 혼용하는 것은 오류를 발생시킬 수 있습니다. 특히 외부 서드파티 라이브러리를 사용하는 경우 라이브러리가 `non-strict mode` 인 경우도 있기 때문에 전역에서 `strict mode` 를 적용하는 것은 바람직하지 않습니다.

-> 이럴 때에는 즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수의 선두에 `strict mode`를 적용하는 것이 좋습니다.

### 👀 함수 단위로 strict mode 적용하는 것은 피하자

모든 함수에 일일이 `strict mode` 를 적용하는 것은 번거로운 일입니다. 또한, `strict mode` 가 적용된 함수가 참조할 함수 외부의 컨텍스트에 `strict mode` 를 적용하지 않는다면 문제가 발생할 수 있습니다.

```javascript
(function () {
  // non strict mode
  var let = 10;

  function foo() {
    "use strict";
    let = 20; // SyntaxError
  }

  foo();
})();
```

-> `strict mode`는 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직 합니다.

## ✨ strict mode가 발생시키는 에러

1. 암묵적 전역

- 선언하지 않은 변수를 참조하면 `ReferenceError` 발생

2. 변수, 함수, 매개변수의 삭제

- `delete` 연산자로 변수, 함수, 매개변수를 삭제하면 `SyntaxError` 발생

3. 매개변수 이름의 중복

- 중복된 매개변수 이름을 사용하면 `SyntaxError` 발생

4. `with` 문의 사용

- `with` 문을 사용하면 `SyntaxError` 발생한다.

`with` 문은 동일한 객체의 프로퍼티를 반복해서 사용할 때 객체 이름을 생략할 수 있어서 코드가 간단해지지만 성능과 가독성이 나빠지는 문제가 있습니다.

## ✨ strict mode 적용에 의한 변화

1. 일반 함수의 this

- `strict mode` 에서 일반 함수로서 호출하면 `this` 에 `undefined` 가 바인딩된다.

```javascript
(function () {
  "use strict";
  function foo() {
    console.log(this); // undefined
  }
  foo();
  function Foo() {
    console.log(this); // Foo
  }
  new Foo();
})();
```

2. arguments 객체

- `strict mode` 에서는 배개변수에 전달된 인수를 재할당하여 변경해도 `arguments` 객체에 반영되지 않는다.
