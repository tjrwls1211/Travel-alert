const countryNames = {
  // 아시아
  AF: '아프가니스탄',
  AM: '아르메니아',
  AZ: '아제르바이잔',
  BH: '바레인',
  BD: '방글라데시',
  BT: '부탄',
  BN: '브루나이',
  KH: '캄보디아',
  CN: '중국',
  GE: '조지아',
  IN: '인도',
  ID: '인도네시아',
  IR: '이란',
  IQ: '이라크',
  IL: '이스라엘',
  JP: '일본',
  JO: '요르단',
  KZ: '카자흐스탄',
  KW: '쿠웨이트',
  KG: '키르기스스탄',
  LA: '라오스',
  LB: '레바논',
  MY: '말레이시아',
  MV: '몰디브',
  MN: '몽골',
  MM: '미얀마',
  NP: '네팔',
  KP: '조선민주주의인민공화국',
  OM: '오만',
  PK: '파키스탄',
  PS: '팔레스타인',
  PH: '필리핀',
  QA: '카타르',
  SA: '사우디아라비아',
  SG: '싱가포르',
  KR: '대한민국',
  LK: '스리랑카',
  SY: '시리아',
  TJ: '타지키스탄',
  TH: '태국',
  TL: '동티모르',
  TR: '튀르키예',
  TM: '투르크메니스탄',
  AE: '아랍에미리트',
  UZ: '우즈베키스탄',
  VN: '베트남',
  YE: '예멘',
  TW: '대만',

  // 아프리카
  CI: '코트디부아르',
  DZ: '알제리',
  AO: '앙골라',
  BJ: '베냉',
  BW: '보츠와나',
  BF: '부르키나파소',
  BI: '부룬디',
  CM: '카메룬',
  CV: '카보베르데',
  CF: '중앙아프리카공화국',
  TD: '차드',
  KM: '코모로',
  CD: '콩고 민주 공화국',
  CG: '콩고 공화국',
  DJ: '지부티',
  EG: '이집트',
  GQ: '적도 기니',
  ER: '에리트레아',
  SZ: '스와질란드',
  ET: '에티오피아',
  GA: '가봉',
  GM: '감비아',
  GH: '가나',
  GN: '기니',
  GW: '기니비사우',
  KE: '케냐',
  LS: '레소토',
  LR: '라이베리아',
  LY: '리비아',
  MG: '마다가스카르',
  MW: '말라위',
  ML: '말리',
  MR: '모리타니아',
  MU: '모리셔스',
  YT: '마요트',
  MA: '모로코',
  MZ: '모잠비크',
  NA: '나미비아',
  NE: '니제르',
  NG: '나이지리아',
  RW: '르완다',
  ST: '상투메프린시페',
  SN: '세네갈',
  SC: '세이셸',
  SL: '시에라리온',
  SO: '소말리아',
  ZA: '남아프리카공화국',
  SS: '남수단',
  SD: '수단',
  TZ: '탄자니아',
  TG: '토고',
  TN: '튀니지',
  UG: '우간다',
  EH: '서사하라',
  ZM: '잠비아',
  ZW: '짐바브웨',

  // 유럽
  XK: '코소보',
  BY: '벨라루스',
  AL: '알바니아',
  AD: '안도라',
  AT: '오스트리아',
  BA: '보스니아 헤르체고비나',
  BE: '벨기에',
  BG: '불가리아',
  HR: '크로아티아',
  CY: '키프로스',
  CZ: '체코',
  DK: '덴마크',
  EE: '에스토니아',
  FI: '핀란드',
  FR: '프랑스',
  DE: '독일',
  GR: '그리스',
  HU: '헝가리',
  IS: '아이슬란드',
  IE: '아일랜드',
  IT: '이탈리아',
  LV: '라트비아',
  LI: '리히텐슈타인',
  LT: '리투아니아',
  LU: '룩셈부르크',
  MT: '몰타',
  MC: '모나코',
  MD: '몰도바',
  ME: '몬테네그로',
  NL: '네덜란드',
  MK: '마케도니아',
  NO: '노르웨이',
  PL: '폴란드',
  PT: '포르투갈',
  RO: '루마니아',
  RU: '러시아',
  SM: '산마리노',
  RS: '세르비아',
  SK: '슬로바키아',
  SI: '슬로베니아',
  ES: '스페인',
  SE: '스웨덴',
  CH: '스위스',
  UA: '우크라이나',
  GB: '영국',
  VA: '바티칸 시국',

  // 미주
  GL:'그린란드',
  CA: '캐나다',
  MX: '멕시코',
  US: '미국',
  GT: '과테말라',
  BZ: '벨리즈',
  HN: '온두라스',
  SV: '엘살바도르',
  NI: '니카라과',
  CR: '코스타리카',
  PA: '파나마',
  JM: '자메이카',
  PR: '도미니카 연방',
  DO: '도미니카 공화국',
  HT: '아이티',
  CU: '쿠바',
  BS: '바하마',
  BB: '바베이도스',
  GD: '그레나다',
  LC: '세인트루시아',
  KN: '세인트키츠 네비스',
  VC: '세인트빈센트 그레나딘',
  TT: '트리니다드 토바고',
  AR: '아르헨티나',
  BO: '볼리비아',
  BR: '브라질',
  CL: '칠레',
  CO: '콜롬비아',
  EC: '에콰도르',
  GY: '가이아나',
  PY: '파라과이',
  PE: '페루',
  SR: '수리남',
  UY: '우루과이',
  VE: '베네수엘라',
  FK: '포클랜드 제도',
  CW: '퀴라소',

  // 오세아니아
  AU: '호주',
  FJ: '피지',
  FM: '미크로네시아',
  KI: '키리바시',
  MH: '마샬 제도',
  NR: '나우루',
  NU: '니우에',
  NZ: '뉴질랜드',
  PW: '팔라우',
  PG: '파푸아뉴기니',
  WS: '사모아',
  TO: '통가',
  TV: '투발루',
  VU: '바누아투',
  SB: '솔로몬 제도',
  CK: '쿡 제도',
  NC: '뉴칼레도니아',
};

const continents = {
  Africa: ['DZ', 'AO', 'BJ', 'BW', 'BF', 'BI', 'CM', 'CV', 'CI', 'CF', 'TD', 'KM', 'CD', 'CG', 'DJ', 'EG', 'GQ', 'ER', 'SZ', 'ET', 'GA', 'GM', 'GH', 'GN', 'GW', 'KE', 'LS', 'LR', 'LY', 'MG', 'MW', 'ML', 'MR', 'MU', 'YT', 'MA', 'MZ', 'NA', 'NE', 'NG', 'RW', 'ST', 'SN', 'SC', 'SL', 'SO', 'ZA', 'SS', 'SD', 'TZ', 'TG', 'TN', 'UG', 'EH', 'ZA', 'ZM', 'ZW'],
  Asia: ['AF', 'AM', 'AZ', 'BH', 'BD', 'BT', 'BN', 'KH', 'CN','GE' , 'IN', 'ID', 'IR', 'IQ', 'IL', 'JP', 'JO', 'KZ', 'KW', 'KG', 'LA', 'LB', 'MY', 'MV', 'MN', 'MM', 'NP', 'KP', 'OM', 'PK', 'PS', 'PH', 'QA', 'SA', 'SG', 'KR', 'LK', 'SY', 'TJ', 'TH', 'TL', 'TR', 'TM', 'AE', 'UZ', 'VN', 'YE', 'TW'],
  Europe: ['AL', 'AD', 'AT', 'BA', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IS', 'IE', 'IT', 'LV', 'LI', 'LT', 'LU', 'MT', 'MC', 'MD', 'ME', 'NL', 'MK', 'NO', 'PL', 'PT', 'RO', 'RU', 'SM', 'RS', 'SK', 'SI', 'ES', 'SE', 'CH', 'UA', 'GB', 'VA', 'BY','XK'],
  America: ['GL', 'AR', 'BO', 'BR', 'CL', 'CO', 'EC', 'GY', 'PY', 'PE', 'SR', 'UY', 'VE', 'CA', 'MX', 'US', 'GT', 'BZ', 'HN', 'SV', 'NI', 'CR', 'PA', 'JM', 'DO', 'HT', 'CU', 'BS', 'BB', 'GD', 'LC', 'KN', 'VC', 'TT','PR','FK','CW'],
  Oceania: ['AU', 'FJ', 'FM', 'KI', 'MH', 'NR', 'NU', 'NZ', 'PW', 'PG', 'WS', 'TO', 'TV', 'VU','CK','NC'],
};

const alarmList = {
  0: '정보 없음',
  1: '남색 경보(여행유의)',
  2: '황색 경보(여행자제)',
  3: '적색 경보(출국권고)',
  4: '흑색 경보(여행금지)',
} 
  

const countryCoordinates = {
  XK: { name: "코소보", latLng:[42.40,21.1111]},
  AF: { name: "아프가니스탄", latLng: [33.9391, 67.7099] },
  AL: { name: "알바니아", latLng: [41.1533, 20.1683] },
  DZ: { name: "알제리", latLng: [28.0339, 1.6596] },
  AS: { name: "미국령 샘오아", latLng: [-14.2710, -170.1326] },
  AD: { name: "안도라", latLng: [42.5462, 1.6016] },
  AO: { name: "앙골라", latLng: [-11.2027, 17.8733] },
  AI: { name: "앵귈라", latLng: [18.2206, -63.0686] },
  AR: { name: "아르헨티나", latLng: [-38.4161, -63.6167] },
  AM: { name: "아르메니아", latLng: [40.0691, 45.0382] },
  AW: { name: "아루바", latLng: [12.5211, -69.9683] },
  AU: { name: "호주", latLng: [-25.2744, 133.7751] },
  AT: { name: "오스트리아", latLng: [47.5162, 14.5501] },
  AZ: { name: "아제르바이잔", latLng: [40.1431, 47.5769] },
  BS: { name: "바하마", latLng: [25.0343, -77.3963] },
  BH: { name: "바레인", latLng: [25.9304, 50.6378] },
  BD: { name: "방글라데시", latLng: [23.6858, 90.3563] },
  BB: { name: "바베이도스", latLng: [13.1939, -59.5432] },
  BY: { name: "벨라루스", latLng: [53.7098, 27.9534] },
  BE: { name: "벨기에", latLng: [50.8503, 4.3517] },
  BZ: { name: "벨리즈", latLng: [17.1899, -88.4976] },
  BJ: { name: "베냉", latLng: [9.3085, 2.3158] },
  BM: { name: "버뮤다", latLng: [32.3078, -64.7505] },
  BT: { name: "부탄", latLng: [27.5142, 90.4336] },
  BO: { name: "볼리비아", latLng: [-16.5000, -68.1193] },
  BA: { name: "보스니아 헤르체고비나", latLng: [43.9159, 17.6791] },
  BW: { name: "보츠와나", latLng: [-22.3285, 24.6849] },
  BV: { name: "부베 섬", latLng: [-54.4232, 3.4134] },
  BR: { name: "브라질", latLng: [-14.2350, -51.9253] },
  IO: { name: "영국령 인도양 지역", latLng: [-6.3432, 71.8765] },
  VG: { name: "영국령 버진 아일랜드", latLng: [18.4207, -64.6399] },
  BN: { name: "브루나이", latLng: [4.5353, 114.7277] },
  BG: { name: "불가리아", latLng: [42.7339, 25.4858] },
  BF: { name: "부르키나파소", latLng: [12.2383, -1.5616] },
  BI: { name: "부룬디", latLng: [-3.3731, 29.9189] },
  KH: { name: "캄보디아", latLng: [12.5657, 104.9910] },
  CM: { name: "카메룬", latLng: [7.3697, 12.3547] },
  CA: { name: "캐나다", latLng: [56.1304, -106.3468] },
  CV: { name: "카보베르데", latLng: [16.5388, -23.0418] },
  KY: { name: "케이맨 제도", latLng: [19.3133, -81.2546] },
  CF: { name: "중앙아프리카 공화국", latLng: [6.6111, 20.9394] },
  TD: { name: "차드", latLng: [15.4542, 18.7322] },
  CL: { name: "칠레", latLng: [-35.6751, -71.5430] },
  CN: { name: "중국", latLng: [35.8617, 104.1954] },
  CX: { name: "크리스마스 섬", latLng: [-10.4475, 105.6904] },
  CC: { name: "코코스(킬링) 제도", latLng: [-12.1642, 96.8709] },
  CO: { name: "콜롬비아", latLng: [4.5709, -74.2973] },
  KM: { name: "코모로", latLng: [-11.8750, 43.8722] },
  CG: { name: "콩고", latLng: [-0.2280, 15.8270] },
  CD: { name: "콩고 민주 공화국", latLng: [-4.0383, 21.7587] },
  CK: { name: "쿡 제도", latLng: [-21.2367, -159.7777] },
  CR: { name: "코스타리카", latLng: [9.7489, -83.7534] },
  CI: { name: "코트디부아르", latLng: [7.5399, -5.5471] },
  HR: { name: "크로아티아", latLng: [45.1000, 15.2000] },
  CU: { name: "쿠바", latLng: [21.5216, -77.7812] },
  CW: { name: "퀴라소", latLng: [12.1696, -68.9900] },
  CY: { name: "키프로스", latLng: [35.1264, 33.4299] },
  CZ: { name: "체코", latLng: [49.8175, 15.4730] },
  DK: { name: "덴마크", latLng: [56.2639, 9.5018] },
  DJ: { name: "지부티", latLng: [11.8251, 42.5903] },
  DM: { name: "도미니카", latLng: [15.4144, -61.3700] },
  DO: { name: "도미니카 공화국", latLng: [18.7357, -70.1627] },
  EC: { name: "에콰도르", latLng: [-1.8312, -78.1834] },
  EG: { name: "이집트", latLng: [26.8205, 30.8025] },
  SV: { name: "엘살바도르", latLng: [13.7942, -88.8965] },
  GQ: { name: "적도 기니", latLng: [1.6500, 10.2679] },
  ER: { name: "에리트레아", latLng: [15.1794, 39.7823] },
  EE: { name: "에스토니아", latLng: [58.5953, 25.0136] },
  SZ: { name: "에스와티니", latLng: [-26.5225, 31.4659] },
  ET: { name: "에티오피아", latLng: [9.1450, 40.4897] },
  FK: { name: "포클랜드 제도", latLng: [-51.7963, -59.5236] },
  FO: { name: "페로 제도", latLng: [61.8926, -6.9118] },
  FJ: { name: "피지", latLng: [-17.7134, 178.0650] },
  FI: { name: "핀란드", latLng: [61.9241, 25.7482] },
  FR: { name: "프랑스", latLng: [46.6034, 1.8883] },
  GF: { name: "프랑스령 기아나", latLng: [3.9339, -53.1258] },
  PF: { name: "프랑스령 폴리네시아", latLng: [-17.6797, -149.4068] },
  GA: { name: "가봉", latLng: [-0.8037, 11.6094] },
  GM: { name: "감비아", latLng: [13.4432, -15.3101] },
  JP: { name: "일본", latLng: [35.92,138.92]},
  GE: { name: "조지아", latLng: [42.3154, 43.3569] },
  GH: { name: "가나", latLng: [7.5399, -0.0016] },
  GI: { name: "지브롤터", latLng: [36.1377, -5.3454] },
  GR: { name: "그리스", latLng: [39.0742, 21.8243] },
  GL: { name: "그린란드", latLng: [71.7069, -42.6043] },
  GD: { name: "그레나다", latLng: [12.1165, -61.6790] },
  GP: { name: "과들루프", latLng: [16.9956, -62.0675] },
  GU: { name: "괌", latLng: [13.4443, 144.7937] },
  GT: { name: "과테말라", latLng: [15.7835, -90.2308] },
  GG: { name: "건지 섬", latLng: [49.4657, -2.5854] },
  GN: { name: "기니", latLng: [9.9456, -9.6966] },
  GW: { name: "기니비사우", latLng: [11.8037, -15.1804] },
  GY: { name: "가이아나", latLng: [4.8604, -58.9302] },
  HT: { name: "아이티", latLng: [18.9712, -72.2852] },
  HM: { name: "허드와 맥도널드 제도", latLng: [-53.0818, 72.5311] },
  VA: { name: "바티칸 시국", latLng: [41.9029, 12.4534] },
  HN: { name: "온두라스", latLng: [13.9000, -75.7833] },
  HK: { name: "홍콩", latLng: [22.3964, 114.1095] },
  HU: { name: "헝가리", latLng: [47.1625, 19.5033] },
  IS: { name: "아이슬란드", latLng: [64.9631, -19.0208] },
  IN: { name: "인도", latLng: [20.5937, 78.9629] },
  ID: { name: "인도네시아", latLng: [-0.7893, 113.9213] },
  IR: { name: "이란", latLng: [32.4279, 53.6880] },
  IQ: { name: "이라크", latLng: [33.2232, 43.6793] },
  IE: { name: "아일랜드", latLng: [53.4129, -8.2439] },
  IM: { name: "맨 섬", latLng: [54.2361, -4.5481] },
  IL: { name: "이스라엘", latLng: [31.0461, 34.8516] },
  IT: { name: "이탈리아", latLng: [41.8719, 12.5674] },
  JE: { name: "저지 섬", latLng: [49.2144, -2.1312] },
  JO: { name: "요르단", latLng: [30.5852, 36.2384] },
  KZ: { name: "카자흐스탄", latLng: [48.0196, 66.9237] },
  KE: { name: "케냐", latLng: [-0.0236, 37.9062] },
  KI: { name: "키리바시", latLng: [-3.3704, -168.7340] },
  KP: { name: "북한", latLng: [40.3399, 127.5101] },
  KR: { name: "대한민국", latLng: [35.9078, 127.7669] },
  KW: { name: "쿠웨이트", latLng: [29.3117, 47.4818] },
  KG: { name: "키르기스스탄", latLng: [41.2044, 74.7661] },
  LA: { name: "라오스", latLng: [19.8563, 102.4950] },
  LV: { name: "라트비아", latLng: [56.8796, 24.6032] },
  LB: { name: "레바논", latLng: [33.8547, 35.8623] },
  LS: { name: "레소토", latLng: [-29.6094, 28.2336] },
  LR: { name: "라이베리아", latLng: [6.4281, -9.4295] },
  LY: { name: "리비아", latLng: [26.3351, 17.2284] },
  LI: { name: "리히텐슈타인", latLng: [47.1660, 9.5554] },
  LT: { name: "리투아니아", latLng: [55.1694, 23.8813] },
  LU: { name: "룩셈부르크", latLng: [49.8153, 6.1296] },
  MO: { name: "마카오", latLng: [22.1987, 113.5439] },
  MK: { name: "북마케도니아", latLng: [41.6086, 21.7453] },
  MG: { name: "마다가스카르", latLng: [-18.7669, 46.8691] },
  MW: { name: "말라위", latLng: [-13.2543, 34.3015] },
  MY: { name: "말레이시아", latLng: [4.2105, 101.9758] },
  MV: { name: "몰디브", latLng: [3.2028, 73.2207] },
  ML: { name: "말리", latLng: [17.5707, -3.9962] },
  MT: { name: "몰타", latLng: [35.9375, 14.3754] },
  MH: { name: "마샬 제도", latLng: [7.1315, 171.1845] },
  MQ: { name: "마르티니크", latLng: [14.6415, -61.0242] },
  MR: { name: "모리타니", latLng: [21.0079, -10.9408] },
  MU: { name: "모리셔스", latLng: [-20.3484, 57.5522] },
  TR: { name: "튀르키예", latLng: [39.5297,32.5383]},
  YT: { name: "마요트", latLng: [-12.8275, 45.1662] },
  MX: { name: "멕시코", latLng: [23.6345, -102.5528] },
  FM: { name: "미크로네시아 연방", latLng: [7.4256, 150.5508] },
  MD: { name: "몰도바", latLng: [47.4116, 28.3699] },
  MC: { name: "모나코", latLng: [43.7333, 7.4167] },
  MN: { name: "몽골", latLng: [46.8625, 103.8467] },
  ME: { name: "몬테네그로", latLng: [42.7087, 19.3744] },
  MS: { name: "몬트세랫", latLng: [16.7500, -62.2000] },
  MA: { name: "모로코", latLng: [31.7917, -7.0926] },
  MZ: { name: "모잠비크", latLng: [-18.6657, 35.5296] },
  MM: { name: "미얀마", latLng: [21.9139, 95.9560] },
  NA: { name: "나미비아", latLng: [-22.5597, 17.0820] },
  NR: { name: "나우루", latLng: [-0.5228, 166.9315] },
  NP: { name: "네팔", latLng: [28.3949, 84.1240] },
  NL: { name: "네덜란드", latLng: [52.3676, 4.9041] },
  NC: { name: "뉴칼레도니아", latLng: [-20.9043, 165.6180] },
  NZ: { name: "뉴질랜드", latLng: [-40.9006, 174.8860] },
  NI: { name: "니카라과", latLng: [12.8654, -85.2072] },
  NE: { name: "니제르", latLng: [17.6078, 8.0817] },
  NG: { name: "나이지리아", latLng: [9.0820, 8.6753] },
  NU: { name: "니우에", latLng: [-19.0544, -169.8684] },
  NF: { name: "노퍽 섬", latLng: [-29.0408, 167.9547] },
  MP: { name: "북마리아나 제도", latLng: [15.0979, 145.6739] },
  NO: { name: "노르웨이", latLng: [60.4720, 8.4689] },
  OM: { name: "오만", latLng: [21.5126, 55.9233] },
  PK: { name: "파키스탄", latLng: [30.3753, 69.3451] },
  PW: { name: "팔라우", latLng: [7.5149, 134.5825] },
  PA: { name: "파나마", latLng: [8.9824, -79.5190] },
  PG: { name: "파푸아뉴기니", latLng: [-6.3149, 143.9555] },
  PY: { name: "파라과이", latLng: [-23.4420, -58.4438] },
  PE: { name: "페루", latLng: [-9.1900, -75.0152] },
  PH: { name: "필리핀", latLng: [12.8797, 121.7740] },
  PN: { name: "피트케언 제도", latLng: [-24.7036, -127.4393] },
  PL: { name: "폴란드", latLng: [51.9194, 19.1451] },
  PT: { name: "포르투갈", latLng: [39.3999, -8.2245] },
  PR: { name: "푸에르토리코", latLng: [18.2208, -66.5901] },
  QA: { name: "카타르", latLng: [25.2760, 51.5200] },
  RE: { name: "레위니옹", latLng: [-21.1151, 55.5364] },
  RO: { name: "루마니아", latLng: [45.9432, 24.9668] },
  RU: { name: "러시아", latLng: [61.5240, 105.3188] },
  RW: { name: "르완다", latLng: [-1.9403, 29.8739] },
  SH: { name: "세인트헬레나", latLng: [-15.9650, -5.6551] },
  LC: { name: "세인트루시아", latLng: [13.9094, -60.9789] },
  KN: { name: "세인트키츠 네비스", latLng: [17.3578, -62.7829] },
  VC: { name: "세인트빈센트 그레나딘", latLng: [12.9843, -61.2872] },
  WS: { name: "사모아", latLng: [-13.7590, -172.1046] },
  SM: { name: "산마리노", latLng: [43.9333, 12.4500] },
  ST: { name: "상투메 프린시페", latLng: [0.1864, 6.6131] },
  SA: { name: "사우디아라비아", latLng: [23.8859, 45.0792] },
  SN: { name: "세네갈", latLng: [14.6928, -14.0094] },
  SC: { name: "세이셸", latLng: [-4.6796, 55.4915] },
  SL: { name: "시에라리온", latLng: [8.4606, -11.7799] },
  SG: { name: "싱가포르", latLng: [1.3521, 103.8198] },
  SX: { name: "신트마르텐", latLng: [18.0426, -63.0558] },
  SK: { name: "슬로바키아", latLng: [48.6690, 19.6990] },
  SI: { name: "슬로베니아", latLng: [46.1512, 14.9955] },
  SB: { name: "솔로몬 제도", latLng: [-9.4280, 160.0000] },
  SO: { name: "소말리아", latLng: [5.1521, 46.1996] },
  ZA: { name: "남아프리카 공화국", latLng: [-30.5595, 22.9375] },
  GS: { name: "남조지아 및 남극 대륙", latLng: [-54.4296, -36.5879] },
  SS: { name: "남수단", latLng: [6.8769, 31.3069] },
  ES: { name: "스페인", latLng: [40.4637, -3.7492] },
  LK: { name: "스리랑카", latLng: [7.8731, 80.7718] },
  SD: { name: "수단", latLng: [12.8628, 30.2176] },
  SR: { name: "수리남", latLng: [3.9193, -56.0278] },
  SJ: { name: "스발바르 및 얀 마옌 제도", latLng: [77.0000, 23.0000] },
  SE: { name: "스웨덴", latLng: [60.1282, 18.6435] },
  CH: { name: "스위스", latLng: [46.8182, 8.2275] },
  SY: { name: "시리아", latLng: [32.5148, 36.2765] },
  TJ: { name: "타지키스탄", latLng: [38.8610, 71.2761] },
  TZ: { name: "탄자니아", latLng: [-6.3690, 34.8888] },
  TH: { name: "태국", latLng: [15.8700, 100.9925] },
  TL: { name: "동티모르", latLng: [-8.8742, 125.7275] },
  TG: { name: "토고", latLng: [8.6195, 0.8248] },
  TK: { name: "토켈라우", latLng: [-9.2000, -171.8500] },
  TO: { name: "통가", latLng: [-21.1789, -175.1982] },
  TN: { name: "튀니지", latLng: [33.8869, 9.5375] },
  TV: { name: "투발루", latLng: [-7.1095, 179.1940] },
  UG: { name: "우간다", latLng: [1.3733, 32.2903] },
  UA: { name: "우크라이나", latLng: [48.3794, 31.1656] },
  AE: { name: "아랍에미리트", latLng: [23.4241, 53.8478] },
  GB: { name: "영국", latLng: [55.3781, -3.4360] },
  US: { name: "미국", latLng: [37.0902, -95.7129] },
  UY: { name: "우루과이", latLng: [-32.5228, -55.7658] },
  UZ: { name: "우즈베키스탄", latLng: [41.3775, 64.5854] },
  VU: { name: "바누아투", latLng: [-15.3767, 166.9591] },
  VE: { name: "베네수엘라", latLng: [6.4238, -66.5897] },
  VN: { name: "베트남", latLng: [14.0583, 108.2772] },
  WF: { name: "왈리스 푸투나", latLng: [-13.3000, -176.2000] },
  EH: { name: "서사하라", latLng: [24.2155, -12.8858] },
  TW: { name: "대만", latLng: [25.06712,121.6114]},
  YE: { name: "예멘", latLng: [15.5524, 48.5164] },
  ZM: { name: "잠비아", latLng: [-13.1339, 27.8493] },
  ZW: { name: "짐바브웨", latLng: [-19.0154, 29.1549] }
}


export { countryNames, continents, countryCoordinates, alarmList};