# 🔎 프로퍼티 어트리뷰트

## ✨ 내부 슬롯과 내부 메서드

내부 슬롯과 내부 메서드는 자바스크립트 엔진의 구현 알고리즘을 설명하기 위해 ECMAScript 사양에서 사용하는 `의사 프로퍼티`와 `의사 메서드`입니다. ECMAScript 사양에 등장하는 이중 대괄호([[...]])으로 감싼 이름들이 내부 슬롯과 내부 메서드입니다.

내부 슬롯과 내부 메서드는 개발자가 직접 접근할 수 있도록 외부로 공개된 객체의 프로퍼티는 아닙니다. 즉, 내부 슬롯과 내부 메서드는 자바스크립트 엔진의 내부 로직이기 때문에 원칙적으로는 직접적으로 접근/호출할 수 있는 방법을 제공하지 않습니다. 단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 합니다.

예를 들어, 모든 객체는 [[Prototype]] 이라는 내부 슬롯을 갖는데 이는 원칙적으로 직접 접근이 불가능하지만 `__proto__` 를 통해 갑접적으로 접근할 수 있습니다.

```javascript
const o = {};
o.[[Prototype]] // 접근 불가능
o.__proto__ // 접근 가능
```

## ✨ 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체

자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의합니다.

프로퍼티 어트리뷰트는 자바스크립트 엔진이 관리하는 내부 상태 값인 내부 슬롯입니다. 따라서 어트리뷰트에 직접 접근할 수 없지만 `Object.getOwnPropertyDescriptor` 메서드를 사용하여 간접적으로 확인할 수는 있습니다.

```javascript
const person = {
  name: "Lee",
};

console.log(Object.getOwnPropertyDescriptor(person, "name"));
// { value: 'Lee', writable: true, enumerable: true, configurable: true }
```

이 때 `Object.getOwnPropertyDescriptor` 메서드는 프로퍼티 어트리뷰트 정보를 제공하는 **프로퍼티 디스크립터 객체**를 반환합니다.

## ✨ 데이터 프로퍼티와 접근자 프로퍼티

데이터 프로퍼티

- 키와 값으로 구성된 일반적인 프로퍼티

접근자 프로퍼티

- 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근하 함수로 구성된 프로퍼티

### 👀 접근자 프로퍼티

접근자 함수는 `getter/setter` 함수라고도 불립니다.

```javascript
const person = {
  firstName: "Ungmo",
  lastName: "Lee",

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티입니다.
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

console.log(person.firstName + " " + person.lastName); //Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면setter 함수가 호출된다.
person.fullName = "Heegun Lee";
console.log(person); // {firstName: 'Heegun', lastName: 'Lee'}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName);

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log(descriptor);
```

person 객체의 `firstName` 과 `lastName` 프로퍼티는 일반적인 데이터 프로퍼티입니다. 메서드 앞에 `get` , `set` 이 붙은 것들이 바로 `getter` , `setter` 함수이며 각 함수의 이름이 접근자 프로퍼티가 됩니다.

접근자 프로퍼티는 자체적으로 값을 가지지 않으며 다만 데이터 프로퍼티의 값을 읽거나 저장할 때 관여할 뿐입니다.

## ✨ 프로퍼티 정의

프로퍼티 정의란 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나, 기존 프로퍼티의 프로퍼티 어트리뷰트를 재정의하는 것을 말합니다.

`Object.defineProperty` 메서드를 사용하면 프로퍼티의 어트리뷰트를 정의할 수 있습니다. `Object.defineProperty` 메서드를 사용하면 한 번에 하나의 프로퍼티만 정의할 수 있지만 `Object.defineProperties` 메서드를 사용하면 여러 개의 프로퍼티를 한 번에 적의할 수 있습니다.

```javascript
const person = {};

// epdlxj vmfhvjxl wjddml
Object.defineProperty(person, "firstName", {
  value: "Ungmo",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person, "lastName", {
  value: "Lee",
});

// enumerable의 값이 false인 경우,
// 해당 프로퍼티는 for...in이나 Object.keys 등으로 열거할 수 없습니다.
console.log(Object.keys(person)); // ['firstName']

// writable의 값이 false인 경우,
// 해당 프로퍼티의 value 값을 변경할 수 없습니다.
// 이때 값을 변경하면 에러는 발생하지 않고 무시됩니다.
person.lastName = "Kim";

// configurable 값이 false인 경우,
// 해당 프로퍼티를 삭제할 수 없습니다.
// 이때 프로퍼티를 삭제하면 에러는 발생하지 않고 무시됩니다.
delete person.lastName;

// 접근자 프로퍼티 정의
Object.defineProperty(person, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
  enumerable: true,
  configurable: true,
});
```

## ✨ 객체 변경 방지

객체는 변경 가능한 값이기 때문에 재할당 없이 직접 변경할 수 있습니다. 자바스크립트는 객체의 변경을 방지하는 다양한 메서드를 제공하는데 변경 금지 강도가 다 다릅니다. 아래의 표를 통해 확인해봅시다.

| 구분           | 메서드                   | 프로퍼티 추가 | 프로퍼티 삭제 | 프로퍼티 값 읽기 | 프로퍼티 값 쓰기 | 프로퍼티 어트리뷰트 재정의 |
| -------------- | ------------------------ | ------------- | ------------- | ---------------- | ---------------- | -------------------------- |
| 객체 확장 금지 | Object.preventExtensions | X             | O             | O                | O                | O                          |
| 객체 밀봉      | Object.seal              | X             | X             | O                | O                | X                          |
| 객체 동결      | Object.freeze            | X             | X             | O                | X                | X                          |

### 👀 객체 확장 금자

`Object.preventExtensions` 메서드는 객체의 확장을 금지합니다. 이는 프로퍼티 추가 금지를 의미합니다. 즉, **확장이 금지된 객체는 프로퍼티 추가가 금지됩니다.**

```javascript
const person = { name: "Lee" };

// person 객체는 확장이 금지된 객체가 아닙니다.
console.log(Object.isExtensible(person)); // true

// person 객체의 확장을 금지
Object.preventExtensions(person);

// person 객체는 확장이 금지된 객체입니다.
console.log(Object.isExtensible(person)); // false

// 프로퍼티 추가가 금지됨
person.age = 20; // 무시되며 strict mode에서는 에러를 발생시킵니다.
// 삭제는 가능
delete person.name;

// 프로퍼티 정의에 의한 프로퍼티 추가도 금지됩니다.
Object.definePreperty(person, "age", { value: 20 });
//typeerror
```

### 👀 객체 밀봉

`Object.seal` 메서드는 객체를 밀봉합니다. 이는 프로퍼티 추가 및 삭제와 어트리뷰트 재정의 금지를 의미합니다. 즉, **밀봉된 객체는 읽기와 쓰기만 가능**합니다.

```javascript
const person = { name: "Lee" };

// person 객체는 밀봉된 객체가 아닙니다.
console.log(Object.isSealed(person)); // false

// person 객체 밀봉
Object.seal(person);

// person 객체는 밀봉된 객체입니다.
console.log(Object.isSealed(person)); // true

//밀봉된 객체는 configurable이 false입니다.

// 프로퍼티 추가가 금지됨
person.age = 20; // 무시되며 strict mode에서는 에러를 발생시킵니다.

// 프로퍼티 삭제가 금지됨
delete person.name; // 무시되며 strict mode에서는 에러를 발생시킵니다.

// 갱신 가능
person.name = "Kim";

// 프로퍼티 어트리뷰트 재정의 금지
Object.defineProperty(person, "name", { configurable: true });
// type error
```

### 👀 객체 동결

`Object.freeze` 메서드는 객체를 동결합니다. 이는 프로퍼티 추가, 삭제, 재정의, 갱신 금지를 의미합니다. 즉, **동결된 객체는 읽기만 가능** 합니다.

```javascript
const person = { name: "Lee" };

// person 객체는 동결된 객체가 아닙니다.
console.log(Object.isFrozen(person)); // false

// person 객체 동결
Object.seal(person);

// person 객체는 동결된 객체입니다.
console.log(Object.isFrozen(person)); // true

//밀봉된 객체는 writable, configurable이 false입니다.

// 프로퍼티 추가가 금지됨
person.age = 20; // 무시되며 strict mode에서는 에러를 발생시킵니다.

// 프로퍼티 삭제가 금지됨
delete person.name; // 무시되며 strict mode에서는 에러를 발생시킵니다.

// 프로퍼티 갱신이 금지됨
person.name = "Kim"; // 무시되며 strict mode에서는 에러를 발생시킵니다.

// 프로퍼티 어트리뷰트 재정의 금지
Object.defineProperty(person, "name", { configurable: true });
// type error
```

### 👀 불변 객체

지금까지 살펴본 변경 방지 메서드들은 얕은 변경 방지이기 때문에 직속 프로퍼티만 변경이 방지되며 중첩 객체까지는 영향을 주지 못합니다. 객체의 중첩 객체까지 동결하여 변경이 불가능한 읽기 전용의 불변 객체를 구현하려면 값으로 갖는 모든 프로퍼티에 대해 재귀적으로 `Object.freeze` 메서드를 호출해야 합니다.

```javascript
function deepFreeze(target) {
  // 객체가 아니거나 동결된 객체는 무시하고 동결되지 않은 객체만 동결한다.
  if (target && typeof target === "object" && !Object.isFrozen(target)) {
    Object.freeze(target);
    Object.keys(target).forEach((key) => deepFreeze(target[key]));
  }
  return target;
}

const person = {
  name: "Lee",
  address: { city: "Seoul" },
};

deepFreeze(person);
```
