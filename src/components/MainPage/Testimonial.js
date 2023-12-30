import React from "react";

import MotionComponent from "../Header/Animation";
import img1 from "../../Assets/Imgs/p1.jpeg";
import img2 from "../../Assets/Imgs/p2.jpeg";
import img3 from "../../Assets/Imgs/p3.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  return (
    <MotionComponent>
      <section className="p-2">
        <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
          <h3 class="mb-6 text-3xl font-bold uppercase tracking-wider">
            Testimonials
          </h3>
          <p class="mb-6 pb-2 md:mb-12 md:pb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </div>

        <div class="grid gap-6 text-center md:grid-cols-3 text-white tracking-wider">
          <div>
            <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div class="h-28 overflow-hidden rounded-t-lg bg-blue-500"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src={img1} className="w-24 h-24" alt="img" />
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">Maria Smantha</h4>
                <hr />
                <p class="mt-4">
                  <FontAwesomeIcon icon={faQuoteLeft} className="mr-2" />
                  Lorem ipsum dolor sit amet eos adipisci, consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div class="h-28 overflow-hidden rounded-t-lg bg-blue-500"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src={img2} className="w-24 h-24" alt="img" />
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
                <hr />
                <p class="mt-4">
                  <FontAwesomeIcon icon={faQuoteLeft} className="mr-2" />
                  Neque cupiditate assumenda in maiores repudi mollitia
                  architecto.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div class="h-28 overflow-hidden rounded-t-lg bg-blue-500"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src={img3} className="w-24 h-24" alt="img" />
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">John Smith</h4>
                <hr />
                <p class="mt-4">
                  <FontAwesomeIcon icon={faQuoteLeft} className="mr-2" />
                  Delectus impedit saepe officiis ab aliquam repellat rem unde
                  ducimus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionComponent>
  );
};

export default Testimonial;
