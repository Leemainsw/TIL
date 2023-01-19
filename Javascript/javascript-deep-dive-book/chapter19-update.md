# 🔎 프로토타입

> 프로토 타입을 조금 더 쉽게 설명하기 위한 페이지 입니다.

## ✨ 프로토타입이란?

프로토타입이란 원래의 형태 또는 전형적인 예, 기초 또는 표준 입니다. 자바스크립트의 모든 객체는 프로토타입이라는 객체를 가지고 있습니다.
모든 객체는 그들의 프로토타입으로부터 프로퍼티와 메소드를 상속 받습니다.

이처럼 자바스크립트의 모든 객체는 최소한 하나 이상의 다른 객체로부터 상속을 받으며, 이때 **상속되는 정보를 제공하는 객체를 프로토타입**이라고 합니다.

## ✨ 상속과 프로토타입

자바스크립트에서는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거합니다.

### 👀 예제로 알아보기

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

// 인스턴스로 사용시
const circle1 = new Circle(1);
const circle2 = new Circle(2);

// 메서드가 중복 생성되고 모든 인스턴스가 중복 소유됩니다.
circle1.getArea === circle2.getArea; // false

// 프로토타입을 기반으로 상속 구현하기
Circle.prototype.getArea = function () {
  return Math.PI * this.raduis ** 2;
};
circle1.getArea === circle2.getArea; // true
```

## ✨ 프로토타입 객체

프로토타입 객체란 객체지향 프로그래밍의 근간을 이루는 객체 간 상속을 구현하기 위해 사용됩니다. 자바스크립트의 모든 객체는 [[Prototype]] 이라는 내부 슬롯을 가집니다.

모든 객체는 하나의 프로토타입을 가지고 있고 모든 프로토타입은 생성자 함수와 연결되어있습니다.

## ✨ 프로토타입 체인

자바스크립트에서는 객체 이니셜라이저를 사용해 생성된 같은 타입의 객체들은 모두 같은 프로토타입을 가집니다.
`new` 연산자를 사용해 생성한 객체는 생성자의 프로토타입을 자신의 프로토타입으로 상속 받습니다.

```javascript
var date = new Date(); // 이 객체는 Date.prototype 뿐만 아니라 Object.prototype도 가집니다.
```

위와 같이 프로토타입이 상속되는 가상의 연결 고리를 프로토타입 체인이라고 합니다.
Object.prototype 객체는 이러한 프로토타입 체인에서도 가장 상위에 존재하는 프로토타입입니다. 따라서 자바스크립트의 모든 객체는 Object.prototype 객체를 프로토타입으로 상속받습니다.

## REF

[TcpSchool](http://www.tcpschool.com/javascript/js_object_prototype)
