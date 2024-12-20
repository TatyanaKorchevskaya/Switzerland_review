import * as styles from "./Article.module.scss";

import plane from "./../../img/plane.png";

import { Text } from "./../text/Text";
import { Image } from "./../image/Image";

export const Article = () => {
  return (
    <article className={styles.article}>
      <Text
        as="h1"
        elementClasses={styles.title}
        size={45}
        weight={800}
        uppercase
        align="center"
        dynamicLite
      >
        Портрет западной Швейцарии
      </Text>
      <Text
        as="p"
        elementClasses={styles.subtitle}
        size={22}
        weight={800}
        uppercase
        align="center"
        dynamicLite
      >
        Примитивист Фиштр расписывает новый бюджетный авиалайнер
      </Text>
      <Image src={plane} elementClasses={styles.image} alt="Самолет в небе" />
      <div className={styles.container}>
        <Text
          as="span"
          fontStyle="italic"
          align="center"
          size={18}
          elementClasses={styles.img_description}
          dynamicLite
        >
          Фото: Hans-Peter Gauster , "Bombardier CSeries CS300 HB-JCA" © 2017 CC
          BY-SA 2.0
        </Text>
        <div className={styles.paragraphs}>
          <Text as="p" size={18} dynamic>
            В конце 2016 года швейцарская авиакомпания Swiss получила свой
            первый канадский «Бомбардье CS300» для полётов малой и средней
            дальности. Чтобы придать новой 145-местной машине неповторимую
            индивидуальность, ливрею заказали живописцу. При условии, что эскиз
            он выполнит в одиночку и лично поправит роспись, когда её будут
            наносить на фюзеляж.
          </Text>
          <Text as="p" size={18} dynamic>
            Выбор пал на примитивиста Матиаса Форбаша, работающего под
            псевдонимом Фиштр. Ему поставили задачу изобразить всё лучшее во
            франкоговорящей части Швейцарии — горы, озёра, вина, сыры,
            доброжелательность и свободу. Заказ был выполнен в рекордный срок,
            всего за 5 месяцев. Самолёт получился похожим на самого художника:
            такой же добродушный и с улыбкой до ушей.
          </Text>
          <Text as="p" size={18} dynamic>
            С мая 2017 года "Бомбардье" носит имя "Швейцарская Романдия" и
            регистрационный номер HB-JCA ; совершает в среднем 4 коммерческих
            полёта в сутки. Его можно видеть в "Домодедово", а также в
            аэропортах Парижа, Валенсии, Кракова, Берлина, Вены, Загреба, на
            Майорке, Крите и Сицилии. Самолёт останется в той же ливрее, пока
            его не купит другая авиакомпания.
          </Text>
        </div>
      </div>
    </article>
  );
};
