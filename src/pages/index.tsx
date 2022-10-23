import type { NextPage } from 'next'
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import TriangleButton from "../components/stylistics/TriangleButton";
import Registration from "../components/popups/Registration";

import titleGirl from "../../public/img/titleGirl.svg";
import womanQuestion from "../../public/img/womanQuestion.svg";
import catAndWoman from "../../public/img/catAndWoman.svg";

import styles from '../styles/Home.module.scss'


const Home: NextPage = () => {
    return (
        <>
            <Header/>
            <main className={styles.Home}>
                <div  id={"About"} className={styles.About}>
                    <div className={styles.titleGirl}>
                        <Image
                            alt="Титульный Логотип"
                            src={titleGirl}
                            width={844}
                            height={623}
                        />
                    </div>
                    <div className={styles.AboutContent}>
                        <h1>
                            ДНЕВНИК КПТ
                        </h1>
                            <p>
                                <strong>Бесплатный онлайн сервис</strong> с возможностью самостоятельного ведения когнитивно-повеченческого дневника.
                                <br/>
                                <br/>
                                Метод <strong>психологической помощи</strong> с одной из наибольшей доказательной базой исследований доказывающих её эффективность
                            </p>
                        <button className={"ButtonSecond"}>
                            ЗАРЕГИСТРИРОВАТЬСЯ
                        </button>
                    </div>
                </div>
                <TriangleButton
                    hrefId={"keepKptDiary"}
                    titleNameUp={"Как вести кпт-дневник?"}
                />
                <div id={"keepKptDiary"}  className={styles.keepKptDiary}>
                    <div className={styles.keepKptDiaryText}>
                        <h2>
                            Как вести кпт-дневник?
                        </h2>
                        <h3>
                            <strong>Распознаём  психическое напряжение</strong>
                        </h3>
                        <h3>
                            <strong>Как распознать?</strong>
                        </h3>
                        <p>
                            Сейчас или в прошлом некие конкретные события, конкретные факты вызвали у вас стресс.
                            <br/>
                            Из-за  какого-то события вы ощущаете явное, или неявное внутреннее несогласие, некий внутренний протест, против текущей ситуации.
                            <br/>
                            У вас смутное беспокойство, тревога, раздражение, сопротивление к происходящим событиями во внешней среде или к тому, что происходит внутри вас.
                            <br/>
                            Вы чувствуете усталость, которая  не связана с физической нагрузкой — признак пропущенного психического напряжения. Если в момент напряжения опознать само это напряжение, само его влияние на ваш организм и психику уменьшается.
                        </p>
                    </div>
                        <Image
                            alt="Девушка с вопросом"
                            src={womanQuestion}
                            width={470}
                            height={470}
                        />
                </div>
                <TriangleButton
                    hrefId={"FillingOutTheDiary"}
                    titleNameUp={"Заполняем дневник"}
                />
                <div id={"FillingOutTheDiary"} className={styles.FillingOutTheDiary} >
                    <h2>
                        Заполняем дневник
                    </h2>
                    <div className={styles.FillingOutTheDiaryText}>
                        <div>
                            <p>
                                1. Опишитие ситуацию <br/>
                                Что случилось? Что спровоцировало реакцию и что вы сделали в ответ? (Только факты, а не мысли или эмоции)
                            </p>
                            <p>
                                2. Какие у вас были мысли? <br/>
                                Какие мысли у вас были в тот момент? В чем проблема? Как звучит внутреннее раздражение или протест?
                            </p>
                        </div>
                        <div>
                            <p>
                                3.  Опишитие эмоцию <br/>
                                Опишите свои чувства в тот момент. Что было с настроением? Может было несколько эмоций?
                            </p>
                            <p>
                                4. Как реагировало тело? <br/>
                                Что происходило с телом? Как оно реагировало? Где именно? Насколько итенсивно? Есть ли сейчас следы реакции тела?
                            </p>
                        </div>
                    </div>
                </div>
                <TriangleButton
                    hrefId={"WhyKeepDiary"}
                    titleNameUp={"Зачем вести дневник?"}
                />
                <div id={"WhyKeepDiary"} className={styles.WhyKeepDiary}>
                    <div className={styles.WhyKeepDiaryText}>
                        <h2>
                            Зачем вести дневник?
                        </h2>
                        <p>
                            Наша конечная цель — прийти к состоянию, когда мы непосредственно, на месте, в момент, будем опознавать давящее на нас психическое напряжение, чтобы нивелировать его действие и иметь возможность выбора — как реагировать на ситуацию, а не быть автоматическим следствием своих мыслей, эмоций или телесных реакций.
                        </p>
                    </div>
                    <Image
                        alt="Девушка с котом"
                        src={catAndWoman}
                        width={445}
                        height={460}
                    />
                </div>
                <TriangleButton
                    hrefId={"infoProject"}
                    titleNameUp={"Информация о нас"}
                />
                <div id={"infoProject"} className={styles.infoProject}>
                    <p>
                        Регистрируйтесь и пробуйте вести дневник! <br/>
                        Или напишите нам, если у вас остались вопросы.
                    </p>
                    <Registration/>
                    <button>
                        Написать нам
                    </button>
                </div>
                <TriangleButton
                    hrefId={"Header"}
                    titleNameDown={"Вернуться наверх"}
                />
            </main>
            <Footer/>
        </>
    )
}

export default Home