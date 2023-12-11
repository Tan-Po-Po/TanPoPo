const temp = {
  level: "",
  pointsToProceed: "",
  tests: [
    {
      question: "",
      subquestion1: {
        question: "",
        answers: [],
        correctAnswer: "",
      },
      subquestion2: {
        question: "",
        answers: [],
        correctAnswer: "",
      },
    },
  ],
};

// export const textContents = [
//   {
//     level: "N5",
//     pointsToProceed: "5",
//     tests: [
//       {
//         question: "にほんのさくらのき　は　とても　うつくしい　です　か。",
//         subquestion: {
//           question: "さ、も、う читаємо як",
//           answers: ["кі,мо,у", "са,ма,цу", "са,мо,у", "кі,ма,цу"],
//           correctAnswer: "са,мо,у",
//         },
//         subquestion2: {
//           question: "яке дане речення?",
//           answers: ["стверджувальне", "окличне", "нейтральне", "питальне"],
//           correctAnswer: "питальне",
//         },
//       },
//       {
//         question: "こんばんは！",
//         subquestion1: {
//           question: "остання літера - це",
//           answers: ["ха", "хо", "ва", "на"],
//           correctAnswer: "ва",
//         },
//       },
//       {
//         question: "ちいさいかめらをばっぐのぽけっと にいれました。",
//         subquestion1: {
//           question: "かめら катаканою",
//           answers: ["カメル", "カメラ", "カヌラ", "カメワ"],
//           correctAnswer: "カメラ",
//         },
//         subquestion2: {
//           question: "ばっぐ、ぽけっと катаканою",
//           answers: [
//             "バッグ、ポケッチ",
//             "バッゲ、オケット",
//             "バッゲ、オケット",
//             "バッグ、ポケット",
//           ],
//           correctAnswer: "バッグ、ポケット",
//         },
//       },
//       {
//         question: "シュミットさん　は　ピザ　を　たべます。",
//         subquestion1: {
//           question: "シュ　читаємо як",
//           answers: ["шю", "шя", "джю", "джя"],
//           correctAnswer: "шю",
//         },
//         subquestion2: {
//           question: "переклади ピザ",
//           answers: ["сік", " піца", "паста", " пиво"],
//           correctAnswer: "піца",
//         },
//       },
//       {
//         question: "ちち、おにいちゃん、おねえちゃん",
//         subquestion1: {
//           question: "загальна тема слів",
//           answers: [
//             "хобі しゅみ",
//             "їжа　たべもの",
//             "кольори いろ　",
//             "сімʼя　かぞく",
//           ],
//           correctAnswer: "сімʼя　かぞく",
//         },
//       },
//     ],
//   },
//   {
//     level: "N5+",
//     pointsToProceed: "7",
//     tests: [
//       {
//         question: "ナイフ___________ パンをきります",
//         subquestion1: {
//           question: "вставити частку",
//           answers: ["に", "を", "が", "で"],
//           correctAnswer: "で",
//         },
//       },
//       {
//         question: "明日にほんごのテスト __________。",
//         subquestion1: {
//           question: "читаємо 明日 як",
//           answers: ["あした", "きょう", "あさって", "きのう"],
//           correctAnswer: "あした",
//         },
//         subquestion2: {
//           question: "вставити закінчення",
//           answers: ["はあります", "があります", "はいます", "がいます"],
//           correctAnswer: "があります",
//         },
//       },
//       {
//         question: "かのじょはまいしゅう土曜日にほん __________ よみます。",
//         subquestion1: {
//           question: "читаємо 土曜日 як",
//           answers: ["げつようび", "もくようび", "にちようび", "どようび"],
//           correctAnswer: "どようび",
//         },
//         subquestion2: {
//           question: "вставити частку",
//           answers: ["を", "で", "が", "は"],
//           correctAnswer: "を",
//         },
//       },
//       {
//         question: "おにいさんのへやはあまりきれい______________。",
//         subquestion1: {
//           question: "вставити закінчення",
//           answers: [
//             "ありません。",
//             "じゃいません。",
//             "じゃありません。",
//             "くないです。",
//           ],
//           correctAnswer: "じゃありません。",
//         },
//       },
//       {
//         question: "父は大学のとしょかんで はたらいて います。",
//         subquestion1: {
//           question: "читаємо 大学 як",
//           answers: ["がっこう", "がくせい", "おおがく", "だいがく"],
//           correctAnswer: "だいがく",
//         },
//         subquestion2: {
//           question: "はたらいて",
//           answers: ["動いて", "働いて", "行いて", "通いて"],
//           correctAnswer: "働いて",
//         },
//       },
//       {
//         question: "____________ はどうぶつです",
//         subquestion1: {
//           question: "вставте слово",
//           answers: ["でんしゃ", "さくら", "いぬ", "さしみ"],
//           correctAnswer: "いぬ",
//         },
//       },
//       {
//         question: "ここであそばないでください。",
//         subquestion1: {
//           question: "перекладіть речення",
//           answers: [
//             "Не галасуйте тут!",
//             "Тут не розважайтеся!",
//             "Заходьте сюди будь ласка.",
//             "Не заходьте сюди будь ласка.",
//           ],
//           correctAnswer: "Тут не розважайтеся!",
//         },
//       },
//       {
//         question: "わたしの好きなスポーツは ________ です。",
//         subquestion1: {
//           question: "читаємо 好 як",
//           answers: ["あい", "す", "さい", "こ"],
//           correctAnswer: "す",
//         },
//         subquestion2: {
//           question: "вставити слово",
//           answers: ["テーブル", "コーヒー", "スキー", "ピアノ"],
//           correctAnswer: "スキー",
//         },
//       },
//     ],
//   },
//   {
//     level: "N4",
//     pointsToProceed: "5",
//     tests: [
//       {
//         question: "どうぞさきにたべてください。わたしはあとで食べます。",
//         subquestion1: {
//           question: "Оберіть переклад",
//           answers: [
//             "Будь ласка, їжте спершу ви. Я поїм потім.",
//             "Будь ласка, їжте спершу ви. Я вже поїла. ",
//             "Будь ласка,їжте більше. Я вже поїла.",
//             "Будь ласка, їжте більше. Я вже не буду їсти.",
//           ],
//           correctAnswer: "Будь ласка, їжте спершу ви. Я поїм потім.",
//         },
//       },
//       {
//         question: "うちには _____________ 子どもがいて、いつもにぎやかです。",
//         subquestion1: {
//           question: "вставте слово",
//           answers: ["かわいい", "おおきい", "ひくい", "ちいさい"],
//           correctAnswer: "ちいさい",
//         },
//       },
//       {
//         question: "先週学校で友だちができて、______________です。",
//         subquestion1: {
//           question: "вставте слово",
//           answers: [
//             "ただしかった",
//             "おいしかった",
//             "うれしかった",
//             "さびしかった",
//           ],
//           correctAnswer: "うれしかった",
//         },
//       },
//       {
//         question: "みかんとパインアップルと________が好きですか。",
//         subquestion1: {
//           question: "вставте слово",
//           answers: ["どれ", "なに", "どうして", "どちら"],
//           correctAnswer: "どちら",
//         },
//       },
//       {
//         question: "父は大学のとしょかんで はたらいて います。",
//         subquestion1: {
//           question: "читаємо 大学 як",
//           answers: ["がっこう", "がくせい", "おおがく", "だいがく"],
//           correctAnswer: "だいがく",
//         },
//         subquestion2: {
//           question: "はたらいて ієрогліфами",
//           answers: ["動いて", "働いて", "行いて", "通いて"],
//           correctAnswer: "働いて",
//         },
//       },
//       {
//         question: "川で魚をとりました。やきましょうか。",
//         subquestion1: {
//           question: "魚 читаємо як",
//           answers: ["こめ", "さかな", "にく", "やさい"],
//           correctAnswer: "さかな",
//         },
//         subquestion2: {
//           question: "переклад до やきましょうか。",
//           answers: [
//             "Запечемо?",
//             "Давай запікати!",
//             "Запечеш мені?",
//             "Хочу запекти!",
//           ],
//           correctAnswer: "Запечемо?",
//         },
//       },
//     ],
//   },
//   {
//     level: "N4+",
//     pointsToProceed: "3",
//     tests: [
//       {
//         question: "ゆみさんのしゅみは________をすることです。",
//         subquestion1: {
//           question: "вставте слово",
//           answers: ["タクシー", "バレーボール", "カメラ", "ニュース"],
//           correctAnswer: "バレーボール",
//         },
//       },
//       {
//         question: "わたしのうちへも_________あそびにきてください。",
//         subquestion1: {
//           question: "вставте  слово",
//           answers: ["いちど", "いちばん", "いっけん", "いっこ"],
//           correctAnswer: "いちど",
//         },
//       },
//       {
//         question: "わたしは　しょうらい医者になる______________です。",
//         subquestion1: {
//           question: "оберіть закінчення",
//           answers: ["ところ", "たい", "そう", "つもり"],
//           correctAnswer: "つもり",
//         },
//       },
//       {
//         question: "十五分____________車のサイレンが聞こえました。",
//         subquestion1: {
//           question: "вставте конструкцію",
//           answers: ["うえに", "あとに", "ように", "までに"],
//           correctAnswer: "あとに",
//         },
//       },
//       {
//         question: "先週からさむかったので、母はかぜを_______________。",
//         subquestion1: {
//           question: "вставте слово",
//           answers: ["しました", "ひきました", "なりました", "うつりました"],
//           correctAnswer: "ひきました",
//         },
//       },
//     ],
//   },
//   {
//     level: "N3",
//     pointsToProceed: "3",
//     tests: [
//       {
//         question: "さゆり__________名前の学生は東京大学に入学できました。",
//         subquestion1: {
//           question: "вставте сполуку",
//           answers: ["という", "といった", "というと", "というのは"],
//           correctAnswer: "という",
//         },
//       },
//       {
//         question:
//           "明日大好きな歌手のコンサートに行く。パパの _______ いい席が手に入った。",
//         subquestion1: {
//           question: "вставте сполуку",
//           answers: ["せいで", "通して", "ともに", "おかげで"],
//           correctAnswer: "おかげで",
//         },
//       },
//       {
//         question:
//           "昨日赤ちゃんが眠っている____________、私たちは部屋を掃除した。",
//         subquestion1: {
//           question: "вставте сполуку",
//           answers: ["あいだは", "あいだと", "あいだに", "あいだで"],
//           correctAnswer: "あいだに",
//         },
//       },
//       {
//         question: "後輩に仕事のやり方について _______ をしました。",
//         subquestion1: {
//           question: "оберіть слово",
//           answers: ["アイデア", "アドバイス", "デザイン", "イメージ"],
//           correctAnswer: "アドバイス",
//         },
//       },
//       {
//         question: "あの人はプロのサッカー選手です。",
//         subquestion1: {
//           question: "選手 читаємо як",
//           answers: ["ぜんしゅ", "せんしゅう", "せんしゅ", "ぜんしゅう"],
//           correctAnswer: "せんしゅ",
//         },
//       },
//     ],
//   },
//   {
//     level: "N3+",
//     pointsToProceed: "3",
//     tests: [
//       {
//         question: "何度もしっぱいしても、彼女は「あきらめなかった」。",
//         subquestion1: {
//           question: "синонімічна фраза - це",
//           answers: [
//             "気にしなかった",
//             "やめようとしなかった",
//             "あやまろうとしなかった",
//             "怒らなかった",
//           ],
//           correctAnswer: "やめようとしなかった",
//         },
//       },
//       {
//         question: "実験がうまくいかなかったので、「やりなおした」。",
//         subquestion1: {
//           question: "синонімічна фраза - це",
//           answers: [
//             "やり方を調べた",
//             "やり方を教わった",
//             "やるのを途中でやめた",
//             "もう一度やった",
//           ],
//           correctAnswer: "もう一度やった",
//         },
//       },
//       {
//         question: "あした家族を公園に _______ 行くことになっている。",
//         subquestion1: {
//           question: "вставте сполуку",
//           answers: ["むけて", "おこして", "つれて", "かえして"],
//           correctAnswer: "つれて",
//         },
//       },
//       {
//         question: "息子から _______ に帰ったという連絡がありました。",
//         subquestion1: {
//           question: "оберіть слово",
//           answers: ["無事", "意外", "穏やか", "安らか"],
//           correctAnswer: "無事",
//         },
//       },
//     ],
//   },
//   {
//     level: "N2",
//     pointsToProceed: "3",
//     tests: [
//       {
//         question:
//           "天気予報によれば、来週の日本列島は、全国的に晴天が続くそうです。",
//         subquestion1: {
//           question: "читаємоі 列島 як",
//           answers: ["れいしま", "れっとう", "れいとう", "れっしま"],
//           correctAnswer: "れっとう",
//         },
//         subquestion2: {
//           question: "читаємо 晴天 як",
//           answers: ["せいてん", "せいでん", "すいてん", "すいでん"],
//           correctAnswer: "せいてん",
//         },
//       },
//       {
//         question: "______ の結果、私たちの活動は社会に認められました。",
//         subquestion1: {
//           question: "вставте слово",
//           answers: ["自慢", "努力", "目的", "覚悟"],
//           correctAnswer: "努力",
//         },
//       },
//       {
//         question: "親が自分の子供をかわいいと思うのは _______ 。",
//         subquestion1: {
//           question: "вставте слово",
//           answers: ["あたりまえだ", "なまいきだ", "おおざっぱだ", "えらそうだ"],
//           correctAnswer: "あたりまえだ",
//         },
//       },
//       {
//         question:
//           "息子はコーチが用意した練習メニュー _______ 一生懸命練習を続けている。",
//         subquestion1: {
//           question: "вставте сполуку",
//           answers: ["にとって", "に対して", "に関して", "に従って"],
//           correctAnswer: "に従って",
//         },
//       },
//     ],
//   },
//   {
//     level: "N1",
//     pointsToProceed: "3",
//     tests: [
//       {
//         question:
//           "教育の普及こそ近代国家発展の源であるという考えに立って、日本では徹底した義務教育が行われてきた。",
//         subquestion1: {
//           question: "читаємо 普及 як",
//           answers: ["ふっきゅう", "ふっきょう", "ふきゅう", "ふきょう"],
//           correctAnswer: "ふきゅう",
//         },
//         subquestion2: {
//           question: "читаємо 源 як",
//           answers: ["もと", "げん", "おおもと", "みなもと"],
//           correctAnswer: "みなもと",
//         },
//       },
//       {
//         question: "Suicaの _______ は、実は国鉄時代から進められてきた。",
//         subquestion1: {
//           question: "вставте слово",
//           answers: ["搾取", "収奪", "拓殖", "開発"],
//           correctAnswer: "開発",
//         },
//       },
//       {
//         question:
//           "他人を犠牲にする _______ なしに、個人の望みを達成することは困難だと考えている人も います。",
//         subquestion1: {
//           question: "вставте сполуку",
//           answers: ["の", "こと", "もの", "ところ"],
//           correctAnswer: "こと",
//         },
//       },
//       {
//         question: "苦難に満ちたあの人の人生は、涙なくしては _______ 。",
//         subquestion1: {
//           question: "вставте сполуку",
//           answers: ["語る", "語らない", "語れる", "語れない"],
//           correctAnswer: "語れない",
//         },
//       },
//     ],
//   },
// ];

export const textContent = [
  {
    level: "N5",
    pointsToProceed: 5,
    tests: [
      {
        question: "にほんのさくらのき　は　とても　うつくしい　です　か。",
        subquestions: [
          {
            question: "さ、も、う читаємо як",
            answers: ["кі,мо,у", "са,ма,цу", "са,мо,у", "кі,ма,цу"],
            correctAnswer: "са,мо,у",
          },
          {
            question: "яке дане речення?",
            answers: ["стверджувальне", "окличне", "нейтральне", "питальне"],
            correctAnswer: "питальне",
          },
        ],
      },
      {
        question: "こんばんは！",
        subquestions: [
          {
            question: "остання літера - це",
            answers: ["ха", "хо", "ва", "на"],
            correctAnswer: "ва",
          },
        ],
      },
      {
        question: "ちいさいかめらをばっぐのぽけっと にいれました。",
        subquestions: [
          {
            question: "かめら катаканою",
            answers: ["カメル", "カメラ", "カヌラ", "カメワ"],
            correctAnswer: "カメラ",
          },
          {
            question: "ばっぐ、ぽけっと катаканою",
            answers: [
              "バッグ、ポケッチ",
              "バッゲ、オケッド",
              "バッゲ、オケット",
              "バッグ、ポケット",
            ],
            correctAnswer: "バッグ、ポケット",
          },
        ],
      },
      {
        question: "シュミットさん　は　ピザ　を　たべます。",
        subquestions: [
          {
            question: "シュ　читаємо як",
            answers: ["шю", "шя", "джю", "джя"],
            correctAnswer: "шю",
          },
          {
            question: "переклади ピザ",
            answers: ["сік", " піца", "паста", " пиво"],
            correctAnswer: "піца",
          },
        ],
      },
      {
        question: "ちち、おにいちゃん、おねえちゃん",
        subquestions: [
          {
            question: "загальна тема слів",
            answers: [
              "хобі しゅみ",
              "їжа　たべもの",
              "кольори いろ　",
              "сімʼя　かぞく",
            ],
            correctAnswer: "сімʼя　かぞく",
          },
        ],
      },
    ],
  },
  {
    level: "N5+",
    pointsToProceed: 7,
    tests: [
      {
        question: "ナイフ___________ パンをきります",
        subquestions: [
          {
            question: "вставити частку",
            answers: ["に", "を", "が", "で"],
            correctAnswer: "で",
          },
        ],
      },
      {
        question: "明日にほんごのテスト __________。",
        subquestions: [
          {
            question: "читаємо 明日 як",
            answers: ["あした", "きょう", "あさって", "きのう"],
            correctAnswer: "あした",
          },
          {
            question: "вставити закінчення",
            answers: ["はあります", "があります", "はいます", "がいます"],
            correctAnswer: "があります",
          },
        ],
      },
      {
        question: "かのじょはまいしゅう土曜日にほん __________ よみます。",
        subquestions: [
          {
            question: "читаємо 土曜日 як",
            answers: ["げつようび", "もくようび", "にちようび", "どようび"],
            correctAnswer: "どようび",
          },
          {
            question: "вставити частку",
            answers: ["を", "で", "が", "は"],
            correctAnswer: "を",
          },
        ],
      },
      {
        question: "おにいさんのへやはあまりきれい______________。",
        subquestions: [
          {
            question: "вставити закінчення",
            answers: [
              "ありません。",
              "じゃいません。",
              "じゃありません。",
              "くないです。",
            ],
            correctAnswer: "じゃありません。",
          },
        ],
      },
      {
        question: "父は大学のとしょかんで はたらいて います。",
        subquestions: [
          {
            question: "читаємо 大学 як",
            answers: ["がっこう", "がくせい", "おおがく", "だいがく"],
            correctAnswer: "だいがく",
          },
          {
            question: "はたらいて",
            answers: ["動いて", "働いて", "行いて", "通いて"],
            correctAnswer: "働いて",
          },
        ],
      },
      {
        question: "____________ はどうぶつです",
        subquestions: [
          {
            question: "вставте слово",
            answers: ["でんしゃ", "さくら", "いぬ", "さしみ"],
            correctAnswer: "いぬ",
          },
        ],
      },
      {
        question: "ここであそばないでください。",
        subquestions: [
          {
            question: "перекладіть речення",
            answers: [
              "Не галасуйте тут!",
              "Тут не розважайтеся!",
              "Заходьте сюди будь ласка.",
              "Не заходьте сюди будь ласка.",
            ],
            correctAnswer: "Тут не розважайтеся!",
          },
        ],
      },
      {
        question: "わたしの好きなスポーツは ________ です。",
        subquestions: [
          {
            question: "читаємо 好 як",
            answers: ["あい", "す", "さい", "こ"],
            correctAnswer: "す",
          },
          {
            question: "вставити слово",
            answers: ["テーブル", "コーヒー", "スキー", "ピアノ"],
            correctAnswer: "スキー",
          },
        ],
      },
    ],
  },
  {
    level: "N4",
    pointsToProceed: 5,
    tests: [
      {
        question: "どうぞさきにたべてください。わたしはあとで食べます。",
        subquestions: [
          {
            question: "Оберіть переклад",
            answers: [
              "Будь ласка, їжте спершу ви. Я поїм потім.",
              "Будь ласка, їжте спершу ви. Я вже поїла. ",
              "Будь ласка,їжте більше. Я вже поїла.",
              "Будь ласка, їжте більше. Я вже не буду їсти.",
            ],
            correctAnswer: "Будь ласка, їжте спершу ви. Я поїм потім.",
          },
        ],
      },
      {
        question: "うちには _____________ 子どもがいて、いつもにぎやかです。",
        subquestions: [
          {
            question: "вставте слово",
            answers: ["かわいい", "おおきい", "ひくい", "ちいさい"],
            correctAnswer: "ちいさい",
          },
        ],
      },
      {
        question: "先週学校で友だちができて、______________です。",
        subquestions: [
          {
            question: "вставте слово",
            answers: [
              "ただしかった",
              "おいしかった",
              "うれしかった",
              "さびしかった",
            ],
            correctAnswer: "うれしかった",
          },
        ],
      },
      {
        question: "みかんとパインアップルと________が好きですか。",
        subquestions: [
          {
            question: "вставте слово",
            answers: ["どれ", "なに", "どうして", "どちら"],
            correctAnswer: "どちら",
          },
        ],
      },
      {
        question: "父は大学のとしょかんで はたらいて います。",
        subquestions: [
          {
            question: "читаємо 大学 як",
            answers: ["がっこう", "がくせい", "おおがく", "だいがく"],
            correctAnswer: "だいがく",
          },
          {
            question: "はたらいて ієрогліфами",
            answers: ["動いて", "働いて", "行いて", "通いて"],
            correctAnswer: "働いて",
          },
        ],
      },
      {
        question: "川で魚をとりました。やきましょうか。",
        subquestions: [
          {
            question: "魚 читаємо як",
            answers: ["こめ", "さかな", "にく", "やさい"],
            correctAnswer: "さかな",
          },
          {
            question: "переклад до やきましょうか。",
            answers: [
              "Запечемо?",
              "Давай запікати!",
              "Запечеш мені?",
              "Хочу запекти!",
            ],
            correctAnswer: "Запечемо?",
          },
        ],
      },
    ],
  },
  {
    level: "N4+",
    pointsToProceed: 3,
    tests: [
      {
        question: "ゆみさんのしゅみは________をすることです。",
        subquestions: [
          {
            question: "вставте слово",
            answers: ["タクシー", "バレーボール", "カメラ", "ニュース"],
            correctAnswer: "バレーボール",
          },
        ],
      },
      {
        question: "わたしのうちへも_________あそびにきてください。",
        subquestions: [
          {
            question: "вставте  слово",
            answers: ["いちど", "いちばん", "いっけん", "いっこ"],
            correctAnswer: "いちど",
          },
        ],
      },
      {
        question: "わたしは　しょうらい医者になる______________です。",
        subquestions: [
          {
            question: "оберіть закінчення",
            answers: ["ところ", "たい", "そう", "つもり"],
            correctAnswer: "つもり",
          },
        ],
      },
      {
        question: "十五分____________車のサイレンが聞こえました。",
        subquestions: [
          {
            question: "вставте конструкцію",
            answers: ["うえに", "あとに", "ように", "までに"],
            correctAnswer: "あとに",
          },
        ],
      },
      {
        question: "先週からさむかったので、母はかぜを_______________。",
        subquestions: [
          {
            question: "вставте слово",
            answers: ["しました", "ひきました", "なりました", "うつりました"],
            correctAnswer: "ひきました",
          },
        ],
      },
    ],
  },
  {
    level: "N3",
    pointsToProceed: 3,
    tests: [
      {
        question: "さゆり__________名前の学生は東京大学に入学できました。",
        subquestions: [
          {
            question: "вставте сполуку",
            answers: ["という", "といった", "というと", "というのは"],
            correctAnswer: "という",
          },
        ],
      },
      {
        question:
          "明日大好きな歌手のコンサートに行く。パパの _______ いい席が手に入った。",
        subquestions: [
          {
            question: "вставте сполуку",
            answers: ["せいで", "通して", "ともに", "おかげで"],
            correctAnswer: "おかげで",
          },
        ],
      },
      {
        question:
          "昨日赤ちゃんが眠っている____________、私たちは部屋を掃除した。",
        subquestions: [
          {
            question: "вставте сполуку",
            answers: ["あいだは", "あいだと", "あいだに", "あいだで"],
            correctAnswer: "あいだに",
          },
        ],
      },
      {
        question: "後輩に仕事のやり方について _______ をしました。",
        subquestions: [
          {
            question: "оберіть слово",
            answers: ["アイデア", "アドバイス", "デザイン", "イメージ"],
            correctAnswer: "アドバイス",
          },
        ],
      },
      {
        question: "あの人はプロのサッカー選手です。",
        subquestions: [
          {
            question: "選手 читаємо як",
            answers: ["ぜんしゅ", "せんしゅう", "せんしゅ", "ぜんしゅう"],
            correctAnswer: "せんしゅ",
          },
        ],
      },
    ],
  },
  {
    level: "N3+",
    pointsToProceed: 3,
    tests: [
      {
        question: "何度もしっぱいしても、彼女は「あきらめなかった」。",
        subquestions: [
          {
            question: "синонімічна фраза - це",
            answers: [
              "気にしなかった",
              "やめようとしなかった",
              "あやまろうとしなかった",
              "怒らなかった",
            ],
            correctAnswer: "やめようとしなかった",
          },
        ],
      },
      {
        question: "実験がうまくいかなかったので、「やりなおした」。",
        subquestions: [
          {
            question: "синонімічна фраза - це",
            answers: [
              "やり方を調べた",
              "やり方を教わった",
              "やるのを途中でやめた",
              "もう一度やった",
            ],
            correctAnswer: "もう一度やった",
          },
        ],
      },
      {
        question: "あした家族を公園に _______ 行くことになっている。",
        subquestions: [
          {
            question: "вставте сполуку",
            answers: ["むけて", "おこして", "つれて", "かえして"],
            correctAnswer: "つれて",
          },
        ],
      },
      {
        question: "息子から _______ に帰ったという連絡がありました。",
        subquestions: [
          {
            question: "оберіть слово",
            answers: ["無事", "意外", "穏やか", "安らか"],
            correctAnswer: "無事",
          },
        ],
      },
    ],
  },
  {
    level: "N2",
    pointsToProceed: 3,
    tests: [
      {
        question:
          "天気予報によれば、来週の日本列島は、全国的に晴天が続くそうです。",
        subquestions: [
          {
            question: "читаємоі 列島 як",
            answers: ["れいしま", "れっとう", "れいとう", "れっしま"],
            correctAnswer: "れっとう",
          },
          {
            question: "читаємо 晴天 як",
            answers: ["せいてん", "せいでん", "すいてん", "すいでん"],
            correctAnswer: "せいてん",
          },
        ],
      },
      {
        question: "______ の結果、私たちの活動は社会に認められました。",
        subquestions: [
          {
            question: "вставте слово",
            answers: ["自慢", "努力", "目的", "覚悟"],
            correctAnswer: "努力",
          },
        ],
      },
      {
        question: "親が自分の子供をかわいいと思うのは _______ 。",
        subquestions: [
          {
            question: "вставте слово",
            answers: [
              "あたりまえだ",
              "なまいきだ",
              "おおざっぱだ",
              "えらそうだ",
            ],
            correctAnswer: "あたりまえだ",
          },
        ],
      },
      {
        question:
          "息子はコーチが用意した練習メニュー _______ 一生懸命練習を続けている。",
        subquestions: [
          {
            question: "вставте сполуку",
            answers: ["にとって", "に対して", "に関して", "に従って"],
            correctAnswer: "に従って",
          },
        ],
      },
    ],
  },
  {
    level: "N1",
    pointsToProceed: 3,
    tests: [
      {
        question:
          "教育の普及こそ近代国家発展の源であるという考えに立って、日本では徹底した義務教育が行われてきた。",
        subquestions: [
          {
            question: "читаємо 普及 як",
            answers: ["ふっきゅう", "ふっきょう", "ふきゅう", "ふきょう"],
            correctAnswer: "ふきゅう",
          },
          {
            question: "читаємо 源 як",
            answers: ["もと", "げん", "おおもと", "みなもと"],
            correctAnswer: "みなもと",
          },
        ],
      },
      {
        question: "Suicaの _______ は、実は国鉄時代から進められてきた。",
        subquestions: [
          {
            question: "вставте слово",
            answers: ["搾取", "収奪", "拓殖", "開発"],
            correctAnswer: "開発",
          },
        ],
      },
      {
        question:
          "他人を犠牲にする _______ なしに、個人の望みを達成することは困難だと考えている人も います。",
        subquestions: [
          {
            question: "вставте сполуку",
            answers: ["の", "こと", "もの", "ところ"],
            correctAnswer: "こと",
          },
        ],
      },
      {
        question: "苦難に満ちたあの人の人生は、涙なくしては _______ 。",
        subquestions: [
          {
            question: "вставте сполуку",
            answers: ["語る", "語らない", "語れる", "語れない"],
            correctAnswer: "語れない",
          },
        ],
      },
    ],
  },
];
