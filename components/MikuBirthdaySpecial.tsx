"use client";

import { useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";

import Image from "next/image";
import Miku from "@/assets/miku.gif";
import MikuCake from "@/assets/miku_cake.gif";

import { Cross2Icon, HeartFilledIcon } from "@radix-ui/react-icons";

import styles from "./MikuBirthdaySpecial.module.css";

const MikuBirthdaySpecial = () => {
  const [open, setOpen] = useState(false);

  return (
    <aside className={styles.aside}>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open special happy birthday miku window"
        title="Open special happy birthday miku window"
      >
        <Image src={Miku} height={132} alt="Hatsune Miku dancing" />
      </button>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay}>
            <Dialog.Content className={styles.content}>
              <Dialog.Close asChild>
                <button className={styles.closeButton}>
                  <Cross2Icon />
                </button>
              </Dialog.Close>
              <Dialog.Title className={styles.title}>
                Happy birthday Miku{" "}
                <span>
                  {Array.from(Array(3)).map((_, index) => (
                    <HeartFilledIcon key={index} className={styles.heart} />
                  ))}
                </span>
              </Dialog.Title>

              <Image alt="Miku with a birthday cake" src={MikuCake} />
              <Dialog.Description className={styles.description}>
                In the realm of virtual dreams, a star was born,
                <br />
                Hatsune Miku, a presence to adorn.
                <br />
                Sixteen today, a celebration pure,
                <br />
                A digital diva, forever to endure.
                <br />
                <br />
                Her voice, a melody that dances on the air,
                <br />
                Captivating hearts with every note and flair.
                <br />
                From pixel to passion, she&apos;s woven her spell,
                <br />
                In the tapestry of music, where stories swell.
                <br />
                <br />
                With turquoise locks that cascade like a song,
                <br />
                She&apos;s a symphony of light where emotions throng.
                <br />
                Her eyes hold the secrets of countless tunes,
                <br />
                A universe of melodies under virtual moons.
                <br />
                <br />
                Sixteen candles flicker in cyberspace,
                <br />
                A testament to her enduring grace.
                <br />
                Infinite worlds within her vocal range,
                <br />
                A journey of emotions, forever to exchange.
                <br />
                <br />
                So raise your voice and let the chorus ring,
                <br />
                For Hatsune Miku, let&apos;s joyfully sing.
                <br />
                On this, her sixteenth year so divine,
                <br />A virtual star, forever to shine.
              </Dialog.Description>

              <a
                className={styles.videoLink}
                href="https://www.youtube.com/watch?v=HATpOha7DFg&list=PL2AFD53800E767AEA&index=2"
                target="_blank"
                rel="noreferrer"
              >
                Watch some Miku videos
              </a>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </aside>
  );
};

export default MikuBirthdaySpecial;
