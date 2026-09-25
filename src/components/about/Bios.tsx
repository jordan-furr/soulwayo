import Image from "next/image";
import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import styles from "./Bios.module.css";
import sarahImg from "../../../public/images/sarah-drum.jpeg";
import johannesImg from "../../../public/images/johannes-guitar.jpeg";

export default function Bios() {
  const sarah = useTranslations("about.sarah");
  const johannes = useTranslations("about.johannes");

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <article className={styles.bio}>
          <Reveal className={styles.photoWrap}>
            <Image
              src={sarahImg}
              alt="Sarah playing her frame drum"
              className={styles.photo}
              fill
              sizes="(max-width: 900px) 90vw, 560px"
            />
          </Reveal>
          <h2 className={styles.name}>{sarah("name")}</h2>
          <p className={styles.body}>{sarah("p1")}</p>
          <p className={styles.body}>{sarah("p2")}</p>
          <p className={styles.body}>{sarah("p3")}</p>
          <p className={styles.body}>{sarah("p4")}</p>
          <Reveal as="blockquote" className={styles.quote}>
            {sarah("closing")}
            <br /><br />
            {sarah("quote")}
          </Reveal>
        </article>

        <article className={styles.bio}>
          <Reveal className={styles.photoWrap}>
            <Image
              src={johannesImg}
              alt="Johannes playing guitar"
              className={styles.photo}
              fill
              sizes="(max-width: 900px) 90vw, 560px"
            />
          </Reveal>
          <h2 className={styles.name}>{johannes("name")}</h2>
          <p className={styles.body}>{johannes("p1")}</p>
          <p className={styles.body}>{johannes("p2")}</p>
          <p className={styles.body}>{johannes("p3")}</p>
          <p className={styles.body}>{johannes("p4")}</p>
          <Reveal as="blockquote" className={styles.quote}>
            {johannes("closing")}
            <br /><br />
            {johannes("quote")}
          </Reveal>
        </article>
      </div>
    </section>
  );
}
