# 🔎 this

## ✨ this 키워드

this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수입니다. this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있습니다.

## ✨ 함수 호출 방식과 this 바인딩

this 바인딩은 함수 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정됩니다.

함수를 호출하는 방식

1. 일반 함수 호출

- 기본적으로 this에는 전역 객체가 바인딩 됨
- 일반 함수로 호출하면 함수 내부의 this에는 전역 객체가 바인딩 됨
  

2. 메서드 호출
3. 생성자 함수 호출
4. Funciton.prototype.apply/call/bind 메서드에 의한 간접 호출

```javascript
// this 바인딩은 함수 호출 방식에 따라 동적으로 결정됩니다.
const foo = function () {
  console.dir(this);
};

// 동일한 함수도 다양한 방식으로 호출할 수 있습니다.

// 1. 일반 함수 호출
// foo 함수를 일반적인 방식으로 호출
/// foo 함수 내부의 this는 전역 객체 window를 가리킨다.

foo(); // window

// 2. 메서드 호출
// foo 함수를 프로퍼티 값으로 할당하여 호출
// foo 함수 내부의 this는 매서드를 호출한 객체 obj를 가리킨다.
const obj = { foo };
obj.foo(); // obj

// 3. 생성자 함수 호출
// foo 함수를 new 연산자와 함께 생성자 함수로 호출
// foo 함수 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킨다.
new foo();

// 4. Funciton.prototype.apply/call/bind 메서드에 의한 간접 호출
// foo 함수 내부의 this는 인수에 의해 결정된다.
const bar = { name: "bar" };
foo.call(bar); // bar;
foo.apply(bar); // bar
foo.bind(bar)(); // barl
```

### 👀 일반 함수 호출

일반 함수로 호출된 모든 함수(중첩 함수, 콜백 함수 포함) 내부의 this에는 전역 객체가 바인딩 됩니다. 외부 함수인 메서드와 중첩 함수 또는 콜백 함수의 this가 일치하지 않는 다는 것은 중첩 함수 또는 콜백 함수를 헬퍼 함수로 동작하기 어렵게 만듭니다. 메서드 내부의 중첩 함수나 콜백 함수의 this 바인딩을 메서드의 this 바인딩과 일치시키기 위해서는 다음과 같이 합니다.

```javascript
var value = 1;
const obj = {
  value: 100,
  foo() {
    // this 바인딩(obj)를 변수 that에 할당합니다.
    const that = this;

    // 콜백 함수 내부에서 this 대신 that을 참조합니다
    setTimeout(function () {
      console.log(that.value); // 100
    }, 100);
  },
};

/// Function.prototype.bind 메서드 사용하기
const obj = {
  value: 100,
  foo() {
    setTimeout(function() {
      console.log(this.value);
    }bind(this), 100)
  }
}

// 화살표 함수 사용하기
const obj = {
  value: 100,
  foo() {
    // 화살표 함수 내부의 this는 상위 스코프의 this를 가리킨다.
    setTimeout(() => console.log(this.value), 100); //
  }
}
```

### 👀 메서드 호출

메서드 내부의 this는 메서드를 소유한 객체가 아닌 메서드를 호출한 객체에 바인딩 됩니다.

```javascript
const anotherPerson = {
  name: "Kim",
};

// getName 메서드를 anotherPerson 객체의 메서드로 할당
anotherPerson.getName = person.getName;

// getName 메서드를 호출한 객체는 anotherPerson이다.
console.log(anotherPerson.getName()); // Kim

const getName = person.getName;

console.log(getName); // ''
// 일반 함수로 호출된 getName 함수 내부의 this.name은 브라우저 환경에서 window.name과 같다.
// 브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 '' 이다.
// Node.js 환경에서 this.name은 undefined이다.
```

### 👀 생성자 함수 호출

생성자 함수 내부의 this에는 생성자 함수가 생성할 인스턴스가 바인딩됩니다.

```javascript
function Circle(raduis) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.raduis;
  };
}

// 반지름이 5인 Circle 객체 생성
const circle1 = new Circle(5);
const circle2 = new Circle(10);

circle1.getDiameter(); // 10
circle2.getDiameter(); // 10
```

### 👀 Funciton.prototype.apply/call/bind 메서드에 의한 간접 호출

`apply`, `call`, `bind` 메서드는 Function.prototype의 메서드입니다. 즉, 이들 메서드는 모든 함수가 상속받아서 사용 가능합니다.
`apply` `call` 메서드는 this로 사용할 객체와 인수 리스트를 인수로 전달받아 함수를 호출합니다.

아래의 내용으로 함께 사용법을 확인해봅시다.

```javascript
/**
 * 주어진 this 바인딩과 인수 리스트 배열을 사용하여 함수를 호출한다
 * @param thisArg this로 사용할 객체
 * @param argsArray 함수에게 전달할 인수 리스트의 배열 또는 유사 배열 객체
 * @returns 호출된 함수의 반환값
 * **/
Function.prototype.apply(thisArg[, argsArray]);

/**
 * 주어진 this 바인딩과 ,로 구분된 인스 리스트를 사용하여 함수를 호출한다
 * @param thisArg - this로 사용할 객체
 * @param arg1, arg2, ... - 함수에게 전달할 인수 리스트
 * @returns 호출된 함수의 반환값
**/
Function.prototype.call(thisArg[, arg1[, arg2[, ...]]]);
```

`apply` 와 `call` 메서드의 본질적인 기능은 함수를 호출하는 것입니다.

```javascript
function getThisBinding() {
  return this;
}

// this로 사용할 객체
const thisArg = { a: 1 };
console.log(getThisBinding());

// getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩한다.
console.log(getThisBinding.apply(thisArg)); // {a: 1}
console.log(getThisBinding.call(thisArg)); // {a: 1}
```
