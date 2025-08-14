const supabaseUrl = 'https://gfvbfarsgwvkilgptkon.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmdmJmYXJzZ3d2a2lsZ3B0a29uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxNTUwNDAsImV4cCI6MjA3MDczMTA0MH0.wRuSbe2TilTS2Wg28tJQym0PNigLZ7hzf55nPVs47JU'; 

  // 1. 티어별 MMR 기준표 데이터
  const MMR_DATA = {
    "아이언4": 825,
    "아이언3": 875, 
    "아이언2": 925, 
    "아이언1": 975,
    "브론즈4": 1025, 
    "브론즈3": 1075, 
    "브론즈2": 1125, 
    "브론즈1": 1175,
    "실버4": 1225, 
    "실버3": 1275, 
    "실버2": 1325, 
    "실버1": 1375,
    "골드4": 1425, 
    "골드3": 1475, 
    "골드2": 1525, 
    "골드1": 1575,
    "플래티넘4": 1625, 
    "플래티넘3": 1675, 
    "플래티넘2": 1725, 
    "플래티넘1": 1775,
    "에메랄드4": 1850, 
    "에메랄드3": 1950, 
    "에메랄드2": 2050, 
    "에메랄드1": 2150,
    "다이아몬드4": 2250, 
    "다이아몬드3": 2350, 
    "다이아몬드2": 2450, 
    "다이아몬드1": 2600,
    "마스터": 2850, 
    "그랜드마스터": 3100, 
    "챌린저": 3200
  };

  // 2. 티어 순서 데이터 (승급/강등 기준)
  const TIER_ORDER = [
    "아이언4", 
    "아이언3", 
    "아이언2", 
    "아이언1",
    "브론즈4", 
    "브론즈3", 
    "브론즈2", 
    "브론즈1",
    "실버4", 
    "실버3", 
    "실버2", 
    "실버1",
    "골드4", 
    "골드3", 
    "골드2", 
    "골드1",
    "플래티넘4", 
    "플래티넘3", 
    "플래티넘2", 
    "플래티넘1",
    "에메랄드4", 
    "에메랄드3", 
    "에메랄드2", 
    "에메랄드1",
    "다이아몬드4", 
    "다이아몬드3", 
    "다이아몬드2", 
    "다이아몬드1",
    "마스터", 
    "그랜드마스터", 
    "챌린저"
  ];
  // 1. 승률에 따른 LP 변동 값 데이터 (글로벌 상수)
  const LP_DATA = {
    0: [30, -60],
    5: [30, -58],  
    10: [30, -56],  
    15: [30, -54],
    20: [30, -52],  
    25: [30, -50],  
    30: [30, -46],  
    35: [30, -42],
    40: [30, -38], 
    45: [30, -35],  
    50: [30, -30],  
    55: [35, -30],
    60: [38, -30],  
    65: [42, -30],  
    70: [46, -30],  
    75: [50, -30],
    80: [52, -30],  
    85: [54, -30],  
    90: [56, -30],  
    95: [58, -30],
    100: [60, -30]
  };

// 로딩 오버레이를 보여주는 함수
function showLoader(message = "처리 중...") {
  document.getElementById('loader-text').innerText = message;
  document.getElementById('loader-overlay').style.display = 'flex';
}

// 로딩 오버레이를 숨기는 함수
function hideLoader() {
  document.getElementById('loader-overlay').style.display = 'none';
}

// 성공 토스트 알림을 보여주는 함수
function showSuccessToast(message) {
  Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
  }).showToast();
}

// 실패 토스트 알림을 보여주는 함수
function showErrorToast(message) {
  Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
  }).showToast();
}

