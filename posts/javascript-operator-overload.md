---
title: "자바스크립트 연산자 오버로딩"
description: "자바스크립트에서 연산자 오버로딩(Operator Overloading)을 구현할 수 있을까?"
date: "2025-12-02"
categories:
  - "Javascript"
tags:
  - "Javascript"
  - "Typescript"
---
# 의문
개발을 하다 보면 종종 이상한 것에 꽂힐 때가 있다.

2차원 좌표계(x, y)를 다루는 로직을 작성하던 중에 문득 든 생각이 있었다. 

두 좌표를 더하는 연산을 구현해야 했는데, 문득 `자바나 C++ 같은 언어들의 연산자 오버로딩(Operator Overloading) 기능은 없는걸까?` 라는 생각이 들었다.

```typescript title="코드"
// 현재 방식
const cell3 = cell1.add(cell2);

// 원하는 방식
const result = cell1 + cell2;
```

result.x = cell1.x + cell2.x 처럼 풀어서 쓰거나 add 메소드를 만드는 것보다, 직관적으로 + 기호를 쓰고 싶다는 욕망에 사로잡히기 시작했다. 

"자바스크립트라고 안 될 리가 없지 않나?" 라는 생각으로 구글링을 시작했고, 수년 전 스택오버플로우에서 흥미로운 토론을 찾을 수 있었다.

이번 글에서는 자바스크립트에서 연산자 오버로딩을 흉내 내는 몇 가지 꼼수와, 그 끝에 내린 결론을 기록한다.

# 자바스크립트의 연산자 오버로딩

자바스크립트는 공식적으로 연산자 오버로딩을 지원하지 않는다. 하지만 자바스크립트의 유연함(혹은 허점)을 이용해 비슷하게 동작하도록 만들 수는 있다.

> 예제 코드는 TypeScript로 작성되었습니다.

## 1. 형 변환 이용하기

자바스크립트 엔진은 객체끼리 연산을 시도할 때, 해당 객체를 원시값(Primitive)으로 변환한다. 이때 호출되는 valueOf나 toString 메소드를 가로채는 방법이다.

### 1.1 숫자 연산 흉내 내기 (valueOf)
```typescript title="valueOf를 이용한 형 변환 방식"
class Thing {
    constructor(private value: number) {}
    
    valueOf() {
      return this.value;
    }
}

const a = new Thing(1);
const b = new Thing(3);

// @ts-ignore: TS2365 에러 무시 (TypeScript는 이를 허용하지 않음)
console.log(a + b); // 출력: 4
```

### 1.2 문자열 연산 흉내 내기 (toString)
```typescript title="toString을 이용한 형 변환 방식"
class ThingStr {  
    constructor(private val: string) {}
    
    toString() {  
      return this.val.toUpperCase();  
    }
}

const a = new ThingStr("a");  
const b = new ThingStr("b");

// @ts-ignore
console.log(a + b); // 출력: AB
```


### 1.3 한계점

이 방식은 런타임에서 4나 "AB" 같은 원시값을 뱉어낼 뿐, 새로운 객체(인스턴스)를 반환하지 않는다. 

원하는 객체 연산(Ex. Vector + Vector = Vector)을 구현하기에는 적합하지 않다. 
게다가 TypeScript에서는 `The operator + cannot be applied to types...`라는 에러를 뿜어내며 잘못된 패턴이라고 알려주기까지 한다.

## 2. 연산자 모양을 한 메소드 정의하기

### 2.1 메소드 정의
해당 코드는 스택 오버플로우를 적극 차용한 코드다. 처음 이 코드를 보았을 때, 자바스크립트의 특징을 진짜 잘 이용했다는 생각이 들었다.

자바스크립트 객체의 키에는 문자열이 들어갈 수 있다는 점을 이용한 상상도 못했던 코드였다.
```typescript title="메소드를 연산자 기호로 만드는 방식"
class Vector2 {
    constructor(public x: number, public y: number) {}
    
    "+"(vector: Vector2) {
      return new Vector2(this.x + vector.x, this.y + vector.y);
    }
    
    "=="(vector: Vector2) {
      return this.x === vector.x && this.y === vector.y;
    }
    
    toString() {
      return `Vector2 [${this.x}, ${this.y}]`;
    }
};

const vec1 = new Vector2(10, 20);
const vec2 = new Vector2(20, 30);
const vec3 = new Vector2(1, 2);

const sumVec = (vec1)["+"](vec2)["+"](vec3);
const isEqual = (vec1)["=="](vec2);

console.log(`${sumVec}`); // Vector2 [31, 52]
```

#### 2.2 한계점

`vec1 + vec2`가 아니라 `vec1 ["+"] (vec2)`라니... 참신하긴 하지만 가독성이 절망적이다.

원리는 동일하고, `add`를 `+`로 바꾸기만 한 것 일뿐...

일반적인 메소드 호출(add)보다 타이핑하기도 어렵고, 기존 코드와 완전히 다른 형식에 이 코드를 읽는 사람들의 가독성도 심하게 해친다.

여러 꼼수들을 직접 구현해 보고 나서야 깨달은 것들
- 언어의 설계를 거스르지 말자
  - 자바스크립트가 연산자 오버로딩을 지원하지 않는 데에는 이유가 있다.
  - [TC39 Proposal: Operator Overloading](https://github.com/tc39/proposal-operator-overloading)
- 가독성의 재정의
    - + 기호를 쓰는 것이 수학적으로는 아름다울지 몰라도, 프로그래밍 관점에서는 add()라는 명시적인 메소드가 훨씬 읽기 좋고 예측 가능하다.
    - 또한, 굳이 연산자 오버로딩이 필요한 작업이냐고 가독성에 대해 다시 생각해보라는 의견도 상당히 있었다.

Cell1 + Cell2에 대한 미련을 버리고, 얌전히 `Cell1.add(Cell2)`를 구현하여 사용하기로 했다.