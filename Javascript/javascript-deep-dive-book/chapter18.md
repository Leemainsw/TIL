# 🔎 함수와 일급 객체

## ✨ 일급 객체

일급 객체의 조건

1. 무명의 리터럴로 생성할 수 있다 -> 런타임에 생성이 가능하다
2. 변수나 자료구조(객체, 배열)에 저장할 수 있다.
3. 함수의 매개변수에 전달할 수 있다.
4. 함수의 반환값으로 사용할 수 있다.

자바스크립트의 함수는 다음 예제와 같이 위의 조건을 모두 만족하기 때문에 일급 객체입니다.

```javascript
// 1. 함수는 무명의 리터럴로 생성할 수 있다.
// 2. 함수는 변수에 저장할 수 있다.
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당 된다.
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

// 2. 함수는 객체에 저장할 수 있다.
const auxs = { increase, decrease };

// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(aux) {
  let num = 0;
  return function () {
    num = aux(num);
    return num;
  };
}

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(auxs.increase);
console.log(increaser());
console.log(increaser());

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const decreaser = makeCounter(auxs.decrease);
console.log(decreaser());
console.log(decreaser());
```

함수가 일급 객체라는 것은 **함수를 객체와 동일하게 사용**할 수 있다는 의미입니다. 일급 객체로서 함수가 가지는 가장 큰 특징은 일급 객체와 같이 **함수의 매개변수에 전달**할 수 있으며, **함수의 반환값으로도 사용**할 수 있다는 점입니다. 이는 함수형 프로그래밍을 가능케 하는 자바스크립트의 장점 중 하나입니다.

## ✨ 함수 객체의 프로퍼티

함수는 객체이기 때문에 프로퍼티를 가질 수 있습니다.
함수를 생성하고 `console.dir` 로 내용을 출력한다면 `arguments`, `caller`, `length`, `name`, `prototype` 프로퍼티가 출력됩니다. 프로퍼티는 모두 함수 객체의 데이터 프로퍼티입니다. `__proto__` 는 접근자 프로퍼티이며 함수 객체 고유의 프로퍼티가 아닌 Object.prototype 객체의 프로퍼티를 상속받은 것을 할 수 있습니다.

### 👀 arguments 프로퍼티

함수 객체의 `arguments` 프로퍼티 값은 arguments 객체입니다. 이 객체는 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회 가능한 유사 배열 객체이며, 함수 내부에서 지역 변수처럼 사용됩니다.

이 프로퍼티는 현재 일부 브라우저에서는 지원하고 있지만 ES3 표준에서 폐지되었기 때문에 `Function.arguments`와 같은 사용법은 권장되지 않고 함수 내부에서 지역 변수처럼 사용할 수 있는 `arguments` 객체를 함조하도록 합니다.

```javascript
function multiply(x, y) {
  console.log(arguments);
  return x * y;
}

console.log(multiply()); // NaN
console.log(multiply(1)); // NaN
console.log(multiply(1, 2)); // 2
console.log(multiply(1, 2, 3)); // 2
```

함수를 정의할 때 선언한 매개변수는 함수 몸체 내부에서 변수와 동일하게 취급됩니다. 즉, 함수가 호출되면 함수 몸체 내에서 암묵적으로 매개변수가 선언되고 `undefined`로 초기화된 이후 인수가 할당됩니다.

`arguments` 객체는 인수를 프로퍼티 값으로 소유하며 프로퍼티 키는 인수의 순서를 나타냅니다. `arguments` 객체는 매개변수 개수를 확정할 수 없는 **가변 인자 함수**를 구현할 때 유용합니다.

```javascript
function sum() {
  let res = 0;

  // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for문으로 순환 가능
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}

console.log(sum()); // 0
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6
```

### 👀 caller 프로퍼티

`caller` 프로퍼티는 ECMAScript 사양에 포함되지 않은 비표준 프로퍼티입니다. 함수 객체의 `caller` 프로퍼티는 함수 자신을 호출한 함수를 가리킵니다.

```javascript
function foo(func) {
  return func();
}

function bar() {
  return 'caller : ' bar.caller;
}

console.log(foo(bar)) // caller : function foo(func) {...}
console.log(bar()) // caller : null
```

### 👀 length 프로퍼티

함수 객체의 `length` 프로퍼티는 함수를 정의할 때 선언한 매개변수의 개수를 가리킵니다.

```javascript
function foo() {}
console.log(foo.length); // 0

function bar(x) {
  return x;
}
console.log(bar.length); // 1

function baz(x, y) {
  return x;
}
console.log(baz.length); // 2
```

`arguments` 객체의 `length` 프로퍼티와 함수 객체의 `length` 프로퍼티의 값은 다를 수 있으므로 주의해야 합니다. `arguments` 객체의 `length` 프로퍼티는 인자의 개수를 가리키고 함수 객체의 `length` 프로퍼티는 매개변수의 개수를 가리킵니다.

### 👀 name 프로퍼티

함수 객체의 `name` 프로퍼티는 함수 이름을 나타냅니다. ES6에서 정식 표준이 되었습니다.

```javascript
// 가명 함수 표현식
var namedFunc = function foo() {};
console.log(namedFunc.name); // foo

// 익명 함수 표현식
var annoymousFunc = function () {};
// ES5: name 프로퍼티는 빈 문자열을 값으로 갖는다.
// ES6: name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다.
console.log(annoymousFunc.name); // annoymousFunc
```

### 👀 `__proto__` 접근자 프로퍼티

모든 객체는 [[Prototype]] 이라는 내부 슬롯을 갖습니다. [[Prototype]] 내부 슬롯은 객체지향 프로그래밍의 상속을 구현하는 프로토타입 객체를 가리킵니다.

`__proto__` 프로퍼티는 [[Prototype]] 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티입니다.

```javascript
const obj = { a: 1 };
// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype이다.
console.log(obj.__proto__ === Object.prototype); // true

// hasOwnProperty 메서드는 Object.prototype의 메서드이다.
// 객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를  상속 받는다.
console.log(obj.hasOwnProperty("a")); // true
console.log(obj.hasOwnProperty("__proto__")); // false
```

### 👀 prototype 접근자 프로퍼티

`prototype` 프로퍼티는 생성자 함수로 호출할 수 있는 함수 객체, 죽 `constructor` 만이 소유하는 프로퍼티이입니다. 일반 객체와 생성자 함수로 호출할 수 없는 `non-constructor` 에는 `prototype` 프로퍼티가 없습니다.

```javascript
(function () {}.hasOwnProperty("prototype")); // true
({}.hasOwnProperty("prototype")); // false
```

`prototype` 프로퍼티는 함수가 객체를 생성하는 생성자 함수로 호출될 때 생성자 함수가 생성할 인스턴스의 프로토타입 객체를 가리킵니다.
