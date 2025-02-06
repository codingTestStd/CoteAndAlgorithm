function solution(numbers, hand) {
    // 키패드를 열 기준 2차원 배열로 정의
    const keypad = [
        [1, 4, 7, "*"],    // 왼쪽 열
        [2, 5, 8, 0],      // 가운데 열
        [3, 6, 9, "#"]     // 오른쪽 열
    ]

    // 각 숫자의 좌표를 Map으로 저장
    const getPos = new Map()
    // 열과 행 기준으로 좌표 저장
    for(let x = 0; x < keypad.length; x++) {
        for(let y = 0; y < keypad[x].length; y++) {
            getPos.set(keypad[x][y], [x, y])
        }
    }

    let left = getPos.get("*")     // 왼손 시작 위치
    let right = getPos.get("#")    // 오른손 시작 위치

    // 두 좌표 사이의 거리 계산
    const getDist = ([x1, y1], [x2, y2]) => 
        Math.abs(x1 - x2) + Math.abs(y1 - y2)

    return numbers.map(num => {
        const target = getPos.get(num)

        // 첫 번째 열은 무조건 왼손
        if(target[0] === 0) {
            left = target
            return "L"
        }
        
        // 세 번째 열은 무조건 오른손
        if(target[0] === 2) {
            right = target
            return "R"
        }

        // 가운데 열인 경우 거리 계산
        const leftDist = getDist(left, target)
        const rightDist = getDist(right, target)

        // 거리가 같으면 주손잡이 기준
        if(leftDist === rightDist) {
            if(hand === "right") {
                right = target
                return "R"
            } else {
                left = target
                return "L"
            }
        }

        // 거리가 다르면 가까운 손 사용
        if(leftDist < rightDist) {
            left = target
            return "L"
        } else {
            right = target
            return "R"
        }
    }).join("")
}