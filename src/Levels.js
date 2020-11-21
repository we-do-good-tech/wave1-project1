import LevelOnePictureAnswer from './imgs/LevelOnePictureAnswer.png';
import LevelOnePictureOne from './imgs/LevelOnePictureOne.png';
import LevelOnePictureTwo from './imgs/LevelOnePictureTwo.png';
import LevelTwoPictureAnswer from './imgs/LevelTwoPictureAnswer.png';
import LevelTwoPictureOne from './imgs/LevelTwoPictureOne.png';
import LevelTwoPictureTwo from './imgs/LevelTwoPictureTwo.png';
import QuestionOneImage from './imgs/QuestionOneImage.png';
import HowToLevelOne from './imgs/HowToLevelOne.png';
import HowToLevelTwo from './imgs/HowToLevelTwo.png';
import HowToLevelThree from './imgs/HowToLevelThree.png';
import HowToLevelFour from './imgs/HowToLevelFour.png';
import HowToLevelFive from './imgs/HowToLevelFive.png';
import HowToLevelSix from './imgs/HowToLevelSix.png';
import HowToLevelSeven from './imgs/HowToLevelSeven.png';

const Levels = [
  //---------------------------------------------------------------------------------
  [
    {
      right: 0,
      Question: 'זהו המשחקון הראשון - תור מי לזרוק את הכדור הלבן? ',
      Answers: ['אדום', 'כחול'],
      Kind: 2,
      Explanation: 'המשחק מתחיל כאשר השחקן שמשחק בכדורים האדומים, זורק את הכדור הלבן אל עבר המגרש.',
      img: HowToLevelOne,
    },
    {
      right: 0,
      Question: 'מיקום הכדור הלבן חוקי ',
      Answers: ['לא נכון', 'נכון'],
      Kind: 2,
      Explanation: 'הכדור הלבן חייב לעבור את קו ה - V כדי שיחשב כחוקי.',
      img: HowToLevelTwo,
    },
    {
      right: 1,
      Question: 'איזה שחקן יזרוק את הכדור הבא?',
      Answers: ['אדום', 'כחול'],
      Kind: 2,
      Explanation: 'השחקן שהכדור שלו רחוק יותר מהכדור הלבן יזרוק את הכדור הבא.',
      img: HowToLevelThree,
    },
    {
      right: 0,
      Question: 'איזה שחקן יזרוק את הכדור הבא?',
      Answers: ['אדום', 'כחול'],
      Kind: 2,
      Explanation: 'השחקן שהכדור שלו רחוק יותר מהכדור הלבן יזרוק את הכדור הבא.',
      img: HowToLevelFour,
    },
    {
      right: 1,
      Question: 'נגמרו הכדורים האדומים. הכדור הכחול קרוב. מה יקרה עכשיו? ',
      Answers: ['המשחקון חייב להסתיים ', 'השחקן הכחול ימשיך לזרוק'],
      Kind: 2,
      Explanation: 'לאדום נגמרו הכדורים, השחקן הכחול יכול להמשיך לזרוק ולצבור עוד נקודות.',
      img: HowToLevelFive,
    },

    {
      right: 3,
      Question: 'אתם השחקן עם הכדורים האדומים. מה תעשו על מנת לנצח את המשחקון:',
      Answers: [
        'ננסה להרחיק את הכדור הכחול מהכדור הלבן',
        'ננסה לפגוע בכדור אדום, כך שיתקרב יותר לכדור הלבן ',
        'נכוון ישירות לכדור הלבן על מנת להתקרב אליו יותר מהכדור הכחול',
        'כל התשובות נכונות',
      ],
      Kind: 1,
      Explanation:
        ' כל הצלחה של אחת האופציות תגרום לכך שבסופה של הזריקה יהיה לפחות כדור אחד אדום יותר קרוב לכדור הלבן מכדור כחול.',
      img: HowToLevelSix,
    },

    {
      right: 3,
      Question:
        'אתם בגמר אליפות העולם משחקון אחרון, היריב מוביל 3-0, נשאר לכם כדור אחד אחרון, מה תעשו?',
      Answers: [
        'נסתפק במקום השני',
        'ננסה להעיף כמה שיותר כדורים כחולים החוצה',
        'ננסה לפגוע בכדור אדום כך שיתקרב לכדור הלבן ',
        'נעיף את הכדור הלבן מחוץ למגרש.',
      ],
      Kind: 1,
      Explanation:
        'כאשר הכדור הלבן יוצא מגבולות המגרש מניחים אותו על נקודת הפלוס. כל שאר האפשרויות אמנם יקטינו את ההפרש אך לא יזכו בנצחון.',
      img: HowToLevelSeven,
    },
  ],
  // ---------------------------------------Level Two - - Rules-------------------------------------------------------
  [
    {
      right: 2,
      Question: 'מה מסמנת השופטת?',
      Answers: [
        'השחקן הכחול ניצח',
        'השחקן הכחול רשאי להיכנס למגרש',
        'תורו של השחקן הכחול לזרוק',
        'השחקו הכחול קיבל עונש',
      ],
      Kind: 1,
      Explanation: '',
      img: QuestionOneImage,
    },
    {
      right: 1,
      Question: 'מה תהיה תוצאת המשחקון?',
      Answers: [LevelOnePictureOne, LevelOnePictureTwo],
      PictureQuestion: LevelOnePictureAnswer,
      Kind: 3,
      Explanation: '',
    },
    {
      right: 0,
      Question: 'מה תהיה תוצאת המשחקון?',
      Answers: [LevelTwoPictureOne, LevelTwoPictureTwo],
      PictureQuestion: LevelTwoPictureAnswer,
      Kind: 3,
      Explanation: 'משום שיש רק כדור אחד  קרוב יותר ללבן מהכדור הכחול התוצאה היא 1-0 לאדום.',
      img: HowToLevelSeven,
    },
  ],
  // <--------------------------Level Three What Is Boccia --------------------------->
  [
    {
      right: 0,
      Question: "אלו מיומנויות/תכונות, לדעתכם, יכולות לעזור לספורטאי להיות שחקן בוצ'ה מצטיין:",
      Answers: [
        'אסטרטג, דיוק ',
        ' יצירתיות, הישגיות',
        ' תחרותיות, עמידה בלחצים ',
        ' יכולת ריכוז גבוהה, פתיחות מחשבתית',
      ],
      Kind: 4,
      Explanation:
        "אם הייתם בוחרים בכל תשובה אחרת גם הייתם צודקים. לאלופי העולם בבוצ'ה יש את כל התכונות האלו.",
    },
  ],
];
export default Levels;
