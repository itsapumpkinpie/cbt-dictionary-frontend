import type { NextPage } from 'next'
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

import titleGirl from "../assets/img/titleGirl.svg";
import womanQuestion from "../assets/img/womanQuestion.svg";
import catAndWoman from "../assets/img/catAndWoman.svg";

import styles from '../styles/Home.module.scss'
import TriangleButton from "../components/stylistics/TriangleButton";


const Home: NextPage = () => {
    return (
        <>
            <Header/>
            <main className={styles.Home}>
                <div className={styles.About}>
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
                            ЗАРЕГИСТРИРОВАТЬСЯ И
                            <br/>
                            ПОРОБОВАТЬ
                        </button>
                    </div>
                </div>
                <TriangleButton
                    hrefId={"keepKptDiary"}
                    titleName={"Как вести кпт-дневник?"}
                />
                <div id={"keepKptDiary"}>
                    <h2>
                        Как вести кпт-дневник?
                    </h2>
                    <Image
                        alt="Девушка с вопросом"
                        src={womanQuestion}
                        width={470}
                        height={470}
                    />
                    <h3>
                        Распознаём  психическое напряжение
                        <br/>
                        Как распознать?
                    </h3>
                    <p>
                        Сейчас или в прошлом некие конкретные события, конкретные факты вызвали у вас стресс.
                        Из-за  какого-то события вы ощущаете явное, или неявное внутреннее несогласие, некий внутренний протест, против текущей ситуации.
                        У вас смутное беспокойство, тревога, раздражение, сопротивление к происходящим событиями во внешней среде или к тому, что происходит внутри вас.
                        Вы чувствуете усталость, которая  не связана с физической нагрузкой — признак пропущенного психического напряжения. Если в момент напряжения опознать само это напряжение, само его влияние на ваш организм и психику уменьшается.
                    </p>
                </div>
                <TriangleButton
                    hrefId={"FillingOutTheDiary"}
                    titleName={"Заполняем дневник"}
                />
                <div id={"FillingOutTheDiary"}>
                    <h2>
                        Заполняем дневник
                    </h2>
                    <p>
                        1. Опишитие ситуацию
                        Что случилось? Что спровоцировало реакцию и что вы сделали в ответ? (Только факты, а не мысли или эмоции)
                    </p>
                    <p>
                        2. Какие у вас были мысли?
                        Какие мысли у вас были в тот момент? В чем проблема? Как звучит внутреннее раздражение или протест?
                    </p>
                    <p>
                        3.  Опишитие эмоцию
                        Опишите свои чувства в тот момент. Что было с настроением? Может было несколько эмоций?
                    </p>
                    <p>
                        4. Как реагировало тело?
                        Что происходило с телом? Как оно реагировало? Где именно? Насколько итенсивно? Есть ли сейчас следы реакции тела?
                    </p>
                </div>
                <TriangleButton
                    hrefId={"FillingOutTheDiary"}
                    titleName={"Заполняем дневник"}
                />
                <div>
                    <h2>
                        Заговловок
                    </h2>
                    <Image
                        alt="Девушка с котом"
                        src={catAndWoman}
                        width={445}
                        height={460}
                    />
                    <p>
                        Наша конечная цель — прийти к состоянию, когда мы непосредственно, на месте, в момент, будем опознавать давящее на нас психическое напряжение, чтобы нивелировать его действие и иметь возможность выбора — как реагировать на ситуацию, а не быть автоматическим следствием своих мыслей, эмоций или телесных реакций.
                    </p>
                </div>
                <TriangleButton
                    hrefId={"FillingOutTheDiary"}
                    titleName={"Заполняем дневник"}
                />
                <div>
                    <p>
                        Регистрируйтесь и пробуйте вести дневник!
                        Или напишите нам, если у вас остались вопросы.
                    </p>
                    <button className={"ButtonFirst"}>
                        Регистрация
                    </button>
                    <button className={"ButtonSecond"}>
                        Написать нам
                    </button>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Home