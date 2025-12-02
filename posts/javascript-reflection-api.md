---
title: "자바스크립트 Reflect API"
description: "자바스크립트 Reflect API 찍어먹기"
date: "2025-12-02"
categories:
  - "Javascript"
tags:
  - "Javascript"
  - "Typescript"
  - "Relect"
  - "Metaprogramming"
---

# Reflection이란
Reflection에 관한 정보를 찾아보면 자바의 Reflection API를 주로 찾을 수 있다.
대부분의 글에서는 `런타임에 클래스나 멤버를 조사하고 조작할 수 있는 기능`으로 정의하고 있다.

자바스크립트에는 유사한 Reflect API가 존재한다. 정리해본 결과 이름은 유사하지만 실제 동작은 자바의 Reflection API와는 조금 달랐다.

> [MDN Doc - Reflect](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Reflect)을 참고하여 작성되었습니다.

# 메서드 정리
## apply
> 대상 함수를 매개변수로 호출한다.

Function.prototype.apply()와 동일한 동작을 수행하는 것을 알 수 있다.
그렇다면 왜 굳이 Reflect.apply를 제공해주는걸까?

1. 함수의 apply는 외부에서 오버라이드할 가능성이 존재한다.
```js
const hack = {
	apply: () => 'hacked'
};

function sayHi() {
	return 'Hi';
}

sayHi.apply = hack.apply;

console.log(sayHi.apply());            // 'hacked'
console.log(Reflect.apply(sayHi, null, []));   // 'Hi'
```
악의적으로 오버라이드한다면 의도하지 않은 동작이 발생할 수 있다.

2. 프록시 트랩을 구현할 경우
```js
const fn = function (a, b) {
  return a + b;
};

const proxy = new Proxy(fn, {
  apply(target, thisArg, argumentsList) {
    console.log(`called with:`, argumentsList);
    return Reflect.apply(target, thisArg, argumentsList);
  }
});

proxy(1, 2); // called with: [1, 2] → 3
```
프록시 트랩을 구현하는 경우에는 Reflect API를 사용하는 방식이 권장된다. 이 경우에도 1번의 경우처럼 악의적으로 오버라이드하여 오염시키는 경우에도 정상적으로 동작하게 된다.

> 하지만 이 경우에도 Reflect.apply 자체를 오버라이드하면 오염되고 만다.

이에 대한 방지법은 구조분해할당으로 캡처하는 것이 존재하지만, 대형 프로젝트(Vue 3 Core)에서도 Reflect를 굳이 구조분해할당하여 사용하지 않는 것으로 보인다.

## construct
> 함수로써 사용하는 new 연산자.
> new target(...args)와 동일한 동작이다.

다른 프로토타입을 지정하는 추가 기능도 존재한다.
런타임에 어떤 클래스를 사용하여 인스턴스를 생성할지 결정할 수 있다.

```js
class Base {  
  kind: string;  
  constructor() {  
    this.kind = new.target.name;  
  }  
}  
  
class A extends Base {}  
class B extends Base {}  
  
function createInstance(baseCtor: Function, childCtor: Function) {  
  return Reflect.construct(baseCtor, [], childCtor);  
}  
  
const a = createInstance(Base, A);  
const b = createInstance(Base, B);  
  
console.log(a); // A  
console.log(b); // B
```

## defineProperty
> Object.defineProperty와 비슷하다. Boolean을 반환한다.

그럼 굳이 Reflect로 defineProperty를 해야할 이유가 있을까?

차이점은 실제로 속성을 생성할 수 없을 경우에 발생한다.
Object에 존재하는 메서드로 시도하면 TypeError가 발생하지만
Reflect로 시도하면 단순히 결과가 true, false로 반환되는 큰 차이점이 존재한다.

따라서 Reflect로 코드를 작성하게 된다면 에러처리 부분이 단순화되는 장점을 가져올 수 있다.

```js
const obj = Object.freeze({});  
  
try {  
  Object.defineProperty(obj, 'key', { value: 123 });  
} catch (e) {  
  console.error('에러 발생:', e); // throw 됨  
}  
  
const result = Reflect.defineProperty(obj, 'key', { value: 123 });  
console.log(result); // false
```

## deleteProperty
> delete obj[prop]과 동일한 동작을 수행한다.

## get
> 속성 값을 반환한다. `obj[prop]`과 동일한 동작을 수행한다.

```js
Reflect.get(obj, 'key')
```

프록시 트랩에서 `get`을 정의할 때, 원래 값을 가져오려면 `Reflect.get`을 사용해야 한다. `receiver`를 지정해 `this` 바인딩을 컨트롤할 수도 있다.

### Private 속성에도 접근할 수 있을까?
자바에서 Reflection API는 Private 속성에도 접근할 수 있는 아주 강력한 API인데 자바스크립트도 동일할까?

답은 `아니다`

자바스크립트의 설계상 특별한 내부 슬롯으로 관리되어 절대 접근할 수 없다.

> private 필드는 Reflect 뿐 아니라 `Object.keys`, `for...in`, `JSON.stringify` 등 모든 일반적인 접근 방식에서 감춰진다.  

**프레임워크 레벨에서도 `#` 필드는 접근 불가능하다는 점**을 반드시 인지하고 설계해야 한다.

## getOwnPropertyDescriptor
> `Object.getOwnPropertyDescriptor()`와 유사하게, 대상 객체의 **자체 속성**에 대한 디스크립터(descriptor)를 반환한다.

```js
Reflect.getOwnPropertyDescriptor(target, propertyKey)
```

### Descriptor란
자바스크립트에서 객체의 각 속성(property)은 단순히 값(value)만 갖는 것이 아니라, 다양한 속성 메타데이터(descriptor)를 가지고 있다.

이러한 메타데이터는 `Object.getOwnPropertyDescriptor()`나 `Reflect.getOwnPropertyDescriptor()`를 통해 조회할 수 있으며, `Object.defineProperty()` 등을 통해 직접 설정할 수도 있다.

또한 Object.seal, Object.freeze같은 메서드들은 이런 속성 메타데이터를 변경하는 것으로 구현된다.

- `Object.preventExtensions(obj)`  
  → 확장만 막는다 (`새로운 속성 추가 불가`)
- `Object.seal(obj)`  
  → 확장도 막고, 기존 속성의 `configurable: false`로 설정
- `Object.freeze(obj)`  
  → seal 효과 + 모든 `writable: false`로 설정 (값도 변경 불가)

```js
const obj = {};

Object.defineProperty(obj, 'x', {
  value: 42,
  writable: false,
  enumerable: true,
  configurable: false
});

console.log(Reflect.getOwnPropertyDescriptor(obj, 'x'));
```

> 일반 객체 리터럴 `{}`로 만든 속성들은 기본적으로
> ```
> writable: true
> enumerable: true
> configurable: true
> ```
> 로 설정된다.
> 반면, `Object.defineProperty()`로 생성하는 속성은 디폴트가 모두 `false`임에 유의하자.

## getPrototypeOf
> `Object.getPrototypeOf`)와 같다.

## has
> `in` 연산자와 같다.  
> `key in obj`와 동일한 동작을 수행한다.

## isExtensible
> `Object.isExtensible()`와 같다.  
> 객체에 새로운 속성을 추가할 수 있는지 여부를 Boolean으로 반환한다.

## ownKeys
> 객체의 모든 자체 키를 반환한다.  
> `Object.getOwnPropertyNames()` + `Object.getOwnPropertySymbols()`와 같다.

## preventExtensions
> `Object.preventExtensions()`와 같다.  
> 객체에 **새로운 속성을 추가하지 못하게 만든다.**  
> 성공 여부를 Boolean으로 반환한다.

## set
> `obj[prop] = value`와 같은 동작을 수행한다.  
> 속성 할당 성공 여부를 Boolean으로 반환한다.

읽기 전용 속성이나 `Object.preventExtensions()`된 객체 등에 값을 할당하면 `false`를 반환한다.

## setPrototypeOf
> `Object.setPrototypeOf()`와 같다.  
> 객체의 프로토타입을 설정하고, 성공 여부를 Boolean으로 반환한다.

아래와 같이 전혀 연관이 없어보이는 객체여도 프로토타입을 강제로 변환할 수 있다.

```js
const dog = { bark() { console.log('짖기!'); } };  
const car = { wheels: 4 };  
  
Reflect.setPrototypeOf(car, dog);  
  
car.bark(); // '짖기!'
```

# 그래서 Reflect 언제 사용될까?

일반적인 프로그래밍에서는 잘 사용되지 않는다.
하지만 특수한 경우에서 아주 유용하게 사용된다.

관련된 키워드로는 `메타 프로그래밍`, `의존성 주입`, `런타임 클래스 분석`등을 쉽게 찾아볼 수 있었다.

## 메타 프로그래밍이란
메타 프로그래밍은 **코드가 코드를 다루는 프로그래밍**이다. 다시 말해, 프로그래머가 직접 코드를 짜는 대신, 코드 자체가 자기 구조를 이해하고 수정하거나 행동을 동적으로 바꾸는 방식을 의미한다.

일반적인 프로그래밍 보다는 프레임워크 개발, 라이브러리 개발등에서 주로 사용되는 것을 볼 수 있었다.

자바스크립트에서는 `Proxy`, `Reflect`, 그리고 TypeScript의 `Decorator` 같은 기능을 활용해 메타 프로그래밍을 구현할 수 있다. 특히 TypeScript에서는 데코레이터를 통해 클래스나 속성, 메서드에 메타데이터를 부착할 수 있게 되는데, 이때 `reflect-metadata` 라이브러리가 핵심적인 역할을 한다.

# reflect-metadata
TypeScript는 정적 타입 언어지만, 이 타입 정보는 **컴파일 타임에만 존재**한다.
JavaScript로 트랜스파일되고 나면, 타입 정보는 사라진다. 런타임에 클래스의 생성자 타입이나 프로퍼티의 타입을 알고 싶어도 알 수가 없다.

`reflect-metadata`는 바로 이 한계를 극복하기 위해 등장했다. 이 라이브러리는 **런타임에 메타데이터를 저장하고 조회할 수 있는 API**를 제공한다. 이를 통해 마치 자바나 C#처럼 클래스나 필드, 메서드에 부착된 타입 정보를 런타임에 활용할 수 있게 되는 것이다.

## NestJS에서 reflect-metadata의 실제 활용
NestJS는 데코레이터 기반의 프레임워크다. 그리고 이 데코레이터 시스템이 제대로 동작하려면 클래스나 생성자, 파라미터에 대한 **타입 정보가 런타임에 존재**해야 한다.
NestJS는 바로 `reflect-metadata`를 통해 이 정보를 관리한다.

예를 들어 다음과 같은 코드가 있다고 해보자.
```ts
@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}
}
```

NestJS는 `UserService`를 인스턴스화할 때 `repo`에 어떤 타입이 들어가야 하는지를 알아야 한다. 이 정보를 얻기 위해 `Reflect.getMetadata('design:paramtypes', UserService)`를 호출하고, 그 결과로 `[UserRepository]`를 얻게 된다.

이와 같은 방식으로 NestJS는 **개발자가 명시적으로 객체를 주입하지 않아도**, 내부적으로 의존성을 파악해 자동으로 인스턴스를 생성하고 연결할 수 있다.

## Nestjs의 Injectable 흉내내기
아주 간단하게 Nestjs의 Injectable을 흉내내보았다.
Nestjs에서는 싱글턴으로 제공되지만 여기서 구현한 예제에서는 늘 새로운 인스턴스로 제공하는 코드다.

```ts
import 'reflect-metadata';  
  
// 메타데이터 키 정의  
const INJECTABLE_KEY = 'custom:injectable';  
const PARAM_TYPES_KEY = 'design:paramtypes';  
  
// 클래스에 Injectable 메타데이터를 등록하는 데코레이터  
function Injectable() {  
  return function (target: Function) {  
    Reflect.defineMetadata(INJECTABLE_KEY, true, target);  
  };  
}  
  
// 간단한 DI 컨테이너  
class DIContainer {  
  static resolve<T>(target: new (...args: any[]) => T): T {  
    // 생성자 파라미터 타입 가져오기  
    const tokens = Reflect.getMetadata(PARAM_TYPES_KEY, target) || [];  
    console.log(tokens);  
    const injections = tokens.map((token: any) => DIContainer.resolve(token));  
    return new target(...injections);  
  }  
}  
  
@Injectable()  
class Repository {  
  getData() {  
    return '레포지토리 데이터';  
  }  
}  
  
@Injectable()  
class Service {  
  constructor(  
    private readonly repo: Repository,  
  ) {}  
  
  execute() {  
    console.log(this.repo.getData());  
  }  
}  
  
class App {  
  run() {  
    const service = DIContainer.resolve(Service);  
  
    service.execute();  
  }  
}  
  
new App().run();
```

코드를 간단하게 설명한다면
- `design:paramtypes` 은 reflect-metadata에서 데코레이터가 붙어있는 클래스에 자동으로 생성되는 키값이다. 생성자의 파라미터의 타입을 가져올 수 있다.
    - 이외에도 `design:returntype`, `design:type` 같은 키가 존재한다. 이와 관련된 정보는 [Reflect-Metadata : Github](https://github.com/microsoft/reflect-metadata)에서 더 자세하게 알아볼 수 있다.
- reflect-metadata로 가져온 타입을 이용하여 런타임에서 해당 정보로 주입할 인스턴스를 재귀적으로 생성하여 주입할 목록을 만들어 생성자에 파라미터로 제공해 최종 인스턴스를 반환하게 된다.

NestJS를 사용할 때 흔히 마주치는 오류 중 하나가 “의존성을 주입할 수 없습니다”는 에러다. 이 예제를 통해 NestJS가 어떻게 생성자 타입 정보를 읽어 의존성을 주입하는지, 왜 데코레이터와 타입 메타데이터 설정이 필수적인지를 이해할 수 있다.

결국 NestJS의 의존성 주입 시스템의 기본 원리는 단순한 `reflect-metadata` 기반 메타프로그래밍에 있다는 점을 이 예제를 통해 확인할 수 있다. NestJS의 이해를 위해 이런 기초부터 직접 구현해보는 경험은 매우 유익했다.