# 🔎 객체 리터럴

## ✨ 객체란?

자바스크립트는 객체 기반의 프로그래밍 언어입니다. 원시 타입은 단 하나의 값만 나타내지만 객체 타입은 다양한 타입의 값을 하나의 단위로 구성한 복합적인 자료구조 입니다.

**원시 타입의 값, 즉 원시 값은 변경 불가능한 값이지만 객체 타입의 값, 즉 객체는 변경 가능한 값입니다.**

객체는 무엇일까요? 객체는 0개 이상의 프로퍼티 및 메서드 로 구성된 집합체이며, 프로퍼티는 키(key)와 값(value)로 구성됩니다.

자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 값이 될 수 있습니다. 자바스크립트의 함수는 일급 객체이므로 값으로 취급할 수 있습니다. 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 '메서드'라고 합니다.

**역할**

- 프로퍼티: 객체의 상태를 나타내는 값
- 메서드: 프로퍼티를 참조하고 조작할 수 있는 동작

```js
var person = {
  name: "Lee",
  age: 20,
  // name = key, 'Lee' = value
  // name: 'Lee', age: 20 => 프로퍼티
};
```

객체지향 프로그래밍은 무엇일까요? 객체지향 프로그래밍이란, 객체의 집합으로 프로램을 표현하려는 프로그래밍 패러다임입니다.

## ✨ 객체 리터럴에 의한 객체 생성

### 👀 자바스크립트의 객체 생성 방법

C++이나 JAVA 같은 클래스 기반 객체지향 언어는 객체를 어떻게 생성하는지 아시나요? 바로 클래스를 사전에 정의하고 필요한 시점에 new 연산자와 함께 생성자를 호출하여 인스턴스를 생성하는 방식으로 객체를 생성합니다

- 여기서 인스턴스란 클래스에 의해 생성되어 메모리에 저장된 실체를 이야기합니다.

자바스크립트는 프로토타입 기반 객체지향 언어로서 클래스 기반 객체지향 언어와는 달리 다양한 객체 생성 방법을 지원합니다.

- 객체 리터럴 -> 가장 일반적이고 간단한 방법
- Object 생성자 함수
- 생성자 함수
- Object.create 메서드
- 클래스 (ES6)

```js
// 객체 리터럴로 객체 생성하기
var person = {
  name: "Lee",
  sayHello: function () {
    console.log(`Hello My Name is ${this.name}`);
  },
};

console.log(typeof person); // object
```

객체 리터럴은 자바스크립트의 유연함과 강력함을 대표하는 객체 생성 방식입니다. 객체를 생성하기 위해 클래스를 먼저 정의하고 new 연산자와 함께 생성자를 호출할 필요가 없습니다.

객체 리터럴 이외의 객체 생성 방식은 모두 함수를 사용해 객체를 생성합니다.

## ✨ 프로퍼티

객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성됩니다.

```js
var person = {
  // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
  firstName: 'Ung-moo'
  // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
  'last-name': 'Lee'
  age: 20,
};

- 프로퍼티 키: 빈 문자열을 포함하는 모든 문자열 또는 심벌 값
- 프로퍼티 값: 자바스크립트에서 사용할 수 있는 모든 값
```

위의 예제처럼 프로퍼티 키는 식별자 네이밍 규칙을 사용해야 하며, 사용하지 않을 경우 이름에 반드시 따옴표를 사용해야 합니다.

```js
var obj = {};
var key = "hello";

obj[key] = "world";
console.log(obj); // {hello: 'world'}
```

문자열 또는 문자열로 평가할 수 있는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있습니다. 위의 예제의 출력값을 예상해봅시다.

```js
var foo = {
  name: "Lee",
  name: "Kim",
};
console.log(foo); // {name: 'Kim'}
```

이미 존재하는 프로퍼티 키를 중복 선언하면 무슨 일이 일어나는지 위의 코드를 통해 결과를 예상해봅시다. 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어씁니다.

## ✨ 메서드

자바스크립트의 함수는 객체 (일급 객체)이기 때문에 (= 값으로 취급할 수 있기 때문에) 프로퍼티 값으로 사용할 수 있습니다.

```js
var circle = {
  radius: 5,
  getDiameter: function () {
    return 2 * this.radius;
  },
};

circle.getDiameter(); // 10
```

## ✨ 프로퍼티 접근

**프로퍼티에 접근하는 2가지 방법**

- 마침표 프로퍼티 접근 연산자를 사용하는 마침표 표기법
- 대괄호 프로퍼티 접근 연산자를 사용하는 대괄호 표기법

```js
var person = {
  name: "Lee",
};

console.log(person.name); // 'Lee'
console.log(person["name"]); // 'Lee'
console.log(person[name]); // ReferenceError
console.log(person.age); // undefined
```

위의 예제의 결과를 예상해봅시다.

대괄호 표기법을 사용하는 경우 대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이여야 합니다. 만약, 따옴표로 감싸지 않은 이름을 프로퍼티 키로 사용한다면 자바스크립트 엔진은 식별자로 해석하기 때문에 ReferenceError 오류가 납니다.

객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환합니다.

아래 예제의 결과를 예상해봅시다.

```js
var person = {
  'last-name': 'Lee',
  1: 10
};

person.'last-name'; // SyntaxError
person.last-name // 브라우저 -> NaN / NodeJS -> ReferenceError
person[last-name] // ReferenceError
person['last-name'] // 'Lee'

person.1; // SyntaxError
person.'1'; // SyntaxError
person[1]; // 10 -> 숫자 1이 문자열 1로 변경된다.
person['1'] // 10
```

## ✨ 프로퍼티 값 갱신

예제를 보고 간단하게 넘어가도록 하겠습니다.

```js
var person = {
  name: "Lee",
};

person.name = "Kim";
person["name"] = "So";
```

## ✨ 프로퍼티 동적 생성

예제를 보고 간단하게 넘어가도록 하겠습니다.

```js
var person = {
  name: "Lee",
};

person.age = 20;
```

## ✨ 프로퍼티 삭제

예제를 보고 간단하게 넘어가도록 하겠습니다.

```js
var person = {
  name: "Lee",
};
person.age = 20;

// person 객체에 age 프로퍼티가 존재한다.
// 따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있다.
delete person.age;

// person 객체에 address 프로퍼티가 존재하지 않는다.
// 따라서 delete 연산자로 address 프로퍼티를 삭제할 수 없다.
// 하지만, 이때 에러가 발생하지는 않는다.
delete person.address;
```

## ✨ ES6에서 추가된 객체 리터럴의 확장 기능

### 👀 프로퍼티 축약 표현

ES6에서는 프로퍼티 값으로 변수를 사용하는 경우 **변수 이름과 프로퍼티 키가 동일한 이름일 때** 프로퍼티 키를 생략할 수 있습니다. 이때, 프로퍼티 키는 변수 이름으로 자동 생성됩니다.

```js
let x = 1,
  y = 2;
// 프로퍼티 축약 표현
const obj = { x, y };
console.log(obj); //{x: 1, y: 2}
```

### 👀 계산된 프로퍼티 이름

계산된 프로퍼티 이름이란 문자열 또는 문자열로 타입 변환할 수 있는 값으로 평가되는 표현식을 사용해 프로퍼티 키를 동적으로 생성하는 것입니다.

```js
const prefix = 'prop';
let i = 0;

const obj = {
  [`${prefix-${++i}}`]: i,
  [`${prefix-${++i}}`]: i,
  [`${prefix-${++i}}`]: i
};

console.log(obj) // {prop-1: 1, prop-2: 2, prop-3: 3}
```

### 👀 계산된 프로퍼티 이름

ES5에서 메서드를 정의하려면 프로퍼티 값으로 함수를 할당해야 했지만 ES6에서는 메서드를 정의할 때 function 키워드를 생략한 축약 표현을 사용할 수 있게 되었습니다.

다만 메서드 축약 표현으로 정의한 메서드는 프로퍼티에 할당된 함수와 다르게 동작합니다.

```js
const obj = {
  name: "Lee",
  // ES6 메서드 축약 표현
  sayHi() {
    console.log("Hi! " + this.name);
  },
  // ES5
  sayBye: function () {
    console.log("Bye! " + this.name);
  },
};
```
