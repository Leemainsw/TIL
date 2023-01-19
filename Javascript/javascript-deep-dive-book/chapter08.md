# 🔎 제어문

## ✨ 서론

제어문은 조건에 따라 코드 블록을 실행하거나 반복 실행할 때 사용합니다.

## ✨ 블록문

블록문은 0개 이상의 문을 중괄호로 묶은 것입니다. `코드 블록` 또는 `블록`이라고 불리기도 합니다.

## ✨ 조건문

조건문은 주어진 조건식의 평과 결과에 따라 코드 블록의 실행을 결정합니다.
자바스크립트에서는 if...else문과 switch문으로 두 가지 조건문을 제공합니다.

### 👀 if...else문

예제를 보고 간단하게 넘어가도록 하겠습니다.

```js
var num = 2;
var kind;
if (num > 0) {
  kind = "양수";
} else if (num < 0) {
  kind = "음수";
} else {
  kind = "영";
}
```

### 👀 switch문

예제를 보고 간단하게 넘어가도록 하겠습니다.

```js
switch (표현식) {
  case 표현식1:
    switch문의 표현식과 표현식1이 일치하면 실행될 문;
    break;

  case 표현식2:
    switch문의 표현식과 표현식2이 일치하면 실행될 문;
    break;

  default:
    switch문의 표현식과 일치하는 case문이 없을 때 실행될 문
}
```

switch문의 표현식과 일치하는 case문의 표현식을 실행하고 난 뒤에 switch문을 탈출하지 않는다면 무슨 일이 벌어질까요?

바로 switch문의 끝날 때까지 이후의 모든 case문과 default문을 실행하게 됩니다. 이를 바로 `폴스루`라고 합니다. 때문에 `break` 키워드를 사용하여 switch문을 탈출해야합니다. 자세한 건 아래의 ##break문에서 설명하겠습니다.

## ✨ 반복문

반복문은 조건식의 평가 결과가 참인 경우 코드 블록을 실행하고, 이후 조건식을 다시 평가하여 여전히 참인 경우 코드 블록을 다시 실행합니다. 이는 조건식을 평가했을 때 거짓일 때까지 반복됩니다.

### 👀 for

예제를 보고 간단하게 넘어가도록 하겠습니다.

```js
for (let index = 0; index < 2; index++) {
  console.log(i);
}
```

### 👀 while

예제를 보고 간단하게 넘어가도록 하겠습니다.

```js
var count = 0;
while (count < 3) {
  console.log(count);
  count++;
}
```

### 👀 do...while

예제를 보고 간단하게 넘어가도록 하겠습니다.

```js
var count = 0;

do {
  console.log(count);
  count++;
} while (count < 3);
```

## ✨ break 문

`switch`문에서 살펴보았듯이 `break` 문은 코드 블록에서 탈출합니다. 조금 더 정확히 표현하자면 코드 블록에서 탈출하는 것이 아닌 레이블 문, 반복문 또는 switch 문의 코드 블록을 탈출하는 것입니다. 이외의 break 문을 사용하면 syntaxError(문법 에러)가 발생합니다.

## ✨ continue 문

continue문은 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동시킵니다.

break처럼 반복문을 탈출하지는 않습니다. 예제를 통해 더 자세히 알아보겠습니다.

```js
var string = "Hello World.";
var search = "l";
var count = 0;

for (var index = 0; index < string.length; index++) {
  if (string[i] !== search) continue;
  count++;
}
```
