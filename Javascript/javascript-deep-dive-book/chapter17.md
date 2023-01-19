# 🔎 생성자 함수에 의한 객체 생성

## ✨ Object 생성자 함수

`new` 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환합니다.

```javascript
const person = new Object();

person.name = "Lee";
person.sayHello = function () {
  console.log("Hello my name is " + this.name);
};

console.log(person); // {name: 'Lee', sayHello: F}
```

생성자 함수란 `new` 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 이야기합니다. 객체를 생성하는 방법은 객체 리터럴을 사용하는 것이 더 간편합니다.

## ✨ 생성자 함수

### 👀 객체 리터럴에 의한 객체 생성 방식의 문제점

객체 리터럴에 의한 객체 생성 방식은 직관적이고 간편한 반면에 단 하나의 객체만 생성합니다. 따라서 **동일한 프로퍼티를 갖는 객체를 여러개 생성해야하는 경우 비효율적입니다.**

### 👀 생성자 함수에 의한 객체 생성 방식의 장점

생성자 함수에 의한 객체 생성 방식으로 객체를 생성하기 위한 템플릿처럼 생성자 함수를 사용하여 ㅍ로퍼티 구조가 동일한 객체 여러개를 간편하게 생성할 수 있습니다.

```javascript
function Cirble(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle1 = new Circle(5);
const circle2 = new Cirble(10);
```

`new` 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작하며 그것이 아니라면 일반 함수로 동작합니다.

### 👀 생성자 함수의 인스턴스 생성 과정

생성자 함수의 역할은 인스턴스를 생성하는 것과 생성된 인스턴스를 초기화하는 것입니다.

**1. 인스턴스 생성과 this 바인딩**  
인스턴스는 `this` 에 바인딩 됩니다. 이 처리는 함수 몸체의 코드가 한 줄씩 실행되는 런타임 이전에 실행됩니다.

```javascript
function Circle(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
  console.log(this); // CIrcle {}
}
```

**2. 인스턴스 초기화**

생성자 함수에 기술되어 있는 코드가 한 줄씩 실행되어 `this` 에 바인딩 되어 있는 인스턴스를 초기화 합니다.

```javascript
function Circle(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
  console.log(this); // CIrcle {}

  // 2. this에 바인딩 되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
```

**3. 인스턴스 반환**
생성자 함수 내부의 모든 처리가 끝나면 환성된 인스턴스가 바인딩된 this가 암묵적으로 반환됩니다.

```javascript
function Circle(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
  console.log(this); // CIrcle {}

  // 2. this에 바인딩 되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
}

// 인스턴스 생성, Circle 생성자 함수는 암묵적으로 this를 반환한다.
const circle = new Circle(1);
```

만약 `this` 가 아닌 다른 객체를 명시적으로 반환하면 `this` 가 반환되지 못하고 return 문에 명시한 객체가 반환됩니다.

```javascript
function Circle(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
  console.log(this); // CIrcle {}

  // 2. this에 바인딩 되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
  // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
  return {};
}

// 인스턴스 생성, Circle 생성자 함수는 암묵적으로 this를 반환한다.
const circle = new Circle(1);
```

명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 `this` 가 반환됩니다.

```javascript
function Circle(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
  console.log(this); // CIrcle {}

  // 2. this에 바인딩 되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
  // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
  return 100;
}

// 인스턴스 생성, Circle 생성자 함수는 암묵적으로 this를 반환한다.
const circle = new Circle(1);
```

이처럼 생성자 함수 내부에서 명시적으로 `this` 가 아닌 다른 값을 반환하는 것은 **생성자 함수의 기본 동작을 훼손**합니다.

### 👀 내부 메서드 [[Call]] 과 [[Construct]]

함수는 객체이므로 일반 객체가 가지고 있는 내부 슬롯과 내부 메서드를 모두 가지고 있습니다.

```javascript
// 함수는 객체다
function foo() {}

// 객체이기 때문에 프로퍼티를 소유할 수 있다.
foo.prop = 10;
// 객체이기 때문에 메서드를 소유할 수 있다.
foo.method = function () {
  console.log(this.prop);
};
```

함수는 객체이지만 일반 객체와 다릅니다. **일반 객체와는 다르게 함수는 호출이 가능합니다** 따라서 `[[Environment]]`, `[[FormalParmeters]]` 등의 내부 슬롯과 `[[Call]]`, `[[Construct]]` 같은 내부 메서드를 추가로 가지고 있습니다.

함수가 일반 함수로서 호출되면 함수 객체 내부 메서드 `[[Call]]` 이 호출되고 `new` 연산자와 함께 생성자 함수로서 호출되면 내부 메서드 `[[Construct]]`가 호출됩니다.

**모든 함수 객체는 callable이지만 모든 함수 객체가 constructor인 것은 아닙니다.**

### 👀 constructor와 non-constructor의 구분

내부 메서드 [[Construct]]를 갖지 않는 함수 객체를 `non-constructor` 이라고 부르며 내부 메서드 [[Construct]]를 갖는 함수는 `constructor` 이라고 부릅니다.

자바스크립트는 어떻게 `constructor` 와 `non-constructor`를 구분할까요? 자바스크립트 엔진은 함수 정의를 평가하여 함수 객체를 생성할 때 함수 정의 방식에 따라서 함수를 구분합니다.

```javascript
// 일반 함수 정의: 함수 선언문, 함수 표현식
function foo() {}

const bar = function () {};

// 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수입니다.
// 이는 메서드로 인정하지 않습니다.
const baz = {
  x: function () {},
};

new foo(); // OK
new bar(); // OK
new baz.x(); // x {}

const arrow = () => {};
new arrow(); // TypeError

const obj = {
  x() {},
};

new obj.x(); // TypeError
```

함수가 어디에 할당되어 있는지에 따라 메서드인지를 판단하는 것이 아니라 함수 정의 방식에 따라서 `constructor` 와 `non-constructor`를 구분합니다. 즉, 함수 선언문과 함수 표현식으로 정의된 함수만이 `constructor` 이며 ES6의 화살표 함수와 메서드 축약 표현으로 정의된 함수는 `non-constructor` 입니다.

### 👀 new 연산자

일반 함수와 생성자 함수에 특별한 형식적 타이는 없습니다. `new` 연산자와 함께 호출하는 함수는 `constructor` 이어야 합니다. 이전 예제의 `Circle` 함수를 일반적인 함수로서 호출하면 함수 내부의 `this` 는 전역 객체 `window` 를 가리킵니다.

**생성자 함수는 일반적으로 첫 문자를 대문자로 기술하는 파스칼 케이스로 명명하여 일반 함수와 구별할 수 있도록 합니다.**

### 👀 new.target

생성자 함수가 `new` 연산자 없이 호출되는 것을 방지하기 위해 ES6에서는 `new.target` 을 지원합니다. 함수 내부에서 `new.target` 을 사용하면 `new` 연산자와 함께 생성자 함수로서 호출되었는지 확인할 수 있습니다.

`new` 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 `new.target` 은 함수 자신을 가리킵니다. `new` 연산자 없이 일반 함수로서 호출된 함수 내부의 `new.target` 은 `undefined` 입니다.

```javascript
function Circle(radius) {
  // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined이다.
  if (!new.target) {
    // new 연산자와 함께 생성자 함수를 재위 호출하여 생성된 인스턴스를 반환합니다.
    return new Circle(radius);
  }
}
```

만약 `new.target` 을 사용할 수 없는 상황이라면 **스코프 세이프 생성자 패턴**을 사용할 수 있습니다.

```javascript
function Circle(radius) {
  if (!(this instanceof Circle)) {
    return new Circle(radius);
  }
}
```
