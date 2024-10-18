import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
const faqData = [
  {
    category: 'Обучение',
    items: [
      {
        question: 'Какво точно представлява персонализираното обучение в Whiz Academy?',
        answer: `Персонализираното обучение означава, че всяка програма се адаптира според твоите цели, опит и скорост на напредък. Твоят ментор създава индивидуален план за обучение, който е съобразен с твоите нужди, за да постигнеш максимални резултати.`,
      },
      {
        question: 'Какви програмни езици и технологии ще науча в Whiz Academy?',
        answer: `Ще изучаваш ключови технологии и езици, които са търсени в индустрията, включително HTML, CSS, JavaScript, .NET, и SQL. Ние се фокусираме върху технологии, които ще те подготвят за реални проекти и кариерно развитие.`,
      },
      {
        question: 'Какво представляват реалните проекти и как ми помагат?',
        answer: `Реалните проекти са задачи, базирани на истински предизвикателства от IT индустрията. Работата по тях ти дава практически опит и увереност да прилагаш наученото директно в работна среда.`,
      },
    ],
  },
  {
    category: 'Гъвкавост и помощ',
    items: [
      {
        question: 'Колко гъвкава е програмата на Whiz Academy? Мога ли да уча по мое собствено време?',
        answer: `Whiz Academy предлага пълна гъвкавост. Можеш да учиш по всяко време и от всяка точка, благодарение на нашата онлайн платформа. Програмата се адаптира към твоя график и начин на живот.`,
      },
      {
        question: 'Как получавам помощ от менторите?',
        answer: `Ще имаш постоянен достъп до своя ментор за индивидуални сесии, обратна връзка по задачи и въпроси, както и регулярни прегледи на напредъка ти. Винаги можеш да разчиташ на подкрепа.`,
      },
    ],
  },
  {
    category: 'Продължителност и сертификати',
    items: [
      {
        question: 'Колко време ще ми отнеме да завърша програмата?',
        answer: `Продължителността на програмата зависи от твоето темпо на обучение. Средно нашите студенти завършват в рамките на 3 до 6 месеца. Можеш да напредваш по-бързо, ако имаш повече свободно време.`,
      },
      {
        question: 'Какво получавам след завършване на курса?',
        answer: `След успешно завършване на всички модули и реални проекти ще получиш сертификат от Whiz Academy, който удостоверява придобитите ти умения. Ще имаш и портфолио с проекти за бъдещи работодатели.`,
      },
    ],
  },
  {
    category: 'Записване и плащане',
    items: [
      {
        question: 'Има ли изисквания за записване в програмата?',
        answer: `Няма формални изисквания за предварителни знания. Whiz Academy работи както с начинаещи, така и с напреднали програмисти. Програмата се адаптира според твоето ниво на знания.`,
      },
      {
        question: 'Какви са опциите за плащане?',
        answer: `Whiz Academy предлага гъвкави опции за плащане. Можеш да избереш месечни вноски или да платиш наведнъж за цялата програма, което ти предоставя финансова гъвкавост.`,
      },
    ],
  },
  {
    category: 'Подкрепа за кариерно развитие',
    items: [
      {
        question: 'Какво ще се случи след завършването? Получавам ли помощ за намиране на работа?',
        answer: `Да, Whiz Academy предлага съдействие за подготовка на CV, портфолио и помощ при интервюта. Ние ще те подготвим за успешна реализация на пазара на труда.`,
      },
    ],
  },
];

const FrequentlyAskedQuestions = ({ searchTerm }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (categoryIndex, itemIndex) => {
    if (activeIndex?.category === categoryIndex && activeIndex.item === itemIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex({ category: categoryIndex, item: itemIndex });
    }
  };

  const filteredFAQs = faqData.map((category) => ({
    ...category,
    items: category.items.filter(
      (faq) =>
        (faq.question &&
          faq.question
            .toLowerCase()
            .includes((searchTerm || '').toLowerCase())) ||
        (faq.answer &&
          faq.answer.toLowerCase().includes((searchTerm || '').toLowerCase()))
    ),
  }));

  return (
    <section className="bg-gradient-to-b from-black via-black to-green-950 text-white py-20">
      <Header
        titleText="Често задавани въпроси"
        descriptionText="Имаш въпроси? Виж най-често задаваните въпроси относно обучението в Whiz Academy и открий всичко, което трябва да знаеш, преди да започнеш."
      />

      <div className="max-w-5xl mx-auto px-6">
        <div className="space-y-12">
          {filteredFAQs.map((category, categoryIndex) =>
            category.items.length > 0 ? (
              <div key={categoryIndex}>
                <h3 className="text-3xl font-bold text-gray-200 mb-6 border-b-2 border-gray-600 pb-2">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((faq, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className={`bg-gray-800 rounded-lg p-5 transition-transform transform ${activeIndex?.category === categoryIndex &&
                        activeIndex?.item === itemIndex
                        ? 'scale-105 shadow-lg'
                        : 'scale-100'
                        }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div
                        onClick={() => toggleFAQ(categoryIndex, itemIndex)}
                        className="flex justify-between items-center cursor-pointer hover:text-green-400"
                      >
                        <h4 className="text-lg font-semibold">
                          {faq.question}
                        </h4>
                        <motion.span
                          className="text-green-400"
                          animate={{
                            rotate: activeIndex?.category === categoryIndex &&
                              activeIndex?.item === itemIndex
                              ? 180
                              : 0,
                          }}
                        >
                          {activeIndex?.category === categoryIndex &&
                            activeIndex?.item === itemIndex ? (
                            <FaChevronUp size={20} />
                          ) : (
                            <FaChevronDown size={20} />
                          )}
                        </motion.span>
                      </div>

                      <AnimatePresence>
                        {activeIndex?.category === categoryIndex &&
                          activeIndex?.item === itemIndex && (
                            <motion.div
                              className="overflow-hidden"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                              <p className="mt-3 text-gray-300 leading-relaxed">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
