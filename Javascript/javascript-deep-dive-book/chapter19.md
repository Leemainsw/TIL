# 🔎 프로토타입

자바스크립트는 명령형, 함수형, 프로토타입 기반 객체지향 프로그래밍을 지원하는 멀티 패러다임 프로그래밍 언어입니다.
자바스크립트는 객체 기반의 프로그래밍 언어이며, 자바스크립트를 이루고 있는 거의 모든 것이 객체입니다.

## ✨ 객체지향 프로그래밍

객체지향 프로그래밍이란 프로그램을 명령형 프로그래밍의 절차지향적 관점에서 벗어나 여러 개의 독립적 단위, 즉 객체의 집합으로 프로그램을 표현하려는 프로그래밍의 패러다임을 말합니다.  
객체란 속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조입니다.

예제를 통해 알아보겠습니다.

```javascript
const circle = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
  getPerimerter() {
    return 2 * Math.PI * this.radius;
  },
  getArea() {
    return Math.PI * this.raduis ** 2;
  },
};
```

위의 예제처럼 객체지향 프로그래밍은 객체의 상태를 나타내는 데이터(radius)와 상태 데이터를 조작할 수 있는 동작(getDiameter, getPerimeter 등..)을 하나의 논리적인 단위로 묶어서 생각합니다. 객체는 상태 데이터와 동작을 하나의 논리적 단위로 묶은 복합적인 자료구조라고 할 수 있습니다. 이때 객체의 상태 데이터를 `프로퍼티`, 동작을 `메서드`라고 부릅니다.

## ✨ 상속과 프로토타입

상속은 객체지향 프로그래밍의 핵심 개념입니다. 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아 그래도 사용할 수 있습니다. 자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거합니다.

```javascript
function Circle(radius) {
  this.raduis = raduis;
  this.getArea = function () {
    return Math.PI * this.raduis ** 2;
  };
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

// Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는 getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
// getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.

console.log(circle1.getArea === circle2.getArea); // false
```

위의 코드에서는 동일한 생성자 함수에 의해 생성된 모든 인스턴스가 동일한 메서드를 중복 소유하게 되어 메모리를 불필요하게 낭비하게 됩니다. 또한 인스턴스를 생성할 때마다 메서드를 생성하기 때문에 퍼포먼스에도 악영향을 줍니다. 상속을 통해 불필요한 중복을 제거해보겠습니다.

```javascript
function Circle(raduis) {
  this.radius = raduis;
}

Circle.prototype.getArea = function () {
  return Math.PI * this.raduis ** 2;
};

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea); // true
```

## ✨ 프로토타입 객체

프로토타입 객체란 객체지향 프로그래밍의 근간을 이루는 객체 간 상속을 구현하기 위해 사용됩니다. 프로토타입은 어떤 객체의 상위 객체의 역할을 하는 객체로서 다른 객체에 공유 프로퍼티를 제공합니다. 프로토타입을 상속받은 하위 객체는 상위 객체의 프로퍼티를 자신의 프로퍼티처럼 자유롭게 사용할 수 있습니다.

### 👀 `__proto__` 접근자 프로퍼티

모든 객체는 `__ptoro__` 접근자 프로퍼티를 통해 자신의 프로포타입, 즉 [[Prototype]] 내부 슬롯에 간접적으로 접근할 수 있습니다.

1. `__proto__` 는 접근자 프로퍼티다.

내부 슬롯은 프로퍼티가 아닙니다. 자바스크립트는 원칙적으로 내부 슬롯과 내부 메서드에 직접적으로 접근/호출할 수 있는 방법을 제공하지 않기 때문에 `**proto** 접근자 프로퍼티를 통해 간접적으로 [[Prototype]] 내부 슬롯의 값, 프로토타입에 접근할 수 있습니다.

2. `__proto__` 접근자 프로퍼티는 상속을 통해 사용된다.

`__proto__` 접근자 프로퍼티는 객체가 직접 소유하는 프로퍼티가 아닌 `Object.prototype` 의 프로퍼티입니다. 모든 객체는 `Object.prototype.__proto__` 접근자 프로퍼티를 사용할 수 있습니다.

3. `__proto__` 접근자 프로퍼티를 통해 프로토타입에 접근하는 이유

[[Prototype]] 내부 슬롯의 값, 즉 프로토타입에 접근하기 위해 접근자 프로퍼티를 사용하는 이유는 **상호 참조에 의해 프로토타입 체인이 생성되는 것을 방지**하기 위해서 입니다.

```javascript
const parent = {};
const child = {};

// child의 프로토타입을 parent로 설정
child.__proto__ = parent;
// parent의 프로토타입을 child로 설정
parent.__proto__ = child; // TypeError: Cylic __proto__ value
```

위 예제는 parent 객체를 child 객체의 프로토타입으로 설정한 후, child 객체를 parent 객체의 프로토타입으로 설정했습니다. 이러한 코드가 에러 없이 정상적으로 처리된다면 서로가 자신의 프로토타입이 되는 비정상적인 프로토타입 체인이 만들어지기 때문에 에러를 발생시킵니다.

4. `__proto__` 접근자 프로퍼티를 코드 내에서 직접 사용하는 것은 권장하지 않는다.

`__proto__` 접근자 프로퍼티는 ES5까지 ECMAScript 사양에 포함되지 않은 비표준이었습니다. 하지만 일부 브라우저에서 `__proto__` 를 지원하고 있었기 때문에 브라우저 호환서을 고려하여 ES6에서 `__proto__` 를 표준으로 채택했습니다.

하지만 코드 내에서 `__proto__` 접근자 프로퍼티를 직접 사용하는 것은 권장하지 않습니다. 모든 객체가 `__proto__` 접근자 프로퍼티를 사용할 수 있는 것이 아니기 때문입니다.

```javascript
// obj는 프로토타입 체인의 종점입니다.
// 따라서 Object.__proto__를 상속받을 수 없습니다.
const obj = Object.create(null);

// obj는 Object.__proto__를 상속받을 수 없습니다.
console.log(obj.__proto__); // undefined

// 따라서 __proto__ 보다 Object.getPrototypeOf 메서드를 사용하는 편이 좋습니다.
console.log(getPrototypeOf(obj)); // null

const obj = {};
const parent = { x: 1 };
// obj 객체의 프로토타입을 취득
Object.getPrototypeOf(obj); // obj.__proto__;
// obj 객체의 프로토타입을 교체
Object.setPrototypeOf(obj, parent); // obj.__proto__ = parent;
console.log(obj.x); // 1
```

### 👀 함수 객체의 prototype 프로퍼티

함수 객체만이 소유하는 `prototype` 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킵니다.

```javascript
// 함수 객체는 prototype 프로퍼티를 소유한다.
(function () {}.hasOwnProperty("prototype")); // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
({}.hasOwnProperty("prototype")); // false
```

`prototype` 프로퍼티는 생성자 함수가 생성할 객체의 프로토타입을 가리킵니다. 따라서 생성자 함수로서 호출할 수 없는 `non-constructor` 인 화살표 함수와 ES6 메서드 축약 표현으로 정의한 메서드는 prototype 프로퍼티를 소유하지 않으며 프로토타입도 생성하지 않습니다.

모든 객체가 가지고 있는 `__proto__` 접근자 프로퍼티와 함수 객체만이 가지고 있는 `prototype` 프로퍼티는 결국 동일한 프로토타입을 가리킵니다. 하지만 이들 프로퍼티를 사용하는 주체가 다릅니다.

```javascript
function Person(name) {
  this.name = name;
}

const me = new Person("Lee");

console.log(Person.prototype === me.__proto__); // true
```

| 구분                       | 소유          | 값                | 사용 주체   | 사용 목적                                                          |
| -------------------------- | ------------- | ----------------- | ----------- | ------------------------------------------------------------------ |
| `__proto__`접근자 프로퍼티 | 모든 객체     | 프로토타입의 참조 | 모든 객체   | 객체가 자신의 프로토타입에 접근 또는 교체하기 위해 사용            |
| `prototype` 프로퍼티       | `constructor` | 프로토타입의 참조 | 생성자 함수 | 생성자 함수가 자신이 생성할 객체의 프로토타입을 할당하기 위해 사용 |

### 👀 프로토타입의 constructor 프로퍼티와 생성자 함수

모든 프로토타입은 `constructor` 프로퍼티를 갖습니다. `constructor` 프로퍼티는 `prototype` 프로퍼티로 자신을 참조하고 있는 생성자 함수를 가리킵니다. 이 연결은 생성자 함수가 생성될 때, 즉 함수 객체가 생성될 때 이루어집니다.

```javascript
function Person(name) {
  this.name = name;
}
const me = new Person("Lee");
// me 객체의 생성자 함수는 Person이다.
console.log(me.constructor === Person); // true
```

위의 예제를 보면 `me` 객체에는 `constructor` 프로퍼티가 없지만 `me` 객체의 프로토타입인 `Person.prototype` 에는 `constructor` 프로퍼티가 있습니다. 따라서 `me` 객체는 프로토타입인 `Person.prototype` 의 `constructor` 프로퍼티를 상속받아 사용할 수 있습니다.

## ✨ 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입

생성자 함수에 의해 생성된 인스턴스는 프로토타입의 `constructor` 프로퍼티에 의해 생성자 함수와 연결됩니다. 이때 프로퍼티가 가리키는 생성자 함수는 인스턴스를 생성한 생성자 함수입니다.

```javascript
// obj 객체를 생성한 생성자 함수는 Object
const obj = new Object();
console.log(obj.constructor === Object); // true

const add = new Function("a", "b", "return a+b");
console.log(add.constructor === Function); // true
```

리터럴 표기법에 의해 객체 생성 방식과 같이 명시적으로 new 연산자와 함께 생성자 함수를 호출하여 인스턴스를 생성하지 않는 객체 생성 방식도 있습니다.

```javascript
// 객체 리터럴
const obj = {};
// 함수 리터럴
const add = function (a, b) {
  return a + b;
};
```

리터럴 표기법에 의해 생성된 객체도 프로토타입이 존재합니다. 리터럴 표기법에 의해 생성된 객체의 경우 프로토타입의 `constructor` 프로퍼티가 가리키는 생성자 함수가 반드시 객체를 생성한 생성자 함수라고 단정할 수 없습니다.

`Object` 생성자 함수 호출과 객체 리터럴의 평가는 추상 연산 `OrdinaryObjectCreate` 를 호출하여 빈 객체를 생성한다는 점에서 동일하지만 `new.target` 의 확인이나 프로퍼티를 추가하는 등의 세부 내용은 다릅니다. 따라서 객체 리터럴에 의해 생성된 객체는 Object 생성자 함수가 생성한 객체가 아닙니다.

함수의 경우 차이가 더 명확합니다. `Function` 생성자 함수를 호출하여 생성한 함수는 렉시컬 스코프를 만들지 않고 전역 함수인 것처럼 스코프를 생성하며 클로저도 만들지 않습니다. 따라서 함수 선언문과 함수 표현식을 평가하여 함수 객체를 생성한 것은 `Function` 생성자 함수가 아닙니다.

리터럴 표기법에 의해 생성된 객체도 상속을 위해 프로토타입이 필요하기 때문에 리터럴 표기법에 의해 생성된 객체도 가상적인 생성자 함수를 갖게 됩니다. 프로토타입은 생성자 함수와 더불어 생성되며 **프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍으로 존재**합니다.

## ✨ 프로토타입의 생성 시점

프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성됩니다. 셍성자 함수 또는 리터럴 표기법으로 객체를 생성하면 프로토타입은 생성된 객체의 [[Prototype]] 내부 슬롯에 할당 된다.

## ✨ 객체 생성 방식과 프로토타입의 결정

### 👀 객체 생성 방식

- 객체 리터럴
- `Object` 생성자 함수
- 생성자 함수
- `Object.create` 메서드
- 클래스

위의 객체 생성 방식은 차이가 있으나 추상 연산자인 `OrdinaryObjectCreate` 에 의해 생성됩니다.

## ✨ 프로토타입 체인

프로토타입 체인은 자바스크립트가 객체지향 프로그래밍의 상속을 구현하는 메커니즘입니다. 더 자세히 이야기하자면 프로토타입 체인은 자바스크립트는 객체의 프로퍼티에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 [[Prototype]] 내부 슬롯의 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색하는 것입니다.

## ✨ 오버라이딩과 프로퍼티

**오버라이딩**이란?

- 상위 클래스가 가지고 있는 메서드를 하뤼 클래스가 재정의하여 사용하는 방식

**오버로딩**이란?

- 함수의 이름은 동일하지만 매개변수의 타입 또는 개수가 다른 매서드를 구현하는 것

```javascript
const Person = (function () {
  function Person(name) {
    this.name = name;
  }
  Person.prototype.sayHello = function () {
    console.log(`Hi My name is ${this.name}`);
  };
  return Person;
})();

const me = new Person("Lee");
// 인스턴스 메서드
me.sayHello = function () {
  console.log(`Hey My name is ${this.name}`);
};

// 인스턴스 메서드가 호출된다.
// 프로토타입 메서드는 인스턴스 메서드에 의해 가려지게 된다.
me.sayHello();
```

위의 예제처럼 상속 관계에 의해 프로퍼티가 가려지는 현상을 프로퍼티 섀도잉이라고 합니다.

## ✨ 프로토타입의 교체

프로토타입은 임의의 다른 객체로 변경 가능합니다.

### 👀 생성자 함수에 의한 프로토타입의 교체

```javascript
const Person = (function () {
  function Person(name) {
    this.name = name;
  }

  // 생성자 함수의 prototype 프로퍼티를 통해 프로퍼티 타입을 교체
  Person.prototype = {
    sayHello() {
      console.log(`Hi My name is ${this.name}`);
    },
  };

  return Person;
})();

const me = new Person("Lee");
```

위의 예제에서 프로토타입으로 교체한 객체 리터럴에는 `constructor` 프로퍼티가 없습니다. 따라서 `me` 객체에 생성자 함수를 검색하면 `Person` 이 아닌 `Object` 가 나오게 됩니다.

### 👀 인스턴스에 의한 프로토타입의 교체

```javascript
function Person(name) {
  this.name = name;
}
const me = new Person("Lee");

const parent = {
  sayHello() {
    console.log(`Hi My name is ${this.name}`);
  },
};

Object.setPrototypeOf(me, parent);

me.sayHello();
```

위의 생성자 함수에 의한 프로토타입의 교체와 마찬가지로 프로토타입으로 교체한 객체에는 `constructor` 프로퍼티가 없기 때문에 생성자 함수 간의 연결이 파괴되어 따라서 `me` 객체에 생성자 함수를 검색하면 `Person` 이 아닌 `Object` 가 나오게 됩니다.

## ✨ instanceof 연산자

`객체 instanceof 생성자 함수`

우변의 생성자 함수의 prototype 에 바인딩된 객체가 좌변의 객체의 프로토타입 체인 상에 존재하면 `true` 로 평가되고, 그렇지 않은 경우에는 `false` 로 평가됩니다.

## ✨ 직접 상속

### Object.create에 의한 직접 상송

**장점**

- Obejct.create 메서드는 명시적으로 프로토타입을 지정하여 새로운 객체를 생성합니다.
- new 연산자 없어도 객체를 생성할 수 있다.
- 프로토타입을 지정하면서 객체를 생성할 수 있다.
- 객체 리터럴에 의해 생성된 객체도 상속받을 수 있다.

### 객체 리터럴 내부에서 `__proto__` 에 의한 직접 상속

ES6에서는 객체 리터럴 내부에서 `__proto__` 접근자 프로퍼티를 사용하여 직접 상속을 구현할 수 있습니다.

```javascript
const myProto = {x: 10};

const obj = {
  y: 20,
  __proto__: myProto
}l
```

## ✨ 정적 프로퍼티/메서드

정적 프로퍼티/메서드는 생성자 함수로 인스턴스를 생성하지 않아도 참조/호출할 수 있는 프로퍼티/메서드를 말합니다.

```javascript
function Person(name) {
  this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function () {
  console.log(`Hi My name is ${this.name}`);
};

// 정적 프로퍼티
Person.staticProp = `static prop`;

// 정적 메서드
Person.staticMethod = function () {
  console.log("staticMethod");
};
```

정적 프로펕/메서드는 인스턴스의 프로토타입 체인에 속한 객체의 프로퍼티/메서드가 아니므로 인스턴스로 접근할 수 없습니다.

## ✨ 프로퍼티 존재 확인

### in 연산자

in 연산자는 객체 내에 특정 프로퍼티가 존재하는지 여부를 확인합니다.

```javascript
// 형태
// key in object;

const person = {
  name: "Lee",
  address: "Seoul",
};

console.log("name" in person); //true
console.log("address" in person); //true
console.log("age" in person); //false
```

### Object.prototype.hasOwnProperty 메서드

```javascript
person.hasOwnProperty("name"); // true
person.hasOwnProperty("age"); // false
```

## ✨ 프로퍼티 열거

### for... in 문

```javascript
const person = {
  name: "Lee",
  address: "Seoul",
};

for (const key in person) {
  console.log(key + ": " + person[key]);
}
```

### Object.keys/values/entries 메서드
