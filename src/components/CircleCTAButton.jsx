import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ShareFoodModal from './ShareFoodModal';
const CircleCTAButton = ({ title, startTriggerRef, endTriggerRef }) => {
  const circleCTARef = useRef(null);
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.set(circleCTARef.current, {
  //     position: 'absolute',
  //     bottom: '24px',
  //     right: '5%',
  //     opacity: 0,
  //     visibility: 'hidden',
  //     zIndex: 1000,
  //   });

  //   ScrollTrigger.defaults({
  //     markers: true,
  //   });

  //   ScrollTrigger.create({
  //     trigger: 'body',
  //     start: 'top top',
  //     end: 'top 60%',
  //     onUpdate: (self) => {
  //       if (scrollY >= 1080) {
  //         gsap.to(circleCTARef.current, {
  //           position: 'fixed',
  //           opacity: 1,
  //           visibility: 'visible',
  //           duration: 0.3,
  //         });
  //       } else {
  //         gsap.to(circleCTARef.current, {
  //           position: 'absolute',
  //           opacity: 0,
  //           visibility: 'hidden',
  //           duration: 0.3,
  //           onComplete: () => {
  //             gsap.set(circleCTARef.current, {
  //               position: 'absolute',
  //             });
  //           },
  //         });
  //       }
  //     },
  //   });
  // }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger.defaults({
    //   markers: true,
    // });
    gsap.set(circleCTARef.current, {
      bottom: '24px',
      right: '5%',
      opacity: 0,
      visibility: 'hidden',
      zIndex: 1000,
    });

    const CTATrigger = ScrollTrigger.create({
      trigger: startTriggerRef.current,
      start: 'top 20%',
      endTrigger: endTriggerRef.current,
      end: 'bottom 60%',
      onToggle: (self) => {
        if (self.isActive) {
          gsap.to(circleCTARef.current, {
            position: 'fixed',
            opacity: 1,
            visibility: 'visible',
            duration: 0.3,
          });
        } else {
          gsap.to(circleCTARef.current, {
            opacity: 0,
            visibility: 'hidden',
            duration: 0.3,
          });
        }
      },
    });

    return () => CTATrigger.kill();
  }, []);

  return (
    <div className="cta-button d-lg-block d-none" ref={circleCTARef}>
      <a
        className="CTA d-flex justify-content-center align-items-center rounded-circle"
        data-bs-toggle="modal"
        data-bs-target="#shareFoodModal"
      >
        <p className="CTA-content-title text-center fs-4 fw-bold lh-xs text-deco-bright-green">
          {/* <!-- 分享美味 立即報名 --> */}
          {title}
        </p>
        <svg
          viewBox="0 0 160 160"
          xmlns="http://www.w3.org/2000/svg"
          className="CTA-rotating-text"
        >
          <path
            id="circlePath"
            d="
            M 80, 80
            m -64, 0
            a 64,64 0 1,1 128,0
            a 64,64 0 1,1 -128,0
            "
          />
          <text>
            <textPath href="#circlePath" textAnchor="middle" startOffset="50%">
              Flavor Trail • Share the Goodness • Flavor Trail • Share the
              Goodness •
            </textPath>
          </text>
        </svg>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="CTA-content-arrow"
        >
          <path
            d="M40 0L10 6.69388L17.6562 12.5714L0 27.2653C0 27.2653 4.58333 28.6946 8.4375 31.8367C12.2917 34.9788 14.8958 40 14.8958 40L28.4375 21.2245L34.5312 29.7143L40 0Z"
            fill="#96FF00"
          />
        </svg>
      </a>
      <ShareFoodModal />
    </div>
  );
};

export default CircleCTAButton;
