// https://school.programmers.co.kr/learn/courses/30/lessons/42583

// 방법 1: 공간 관점 풀이(다리를 배열로 표현하여 물리적 공간을 시뮬레이션)
function solution1(bridge_length, weight, truck_weights) {
  // 다리의 전체 칸을 0으로 초기화 (각 칸이 다리의 실제 위치를 표현)
  const bridge = Array(bridge_length).fill(0);
  let current_weight = 0;
  let time = 0;

  while (truck_weights.length > 0 || current_weight > 0) {
    // 매 초마다 맨 앞 칸의 트럭(또는 0)을 제거하여 이동 표현
    current_weight -= bridge.shift();

    // 다리에 새 트럭을 진입시킬 수 있는지 확인
    if (
      truck_weights.length > 0 &&
      current_weight + truck_weights[0] <= weight
    ) {
      const new_truck = truck_weights.shift();
      bridge.push(new_truck);
      current_weight += new_truck;
    } else {
      bridge.push(0); // 트럭이 진입할 수 없으면 빈 공간(0) 추가
    }

    time++;
  }

  return time;
}

// 방법 2: 시간 관점 풀이(각 트럭의 진입 시간을 기록하여 이동 시간을 계산)
function solution2(bridge_length, weight, truck_weights) {
  // 다리 위 트럭들의 [무게, 진입시간]을 저장하는 큐
  const queue = [];
  let time = 0;
  let current_weight = 0;

  while (truck_weights.length > 0 || queue.length > 0) {
    time++;

    // 선두 트럭의 이동 시간이 다리 길이와 같아지면 다리에서 제거
    if (queue.length > 0 && time - queue[0][1] === bridge_length) {
      current_weight -= queue.shift()[0];
    }

    // 새 트럭의 진입 시간과 무게를 큐에 기록
    if (
      truck_weights.length > 0 &&
      current_weight + truck_weights[0] <= weight
    ) {
      const truck = truck_weights.shift();
      queue.push([truck, time]);
      current_weight += truck;
    }
  }

  return time;
}
