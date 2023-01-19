# 🔎 let, const 키워드와 블록 레벨 스코프

## ✨ var 키워드로 선언한 변수의 문제점

ES5까지 변수를 선언할 수 있는 유일한 방법은 `var` 키워드를 사용하는 것이었습니다. `var` 키워드로 선언한 변수의 문제점을 알아보도록 하겠습니다.

### 👀 변수 중복 선언 허용

var 키워드로 선언한 변수는 중복 선언이 가능합니다. 이는 의도치 않게 먼저 선언된 변수 값이 변경되는 부작용을 발생시킬 수 있습니다.

```javascript
var x = 1;
var y = 1;

// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용합니다.
// 초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 작동됩니다.
var x = 100;
// 초기화문이 없는 변수 선언문은 무시됩니다.
var y;

console.log(x); // 100
console.log(y); // 1
```

### 👀 함수 레벨 스코프

`var` 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정합니다. 함수 레벨 스코프는 전역 변수를 남발할 가능성을 높이고 이로 인해 의도치 않게 전역 변수가 중복 선언되는 경우가 발생할 수 있습니다.

```javascript
var x = 1;

if (true) {
  var x = 10;
}

console.log(x); // 10
```

```javascript
var i = 10;

for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i); // 5
```

### 👀 변수 호이스팅

`var` 키워드로 변수를 선언하면 변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 끌어 올려진 것처럼 동작합니다. 변수 선언문 이전에 변수를 참조하는 것은 변수 호이스팅에 의해 에러를 발생시키지는 않지만 **프로그래밍의 흐름상 맞지 않으며 가독성을 떨어뜨리고 오류를 발생시킬 여지를 남깁니다.**

```javascript
console.log(foo); // undefined
foo = 123;
console.log(foo);
var foo;
```

## ✨ let 키워드

앞의 `var` 키워드의 단점을 보완하기 위해 ES6에서는 변수 선언 키워드인 `let` 과 `const` 키워드를 도입했습니다. `var` 키워드와의 차이점을 중심으로 `let` 키워드를 알아보겠습니다.

### 👀 변수 중복 선언 금지

`var` 키워드로 이름이 동일한 변수를 중복 선언하면 아무런 에러가 발생하지 않습니다. 하지만 `let` 키워드로 이름이 같은 변수를 중복 선언하면 문법 에러가 발생합니다.

```javascript
var foo = 123;
var foo = 456;

let bar = 123;
let bar = 456; // SyntaxError: Identifier 'bar' has already been declared
```

### 👀 블록 레벨 스코프

`var` 키워드로 선언한 변수는 오로지 함수의 코드 블록만은 지역 스코프로 인정하는 함수 레벨 스코프를 따르지만 `let` 키워드로 선언한 변수는 모든 코드 블록을 지역 스코프로 인정하는 블록 레벨 스코프를 따릅니다.

```javascript
let foo = 1; // 전역 변수
{
  let foo = 2; // 지역 변수
  let bar = 3; // 지역 변수
}
console.log(foo); // 1
console.log(bar); // ReferenceError: bar is not defined
```

### 👀 변수 호이스팅

`var` 키워드로 선언한 변수와 달리 `let` 키워드로 선언한 변수는 변수 호이스팅이 발생하기 않는 것처럼 동작합니다.

```javascript
console.log(foo); // ReferenceError: foo is not defined
let foo;
```

4장에서 알아본 것과 같이 `var` 키워드로 선언한 변수는 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 선언 단게와 초기화 단게가 **함께** 진행됩니다. 하지만, `let` 키워드로 선언한 변수는 선언 단계와 초기화 단계가 **분리되어 진행**됩니다. 즉, 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 선언 단계가 먼저 실행되지만 초기화 단계는 변수 선언문에 도달했을 때 실행됩니다. 만약 초기화 단계가 실행되기 이전에 변수에 접근하려고 하면 참조 에러가 발생합니다.

`let` 키워드로 선언한 변수는 스코프의 시작 지점부터 초기화 단계 시작 지점까지 변수를 참조할 수 없습니다. 스코프의 시작 지점부터 초기화 단계 시작 지점까지 변수를 참조할 수 없는 구간을 **일시적 사각지대(TDZ)**라고 부릅니다.

하지만 변수 호이스팅이 발생하지 않는 것이 아닙니다. 아래의 예제의 경우 변수 호이스팅이 발생하지 않는다면 전역 변수 `foo` 의 값을 출력해야하지만 참조 에러가 납니다.

```javascript
let foo = 1;
{
  console.log(foo); // ReferenceError
  let foo = 2;
}
```

### 👀 전역 객체와 let

`var` 키워드로 선언한 전역 변수와 전역 함수, 그리고 선언하지 않은 변수에 값을 할당한 암묵적 전역은 전역 객체 `window`의 프로퍼티가 됩니다. 전역 객체의 프로퍼티를 참조할 때 window를 생략할 수 있습니다.

```javascript
var x = 1;
y = 2;
function foo() {}
console.log(window.x); // 1
console.log(x); // 1

console.log(window.y); // 2
console.log(y); // 2

console.log(window.foo); // f foo(){}
console.log(foo); // f foo(){}
```

```javascript
let x = 1;
// let, const로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아닙니다.
console.log(window.x); // undefined
console.log(x); // 1
```

`let` 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니기 때문에 `window.foo` 와 같이 접근할 수 없습니다. `let` 전역 변수는 보이지 않는 개념적인 블록 내에 존재하게 됩니다.

## ✨ const 키워드

`const` 키워드는 상수를 선언하기 위해 사용됩니다. `const` 키워드의 특징은 `let` 키워드와 대부분 동일하기 떄문에 `let` 키워드와 다른 점을 중심으로 살펴보겠습니다.

### 👀 선언과 초기화

`const` 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 합니다.

```javascript
const foo; // SyntaxError: Missing initializer in const declaration
```

`const` 키워드로 선언한 변수는 `let` 키워드로 선언한 변수와 마찬가지로 블록 레벨 스코프를 가지며, 변수 호이스팅이 발생하지 않는 것처럼 동작합니다.

```javascript
{
  console.log(foo); // ReferenceError
  const foo = 1;
  console.log(foo); // 1
}
console.log(foo); // ReferenceError
```

### 👀 재할당 금지

`var` 키워드 또는 `let` 키워드로 선언한 변수는 재할당이 자유롭지만 **`const` 키워드로 선언한 변수는 재할당이 금지 됩니다.**

```javascript
const foo = 1;
foo = 2; // TypeError: Assignment to constant variable.
```

### 👀 상수

`const` 키워드로 선언한 변수에 원시 값을 할당한 경우 변수 값을 변경할 수 없습니다. 이러한 특징을 이용해 `const` 키워드를 상수를 표현하는데 사용하기도 합니다.

변수의 상대 개념인 **상수는 재할당이 금지된 변수**를 말합니다. 상수는 상태 유지와 가독성, 유지보수의 편의를 위해 적극적으로 사용해야 합니다.

```javascript
let preTaxPrice = 100;

let afterTaxPrice = preTaxPrice + preTaxPrice * 0.1;

console.log(afterTaxPrice); // 110
```

여기서 `0.1`이라는 값은 쉽게 바뀌지 않는 값이며 프로그램 전체에서 고정된 값을 사용해야하기 때문에 세율을 상수로 정의하면 값의 의미를 쉽게 파악할 수 있으며 변경될 수 없는 고정값으로 사용할 수 있습니다. 이는 유지보수성을 대폭 향상할 수 있습니다.

`const` 키워드로 선언된 변수에 원시 값을 할당한 경우 원시 값은 변경할 수 없는 값이고 `const` 키워드에 의해 재할당이 금지되므로 할당된 값을 변경할 수 있는 방법은 없습니다.

### 👀 const 키워드와 객체

**`const` 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있습니다.**

```javascript
const person = {
  name: "Lee",
};
person.name = "Kim";
console.log(person); // { name: 'Kim' }
```

`const` 키워드는 재할당을 금지할 뿐 '불변'을 의미하지는 않습니다. 이는 새로운 값을 재할당하는 것은 불가능하지만 프로퍼티 동적 생성, 삭제, 프로퍼티 값의 변경을 통해 객체를 변경하는 것은 가능하다는 것입니다.

## ✨ var vs let vs const

변수 선언에는 기본적으로 `const` 를 사용하고 `let` 은 재할당이 필요한 경우에 한정해 사용하는 것이 좋습니다. `const` 키워드를 사용하면 의도치 않은 재할당을 방지하기 때문에 좀 더 안전합니다.

- ES6를 사용한다면 `var` 키워드는 사용하지 않는다.
- 재할당이 필요한 경우에 한정해 `let` 키워드를 사용한다. 이때 변수의 스코프는 최대한 좁게 만든다.
- 변경이 발생하지 않고 읽기 전용으로 사용하는 원시 값과 객체에는 `const` 키워드를 사용한다
