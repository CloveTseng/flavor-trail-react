import AboutUsMarquee from "../components/AboutUsMarquee";

const AboutUsPage = () => {
  return (
    <>
      <section className="our-ideal container nav-mt pb-12">
        <div className="ideal-banner mt-4 mt-lg-7">
          <div className="ideal-banner-img mb-6 mb-lg-10"></div>
          <div className="ideal-banner-deco-noise"></div>
          <div className="ideal-banner-deco"></div>
        </div>
        <div className="ideal-subtitle fw-bolder fs-2 mb-8 d-flex justify-content-end">
          <div className="d-flex flex-column">
            <div className="lh-32">世界更美好</div>
            <div className="ideal-text-vertical">味同行</div>
          </div>
        </div>
        <div className="ideal-content row">
          <div className="col-md-9 col-lg-8">
            <h4 className="fs-4 fs-lg-3 fw-bold ideal-content-subtitle">
              OUR PHILOSOPHY
            </h4>
            <div className="ideal-title pt-5 pt-lg-7 pb-10 pb-lg-7-">
              我們的理念
            </div>
            <p className="fs-6 fs-lg-4 text-gray-700">
              在「餘味尋蹤」，我們相信每一份食物都有它的價值。
              <br />
              無論是餐桌上的剩餘美味，還是廚房裡多出的食材，
              <br className="d-none d-md-block" />
              我們的使命是為它們找到下一位品味者，讓分享成為社群的一部分。
            </p>
          </div>
        </div>
      </section>

      {/* <!-- our story --> */}
      <section className="about-story position-relative bg-primary py-12 py-lg-18">
        <div className="container">
          <div className="about-story__container d-flex">
            <div className="about-story__title-first-left title-wrapper">
              <h2>
                <svg
                  className="d-none d-lg-block title-stroke-svg title-stroke-svg__our-left w-100"
                  aria-label="我們"
                  viewBox="0 0 160 100"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <text
                    className="stroke-text"
                    x="2"
                    y="74"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    我們
                  </text>
                  <text className="fill-text" x="2" y="74" fill="#00503F">
                    我們
                  </text>
                </svg>
                <svg
                  className="d-lg-none d-block title-stroke-svg title-stroke-svg__our-left w-100"
                  aria-label="我們"
                  viewBox="0 0 140 100"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <text
                    className="stroke-text"
                    x="4"
                    y="60"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    我們
                  </text>
                  <text className="fill-text" x="4" y="60" fill="#00503F">
                    我們
                  </text>
                </svg>
              </h2>
            </div>

            <div className="about-story__title-first-right title-wrapper">
              {/* <!-- Desktop version --> */}
              <h2 className="d-none d-lg-block stack-container">
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 -15 100 100"
                >
                  <text
                    className="stack-pattern stroke-text"
                    x="0"
                    y="60"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    的
                  </text>
                  <text
                    className="stack-pattern fill-text"
                    x="0"
                    y="60"
                    fill="#00503F"
                  >
                    的
                  </text>
                </svg>

                {/* <!-- 以下重複 15 次...== --> */}
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 -15 100 100"
                >
                  <text x="0" y="60" stroke="white" strokeWidth="8" fill="none">
                    的
                  </text>
                  <text
                    className="stack-pattern fill-text"
                    x="0"
                    y="60"
                    fill="#00503F"
                  >
                    的
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 -15 100 100"
                >
                  <text x="0" y="60" stroke="white" strokeWidth="8" fill="none">
                    的
                  </text>
                  <text
                    className="stack-pattern fill-text"
                    x="0"
                    y="60"
                    fill="#00503F"
                  >
                    的
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 -15 100 100"
                >
                  <text x="0" y="60" stroke="white" strokeWidth="8" fill="none">
                    的
                  </text>
                  <text
                    className="stack-pattern fill-text"
                    x="0"
                    y="60"
                    fill="#00503F"
                  >
                    的
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 -15 100 100"
                >
                  <text x="0" y="60" stroke="white" strokeWidth="8" fill="none">
                    的
                  </text>
                  <text
                    className="stack-pattern fill-text"
                    x="0"
                    y="60"
                    fill="#00503F"
                  >
                    的
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 -15 100 100"
                >
                  <text x="0" y="60" stroke="white" strokeWidth="8" fill="none">
                    的
                  </text>
                  <text
                    className="stack-pattern fill-text"
                    x="0"
                    y="60"
                    fill="#00503F"
                  >
                    的
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 -15 100 100"
                >
                  <text x="0" y="60" stroke="white" strokeWidth="8" fill="none">
                    的
                  </text>
                  <text
                    className="stack-pattern fill-text"
                    x="0"
                    y="60"
                    fill="#00503F"
                  >
                    的
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 -15 100 100"
                >
                  <text x="0" y="60" stroke="white" strokeWidth="8" fill="none">
                    的
                  </text>
                  <text
                    className="stack-pattern fill-text"
                    x="0"
                    y="60"
                    fill="#00503F"
                  >
                    的
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 -15 100 100"
                >
                  <text x="0" y="60" stroke="white" strokeWidth="8" fill="none">
                    的
                  </text>
                  <text
                    className="stack-pattern fill-text"
                    x="0"
                    y="60"
                    fill="#00503F"
                  >
                    的
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 -15 100 100"
                >
                  <text x="0" y="60" stroke="white" strokeWidth="8" fill="none">
                    的
                  </text>
                  <text
                    className="stack-pattern fill-text"
                    x="0"
                    y="60"
                    fill="#00503F"
                  >
                    的
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 -15 100 100"
                >
                  <text x="0" y="60" stroke="white" strokeWidth="8" fill="none">
                    的
                  </text>
                  <text
                    className="stack-pattern fill-text"
                    x="0"
                    y="60"
                    fill="#00503F"
                  >
                    的
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 -15 100 100"
                >
                  <text x="0" y="60" stroke="white" strokeWidth="8" fill="none">
                    的
                  </text>
                  <text
                    className="stack-pattern fill-text"
                    x="0"
                    y="60"
                    fill="#00503F"
                  >
                    的
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 -15 100 100"
                >
                  <text x="0" y="60" stroke="white" strokeWidth="8" fill="none">
                    的
                  </text>
                  <text
                    className="stack-pattern fill-text"
                    x="0"
                    y="60"
                    fill="#00503F"
                  >
                    的
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 -15 100 100"
                >
                  <text x="0" y="60" stroke="white" strokeWidth="8" fill="none">
                    的
                  </text>
                  <text
                    className="stack-pattern fill-text"
                    x="0"
                    y="60"
                    fill="#00503F"
                  >
                    的
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 -15 100 100"
                >
                  <text x="0" y="60" stroke="white" strokeWidth="8" fill="none">
                    的
                  </text>
                  <text
                    className="stack-pattern fill-text"
                    x="0"
                    y="60"
                    fill="#00503F"
                  >
                    的
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 -15 100 100"
                >
                  <text x="0" y="60" stroke="white" strokeWidth="8" fill="none">
                    的
                  </text>
                  <text
                    className="stack-pattern fill-text"
                    x="0"
                    y="60"
                    fill="#00503F"
                  >
                    的
                  </text>
                </svg>
              </h2>
              {/* <!-- Mobile version --> */}
              <h2 className="d-lg-none d-block stack-container">
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 0 100 100"
                >
                  <text
                    className="stroke-text"
                    x="0"
                    y="60"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    的
                  </text>
                  <text className="fill-text" x="0" y="60" fill="#00503F">
                    的
                  </text>
                </svg>

                {/* <!-- 以下重複 7 次 --> */}
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 0 100 100"
                >
                  <text
                    className="stroke-text"
                    x="0"
                    y="60"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    的
                  </text>
                  <text className="fill-text" x="0" y="60" fill="#00503F">
                    的
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 0 100 100"
                >
                  <text
                    className="stroke-text"
                    x="0"
                    y="60"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    的
                  </text>
                  <text className="fill-text" x="0" y="60" fill="#00503F">
                    的
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 0 100 100"
                >
                  <text
                    className="stroke-text"
                    x="0"
                    y="60"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    的
                  </text>
                  <text className="fill-text" x="0" y="60" fill="#00503F">
                    的
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 0 100 100"
                >
                  <text
                    className="stroke-text"
                    x="0"
                    y="60"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    的
                  </text>
                  <text className="fill-text" x="0" y="60" fill="#00503F">
                    的
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 0 100 100"
                >
                  <text
                    className="stroke-text"
                    x="0"
                    y="60"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    的
                  </text>
                  <text className="fill-text" x="0" y="60" fill="#00503F">
                    的
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 0 100 100"
                >
                  <text
                    className="stroke-text"
                    x="0"
                    y="60"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    的
                  </text>
                  <text className="fill-text" x="0" y="60" fill="#00503F">
                    的
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__our-right w-100"
                  aria-label="的"
                  viewBox="0 0 100 100"
                >
                  <text
                    className="stroke-text"
                    x="0"
                    y="60"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    的
                  </text>
                  <text className="fill-text" x="0" y="60" fill="#00503F">
                    的
                  </text>
                </svg>
              </h2>
            </div>

            <div className="about-story__title-second-left title-wrapper">
              {/* <!-- Desktop version --> */}
              <h2 className="d-none d-lg-block stack-container">
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="16"
                    y="73"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="16" y="73" fill="#00503F">
                    故
                  </text>
                </svg>

                {/* <!-- 以下重複 15 次...== --> */}
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="16"
                    y="73"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="16" y="73" fill="#00503F">
                    故
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="16"
                    y="73"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="16" y="73" fill="#00503F">
                    故
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="16"
                    y="73"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="16" y="73" fill="#00503F">
                    故
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="16"
                    y="73"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="16" y="73" fill="#00503F">
                    故
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="16"
                    y="73"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="16" y="73" fill="#00503F">
                    故
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="16"
                    y="73"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="16" y="73" fill="#00503F">
                    故
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="16"
                    y="73"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="16" y="73" fill="#00503F">
                    故
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="16"
                    y="73"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="16" y="73" fill="#00503F">
                    故
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="16"
                    y="73"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="16" y="73" fill="#00503F">
                    故
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="16"
                    y="73"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="16" y="73" fill="#00503F">
                    故
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="16"
                    y="73"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="16" y="73" fill="#00503F">
                    故
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="16"
                    y="73"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="16" y="73" fill="#00503F">
                    故
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="16"
                    y="73"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="16" y="73" fill="#00503F">
                    故
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="16"
                    y="73"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="16" y="73" fill="#00503F">
                    故
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="16"
                    y="73"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="16" y="73" fill="#00503F">
                    故
                  </text>
                </svg>
              </h2>
              {/* <!-- Mobile version --> */}
              <h2 className="d-lg-none d-block stack-container">
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="32"
                    y="60"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="32" y="60" fill="#00503F">
                    故
                  </text>
                </svg>

                {/* <!-- 以下重複 7 次 --> */}
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="32"
                    y="60"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="32" y="60" fill="#00503F">
                    故
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="32"
                    y="60"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="32" y="60" fill="#00503F">
                    故
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="32"
                    y="60"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="32" y="60" fill="#00503F">
                    故
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="32"
                    y="60"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="32" y="60" fill="#00503F">
                    故
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="32"
                    y="60"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="32" y="60" fill="#00503F">
                    故
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="32"
                    y="60"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="32" y="60" fill="#00503F">
                    故
                  </text>
                </svg>
                <svg
                  className="title-stroke-svg title-stroke-svg__story-left w-100"
                  aria-label="故"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="32"
                    y="60"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    故
                  </text>
                  <text x="32" y="60" fill="#00503F">
                    故
                  </text>
                </svg>
              </h2>
            </div>

            <div className="about-story__title-second-right title-wrapper">
              <h2>
                <svg
                  className="d-none d-lg-block title-stroke-svg title-stroke-svg__story-right w-100"
                  aria-label="事"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="18"
                    y="87"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    事
                  </text>
                  <text x="18" y="87" fill="#00503F">
                    事
                  </text>
                </svg>
                <svg
                  className="d-lg-none d-block title-stroke-svg title-stroke-svg__story-right w-100"
                  aria-label="事"
                  viewBox="0 0 100 100"
                >
                  <text
                    x="34"
                    y="89"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                  >
                    事
                  </text>
                  <text x="34" y="89" fill="#00503F">
                    事
                  </text>
                </svg>
              </h2>
            </div>

            <div className="about-story__content row">
              <div className="about-story__content--first col-9 col-lg-6 offset-lg-1">
                <p className="fs-lg-4 text-white">
                  這個平台的誕生，源於我們對食物浪費的深切關注。在一次社區活動中，我們發現許多好吃的食物因無法及時消耗而被丟棄，而另一邊，卻有許多人因為經濟困難而無法滿足基本的飲食需求。
                </p>
              </div>
              <div className="about-story__content--second col-9 col-lg-6 offset-lg-5 offset-3">
                <p className="fs-lg-4 text-white">
                  於是,我們決定創建「餘味尋蹤」，讓每一份多餘的美味都能找到新的主人,減少浪費，同時也為有需要的人提供幫助。
                </p>
              </div>
            </div>

            <div className="about-story__deco"></div>
            <div className="about-story__background">
              <img
                className="about-story__background-img"
                src="/assets/images/about-2.jpg"
                alt="about-story__background"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- our service --> */}
      <AboutUsMarquee />

      {/* <!-- our team --> */}
      <section className="container our-team nav-mt py-18 py-lg-19">
        <h3 className="our-team-subtitle fw-bold fs-3 d-flex mb-5 mb-lg-7">
          <div className="our me-1">OUR</div>
          <div className="team">TEAM</div>
        </h3>
        <h2 className="our-team-title fw-bolder position-relative">
          <div className="box d-flex flex-column flex-lg-row justify-content-between">
            <div className="our d-flex w-lg-50 justify-content-between">
              <div className="our-one">我們</div>
              <div className="our-two">的</div>
            </div>
            <div className="team d-flex justify-content-between">
              <div className="team-one">團</div>
              <div className="team-two">隊</div>
            </div>
          </div>
          <svg
            className="deco-face-mobile d-lg-none position-absolute"
            width="351"
            height="88"
            viewBox="0 0 351 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M71.4585 50.323C73.9798 70.0692 41.3704 79.0188 33.9354 60.3605C33.9354 60.3605 43.9791 59.2653 54.1533 56.5437C64.3274 53.8221 71.4585 50.323 71.4585 50.323Z"
              fill="white"
            />
            <path
              d="M71.4585 50.323C73.9798 70.0692 41.3704 79.0188 33.9354 60.3605C33.9354 60.3605 43.9791 59.2653 54.1533 56.5437C64.3274 53.8221 71.4585 50.323 71.4585 50.323Z"
              fill="#00503F"
              fillOpacity="0.08"
            />
            <path
              d="M85.3426 41.8742C87.4524 66.3362 68.0339 83.7012 46.0773 83.9951C24.1206 84.289 9.15723 71.4409 5.87674 48.8519C2.59624 26.2629 21.2494 5.96935 41.9884 4.14831C62.7274 2.32728 83.2328 17.4122 85.3426 41.8742Z"
              fill="white"
            />
            <path
              d="M85.3426 41.8742C87.4524 66.3362 68.0339 83.7012 46.0773 83.9951C24.1206 84.289 9.15723 71.4409 5.87674 48.8519C2.59624 26.2629 21.2494 5.96935 41.9884 4.14831C62.7274 2.32728 83.2328 17.4122 85.3426 41.8742Z"
              fill="#00503F"
              fillOpacity="0.08"
            />
            <path
              d="M26.8918 46.7739C29.2238 42.8915 37.3268 38.0875 43.9158 42.8303M72.2841 36.3765C68.2405 33.6127 60.2838 34.6656 57.2808 40.4857M33.9354 60.3605C41.3704 79.0188 73.9798 70.0692 71.4585 50.323C71.4585 50.323 64.3274 53.8221 54.1533 56.5437C43.9791 59.2653 33.9354 60.3605 33.9354 60.3605ZM85.3426 41.8742C87.4524 66.3362 68.0339 83.7012 46.0773 83.9951C24.1206 84.289 9.15723 71.4409 5.87674 48.8519C2.59624 26.2629 21.2494 5.96935 41.9884 4.14831C62.7274 2.32728 83.2328 17.4122 85.3426 41.8742Z"
              stroke="#121212"
              strokeWidth="8"
            />
            <path
              d="M123.458 50.323C125.98 70.0692 93.3704 79.0188 85.9354 60.3605C85.9354 60.3605 95.9791 59.2653 106.153 56.5437C116.327 53.8221 123.458 50.323 123.458 50.323Z"
              fill="white"
            />
            <path
              d="M123.458 50.323C125.98 70.0692 93.3704 79.0188 85.9354 60.3605C85.9354 60.3605 95.9791 59.2653 106.153 56.5437C116.327 53.8221 123.458 50.323 123.458 50.323Z"
              fill="#00503F"
              fillOpacity="0.08"
            />
            <path
              d="M137.343 41.8742C139.452 66.3362 120.034 83.7012 98.0773 83.9951C76.1206 84.289 61.1572 71.4409 57.8767 48.8519C54.5962 26.2629 73.2494 5.96935 93.9884 4.14831C114.727 2.32728 135.233 17.4122 137.343 41.8742Z"
              fill="white"
            />
            <path
              d="M137.343 41.8742C139.452 66.3362 120.034 83.7012 98.0773 83.9951C76.1206 84.289 61.1572 71.4409 57.8767 48.8519C54.5962 26.2629 73.2494 5.96935 93.9884 4.14831C114.727 2.32728 135.233 17.4122 137.343 41.8742Z"
              fill="#00503F"
              fillOpacity="0.08"
            />
            <path
              d="M78.8918 46.7739C81.2238 42.8915 89.3268 38.0875 95.9158 42.8303M124.284 36.3765C120.241 33.6127 112.284 34.6656 109.281 40.4857M85.9354 60.3605C93.3704 79.0188 125.98 70.0692 123.458 50.323C123.458 50.323 116.327 53.8221 106.153 56.5437C95.9791 59.2653 85.9354 60.3605 85.9354 60.3605ZM137.343 41.8742C139.452 66.3362 120.034 83.7012 98.0773 83.9951C76.1206 84.289 61.1572 71.4409 57.8767 48.8519C54.5962 26.2629 73.2494 5.96935 93.9884 4.14831C114.727 2.32728 135.233 17.4122 137.343 41.8742Z"
              stroke="#121212"
              strokeWidth="8"
            />
            <path
              d="M189.343 41.8742C191.452 66.3362 172.034 83.7012 150.077 83.9951C128.121 84.2889 113.157 71.4409 109.877 48.8519C106.596 26.2629 125.249 5.96935 145.988 4.14831C166.727 2.32728 187.233 17.4122 189.343 41.8742Z"
              fill="white"
            />
            <path
              d="M189.343 41.8742C191.452 66.3362 172.034 83.7012 150.077 83.9951C128.121 84.2889 113.157 71.4409 109.877 48.8519C106.596 26.2629 125.249 5.96935 145.988 4.14831C166.727 2.32728 187.233 17.4122 189.343 41.8742Z"
              fill="#00503F"
              fillOpacity="0.08"
            />
            <path
              d="M151.973 62.57C149.429 56.5863 152.305 50.7318 157.195 48.9711C162.085 47.2105 166.523 49.2889 169.171 54.712C171.818 60.1352 169.361 66.6667 164.873 68.7174C160.385 70.7682 154.517 68.5536 151.973 62.57Z"
              fill="white"
            />
            <path
              d="M151.973 62.57C149.429 56.5863 152.305 50.7318 157.195 48.9711C162.085 47.2105 166.523 49.2889 169.171 54.712C171.818 60.1352 169.361 66.6667 164.873 68.7174C160.385 70.7682 154.517 68.5536 151.973 62.57Z"
              fill="#00503F"
              fillOpacity="0.08"
            />
            <path
              d="M163.632 24.7947L166.24 34.7972M137.153 33.0862L141.718 43.4836M189.343 41.8742C191.452 66.3362 172.034 83.7012 150.077 83.9951C128.121 84.2889 113.157 71.4409 109.877 48.8519C106.596 26.2629 125.249 5.96935 145.988 4.14831C166.727 2.32728 187.233 17.4122 189.343 41.8742ZM151.973 62.57C149.429 56.5863 152.305 50.7318 157.195 48.9711C162.085 47.2105 166.523 49.2889 169.171 54.712C171.818 60.1352 169.361 66.6667 164.873 68.7174C160.385 70.7682 154.517 68.5536 151.973 62.57Z"
              stroke="#121212"
              strokeWidth="8"
            />
            <path
              d="M227.458 50.323C229.98 70.0692 197.37 79.0188 189.935 60.3605C189.935 60.3605 199.979 59.2653 210.153 56.5437C220.327 53.8221 227.458 50.323 227.458 50.323Z"
              fill="white"
            />
            <path
              d="M227.458 50.323C229.98 70.0692 197.37 79.0188 189.935 60.3605C189.935 60.3605 199.979 59.2653 210.153 56.5437C220.327 53.8221 227.458 50.323 227.458 50.323Z"
              fill="#00503F"
              fillOpacity="0.08"
            />
            <path
              d="M241.343 41.8742C243.452 66.3362 224.034 83.7012 202.077 83.9951C180.121 84.289 165.157 71.4409 161.877 48.8519C158.596 26.2629 177.249 5.96935 197.988 4.14831C218.727 2.32728 239.233 17.4122 241.343 41.8742Z"
              fill="white"
            />
            <path
              d="M241.343 41.8742C243.452 66.3362 224.034 83.7012 202.077 83.9951C180.121 84.289 165.157 71.4409 161.877 48.8519C158.596 26.2629 177.249 5.96935 197.988 4.14831C218.727 2.32728 239.233 17.4122 241.343 41.8742Z"
              fill="#00503F"
              fillOpacity="0.08"
            />
            <path
              d="M182.892 46.7739C185.224 42.8915 193.327 38.0875 199.916 42.8303M228.284 36.3765C224.241 33.6127 216.284 34.6656 213.281 40.4857M189.935 60.3605C197.37 79.0188 229.98 70.0692 227.458 50.323C227.458 50.323 220.327 53.8221 210.153 56.5437C199.979 59.2653 189.935 60.3605 189.935 60.3605ZM241.343 41.8742C243.452 66.3362 224.034 83.7012 202.077 83.9951C180.121 84.289 165.157 71.4409 161.877 48.8519C158.596 26.2629 177.249 5.96935 197.988 4.14831C218.727 2.32728 239.233 17.4122 241.343 41.8742Z"
              stroke="#121212"
              strokeWidth="8"
            />
            <path
              d="M279.458 50.323C281.98 70.0692 249.37 79.0188 241.935 60.3605C241.935 60.3605 251.979 59.2653 262.153 56.5437C272.327 53.8221 279.458 50.323 279.458 50.323Z"
              fill="white"
            />
            <path
              d="M279.458 50.323C281.98 70.0692 249.37 79.0188 241.935 60.3605C241.935 60.3605 251.979 59.2653 262.153 56.5437C272.327 53.8221 279.458 50.323 279.458 50.323Z"
              fill="#00503F"
              fillOpacity="0.08"
            />
            <path
              d="M293.343 41.8742C295.452 66.3362 276.034 83.7012 254.077 83.9951C232.121 84.289 217.157 71.4409 213.877 48.8519C210.596 26.2629 229.249 5.96935 249.988 4.14831C270.727 2.32728 291.233 17.4122 293.343 41.8742Z"
              fill="white"
            />
            <path
              d="M293.343 41.8742C295.452 66.3362 276.034 83.7012 254.077 83.9951C232.121 84.289 217.157 71.4409 213.877 48.8519C210.596 26.2629 229.249 5.96935 249.988 4.14831C270.727 2.32728 291.233 17.4122 293.343 41.8742Z"
              fill="#00503F"
              fillOpacity="0.08"
            />
            <path
              d="M234.892 46.7739C237.224 42.8915 245.327 38.0875 251.916 42.8303M280.284 36.3765C276.241 33.6127 268.284 34.6656 265.281 40.4857M241.935 60.3605C249.37 79.0188 281.98 70.0692 279.458 50.323C279.458 50.323 272.327 53.8221 262.153 56.5437C251.979 59.2653 241.935 60.3605 241.935 60.3605ZM293.343 41.8742C295.452 66.3362 276.034 83.7012 254.077 83.9951C232.121 84.289 217.157 71.4409 213.877 48.8519C210.596 26.2629 229.249 5.96935 249.988 4.14831C270.727 2.32728 291.233 17.4122 293.343 41.8742Z"
              stroke="#121212"
              strokeWidth="8"
            />
            <path
              d="M331.458 50.323C333.98 70.0692 301.37 79.0188 293.935 60.3605C293.935 60.3605 303.979 59.2653 314.153 56.5437C324.327 53.8221 331.458 50.323 331.458 50.323Z"
              fill="white"
            />
            <path
              d="M331.458 50.323C333.98 70.0692 301.37 79.0188 293.935 60.3605C293.935 60.3605 303.979 59.2653 314.153 56.5437C324.327 53.8221 331.458 50.323 331.458 50.323Z"
              fill="#00503F"
              fillOpacity="0.08"
            />
            <path
              d="M345.343 41.8742C347.452 66.3362 328.034 83.7012 306.077 83.9951C284.121 84.289 269.157 71.4409 265.877 48.8519C262.596 26.2629 281.249 5.96935 301.988 4.14831C322.727 2.32728 343.233 17.4122 345.343 41.8742Z"
              fill="white"
            />
            <path
              d="M345.343 41.8742C347.452 66.3362 328.034 83.7012 306.077 83.9951C284.121 84.289 269.157 71.4409 265.877 48.8519C262.596 26.2629 281.249 5.96935 301.988 4.14831C322.727 2.32728 343.233 17.4122 345.343 41.8742Z"
              fill="#00503F"
              fillOpacity="0.08"
            />
            <path
              d="M286.892 46.7739C289.224 42.8915 297.327 38.0875 303.916 42.8303M332.284 36.3765C328.241 33.6127 320.284 34.6656 317.281 40.4857M293.935 60.3605C301.37 79.0188 333.98 70.0692 331.458 50.323C331.458 50.323 324.327 53.8221 314.153 56.5437C303.979 59.2653 293.935 60.3605 293.935 60.3605ZM345.343 41.8742C347.452 66.3362 328.034 83.7012 306.077 83.9951C284.121 84.289 269.157 71.4409 265.877 48.8519C262.596 26.2629 281.249 5.96935 301.988 4.14831C322.727 2.32728 343.233 17.4122 345.343 41.8742Z"
              stroke="#121212"
              strokeWidth="8"
            />
          </svg>
        </h2>
        <div className="row">
          <div className="our-team-content col-lg-4 fs-lg-5 fw-bold">
            <div className="pb-5 pb-lg-7">
              我們是一群熱愛食物與分享的朋友，懷著讓世界更美好的初心，建立了這個平台。
            </div>
            <div>
              從產品設計到開發工程，從社群管理到客戶服務，每位成員都致力於推動「餘味尋蹤」的發展，讓更多人加入這場美味接力。
            </div>
          </div>
        </div>
        <svg
          className="deco-face-pc ms-auto d-none d-lg-block"
          width="741"
          height="176"
          viewBox="0 0 741 176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M140.868 100.646C145.941 140.138 80.3269 158.038 65.3669 120.721C65.3669 120.721 85.576 118.531 106.048 113.087C126.519 107.644 140.868 100.646 140.868 100.646Z"
            fill="white"
          />
          <path
            d="M140.868 100.646C145.941 140.138 80.3269 158.038 65.3669 120.721C65.3669 120.721 85.576 118.531 106.048 113.087C126.519 107.644 140.868 100.646 140.868 100.646Z"
            fill="#00503F"
            fillOpacity="0.08"
          />
          <path
            d="M168.804 83.7484C173.05 132.672 133.977 167.402 89.7978 167.99C45.6184 168.578 15.5102 142.882 8.90941 97.7038C2.30866 52.5258 39.8411 11.9387 81.5704 8.29663C123.3 4.65455 164.559 34.8243 168.804 83.7484Z"
            fill="white"
          />
          <path
            d="M168.804 83.7484C173.05 132.672 133.977 167.402 89.7978 167.99C45.6184 168.578 15.5102 142.882 8.90941 97.7038C2.30866 52.5258 39.8411 11.9387 81.5704 8.29663C123.3 4.65455 164.559 34.8243 168.804 83.7484Z"
            fill="#00503F"
            fillOpacity="0.08"
          />
          <path
            d="M51.1942 93.5478C55.8864 85.7831 72.1907 76.175 85.4486 85.6606M142.529 72.7531C134.393 67.2254 118.383 69.3312 112.341 80.9715M65.3669 120.721C80.3269 158.038 145.941 140.138 140.868 100.646C140.868 100.646 126.519 107.644 106.048 113.087C85.576 118.531 65.3669 120.721 65.3669 120.721ZM168.804 83.7484C173.05 132.672 133.977 167.402 89.7978 167.99C45.6184 168.578 15.5102 142.882 8.90941 97.7038C2.30866 52.5258 39.8411 11.9387 81.5704 8.29663C123.3 4.65455 164.559 34.8243 168.804 83.7484Z"
            stroke="#121212"
            strokeWidth="16"
          />
          <path
            d="M253.838 100.646C258.911 140.138 193.297 158.038 178.337 120.721C178.337 120.721 198.546 118.531 219.017 113.087C239.489 107.644 253.838 100.646 253.838 100.646Z"
            fill="white"
          />
          <path
            d="M253.838 100.646C258.911 140.138 193.297 158.038 178.337 120.721C178.337 120.721 198.546 118.531 219.017 113.087C239.489 107.644 253.838 100.646 253.838 100.646Z"
            fill="#00503F"
            fillOpacity="0.08"
          />
          <path
            d="M281.774 83.7484C286.019 132.672 246.947 167.402 202.767 167.99C158.588 168.578 128.48 142.882 121.879 97.7038C115.278 52.5258 152.811 11.9387 194.54 8.29663C236.27 4.65455 277.529 34.8243 281.774 83.7484Z"
            fill="white"
          />
          <path
            d="M281.774 83.7484C286.019 132.672 246.947 167.402 202.767 167.99C158.588 168.578 128.48 142.882 121.879 97.7038C115.278 52.5258 152.811 11.9387 194.54 8.29663C236.27 4.65455 277.529 34.8243 281.774 83.7484Z"
            fill="#00503F"
            fillOpacity="0.08"
          />
          <path
            d="M164.164 93.5478C168.856 85.7831 185.16 76.175 198.418 85.6606M255.499 72.7531C247.363 67.2254 231.353 69.3312 225.31 80.9715M178.337 120.721C193.297 158.038 258.911 140.138 253.838 100.646C253.838 100.646 239.489 107.644 219.017 113.087C198.546 118.531 178.337 120.721 178.337 120.721ZM281.774 83.7484C286.019 132.672 246.947 167.402 202.767 167.99C158.588 168.578 128.48 142.882 121.879 97.7038C115.278 52.5258 152.811 11.9387 194.54 8.29663C236.27 4.65455 277.529 34.8243 281.774 83.7484Z"
            stroke="#121212"
            strokeWidth="16"
          />
          <path
            d="M393.776 83.7604C397.996 132.546 359.159 167.177 315.245 167.763C271.332 168.35 241.405 142.726 234.844 97.6762C228.283 52.6263 265.59 12.1541 307.068 8.52235C348.546 4.89059 389.556 34.9749 393.776 83.7604Z"
            fill="white"
          />
          <path
            d="M393.776 83.7604C397.996 132.546 359.159 167.177 315.245 167.763C271.332 168.35 241.405 142.726 234.844 97.6762C228.283 52.6263 265.59 12.1541 307.068 8.52235C348.546 4.89059 389.556 34.9749 393.776 83.7604Z"
            fill="#00503F"
            fillOpacity="0.08"
          />
          <path
            d="M319.038 125.035C313.95 113.101 319.702 101.425 329.482 97.914C339.262 94.4028 348.137 98.5477 353.432 109.363C358.727 120.179 353.813 133.205 344.837 137.295C335.861 141.385 324.126 136.968 319.038 125.035Z"
            fill="white"
          />
          <path
            d="M319.038 125.035C313.95 113.101 319.702 101.425 329.482 97.914C339.262 94.4028 348.137 98.5477 353.432 109.363C358.727 120.179 353.813 133.205 344.837 137.295C335.861 141.385 324.126 136.968 319.038 125.035Z"
            fill="#00503F"
            fillOpacity="0.08"
          />
          <path
            d="M342.354 49.6981L347.572 69.6465M289.396 66.2342L298.527 86.97M393.776 83.7604C397.996 132.546 359.159 167.177 315.245 167.763C271.332 168.35 241.405 142.726 234.844 97.6762C228.283 52.6263 265.59 12.1541 307.068 8.52235C348.546 4.89059 389.556 34.9749 393.776 83.7604ZM319.038 125.035C313.95 113.101 319.702 101.425 329.482 97.914C339.262 94.4028 348.137 98.5477 353.432 109.363C358.727 120.179 353.813 133.205 344.837 137.295C335.861 141.385 324.126 136.968 319.038 125.035Z"
            stroke="#121212"
            strokeWidth="16"
          />
          <path
            d="M478.807 100.646C483.88 140.138 418.266 158.038 403.306 120.721C403.306 120.721 423.515 118.531 443.987 113.087C464.459 107.644 478.807 100.646 478.807 100.646Z"
            fill="white"
          />
          <path
            d="M478.807 100.646C483.88 140.138 418.266 158.038 403.306 120.721C403.306 120.721 423.515 118.531 443.987 113.087C464.459 107.644 478.807 100.646 478.807 100.646Z"
            fill="#00503F"
            fillOpacity="0.08"
          />
          <path
            d="M506.744 83.7484C510.989 132.672 471.917 167.402 427.737 167.99C383.558 168.578 353.45 142.882 346.849 97.7038C340.248 52.5258 377.781 11.9387 419.51 8.29663C461.239 4.65455 502.499 34.8243 506.744 83.7484Z"
            fill="white"
          />
          <path
            d="M506.744 83.7484C510.989 132.672 471.917 167.402 427.737 167.99C383.558 168.578 353.45 142.882 346.849 97.7038C340.248 52.5258 377.781 11.9387 419.51 8.29663C461.239 4.65455 502.499 34.8243 506.744 83.7484Z"
            fill="#00503F"
            fillOpacity="0.08"
          />
          <path
            d="M389.134 93.5478C393.826 85.7831 410.13 76.175 423.388 85.6606M480.469 72.7531C472.332 67.2254 456.323 69.3312 450.28 80.9715M403.306 120.721C418.266 158.038 483.88 140.138 478.807 100.646C478.807 100.646 464.459 107.644 443.987 113.087C423.515 118.531 403.306 120.721 403.306 120.721ZM506.744 83.7484C510.989 132.672 471.917 167.402 427.737 167.99C383.558 168.578 353.45 142.882 346.849 97.7038C340.248 52.5258 377.781 11.9387 419.51 8.29663C461.239 4.65455 502.499 34.8243 506.744 83.7484Z"
            stroke="#121212"
            strokeWidth="16"
          />
          <path
            d="M591.777 100.646C596.85 140.138 531.236 158.038 516.276 120.721C516.276 120.721 536.485 118.531 556.957 113.087C577.428 107.644 591.777 100.646 591.777 100.646Z"
            fill="white"
          />
          <path
            d="M591.777 100.646C596.85 140.138 531.236 158.038 516.276 120.721C516.276 120.721 536.485 118.531 556.957 113.087C577.428 107.644 591.777 100.646 591.777 100.646Z"
            fill="#00503F"
            fillOpacity="0.08"
          />
          <path
            d="M619.714 83.7484C623.959 132.672 584.886 167.402 540.707 167.99C496.528 168.578 466.419 142.882 459.819 97.7038C453.218 52.5258 490.75 11.9387 532.48 8.29663C574.209 4.65455 615.468 34.8243 619.714 83.7484Z"
            fill="white"
          />
          <path
            d="M619.714 83.7484C623.959 132.672 584.886 167.402 540.707 167.99C496.528 168.578 466.419 142.882 459.819 97.7038C453.218 52.5258 490.75 11.9387 532.48 8.29663C574.209 4.65455 615.468 34.8243 619.714 83.7484Z"
            fill="#00503F"
            fillOpacity="0.08"
          />
          <path
            d="M502.103 93.5478C506.796 85.7831 523.1 76.175 536.358 85.6606M593.438 72.7531C585.302 67.2254 569.292 69.3312 563.25 80.9715M516.276 120.721C531.236 158.038 596.85 140.138 591.777 100.646C591.777 100.646 577.428 107.644 556.957 113.087C536.485 118.531 516.276 120.721 516.276 120.721ZM619.714 83.7484C623.959 132.672 584.886 167.402 540.707 167.99C496.528 168.578 466.419 142.882 459.819 97.7038C453.218 52.5258 490.75 11.9387 532.48 8.29663C574.209 4.65455 615.468 34.8243 619.714 83.7484Z"
            stroke="#121212"
            strokeWidth="16"
          />
          <path
            d="M704.747 100.646C709.82 140.138 644.206 158.038 629.246 120.721C629.246 120.721 649.455 118.531 669.927 113.087C690.398 107.644 704.747 100.646 704.747 100.646Z"
            fill="white"
          />
          <path
            d="M704.747 100.646C709.82 140.138 644.206 158.038 629.246 120.721C629.246 120.721 649.455 118.531 669.927 113.087C690.398 107.644 704.747 100.646 704.747 100.646Z"
            fill="#00503F"
            fillOpacity="0.08"
          />
          <path
            d="M732.683 83.7484C736.928 132.672 697.856 167.402 653.677 167.99C609.497 168.578 579.389 142.882 572.788 97.7038C566.188 52.5258 603.72 11.9387 645.449 8.29663C687.179 4.65455 728.438 34.8243 732.683 83.7484Z"
            fill="white"
          />
          <path
            d="M732.683 83.7484C736.928 132.672 697.856 167.402 653.677 167.99C609.497 168.578 579.389 142.882 572.788 97.7038C566.188 52.5258 603.72 11.9387 645.449 8.29663C687.179 4.65455 728.438 34.8243 732.683 83.7484Z"
            fill="#00503F"
            fillOpacity="0.08"
          />
          <path
            d="M615.073 93.5478C619.765 85.7831 636.07 76.175 649.328 85.6606M706.408 72.7531C698.272 67.2254 682.262 69.3312 676.22 80.9715M629.246 120.721C644.206 158.038 709.82 140.138 704.747 100.646C704.747 100.646 690.398 107.644 669.927 113.087C649.455 118.531 629.246 120.721 629.246 120.721ZM732.683 83.7484C736.928 132.672 697.856 167.402 653.677 167.99C609.497 168.578 579.389 142.882 572.788 97.7038C566.188 52.5258 603.72 11.9387 645.449 8.29663C687.179 4.65455 728.438 34.8243 732.683 83.7484Z"
            stroke="#121212"
            strokeWidth="16"
          />
        </svg>
        <div className="our-team-sm-btn d-lg-none">
          <a
            href="#"
            className="mt-16 py-5 w-100 d-flex justify-content-center align-items-center border border-2 border-deco-gray-900 rounded-3"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 0L10 6.69388L17.6562 12.5714L0 27.2653C0 27.2653 4.58333 28.6946 8.4375 31.8367C12.2917 34.9788 14.8958 40 14.8958 40L28.4375 21.2245L34.5312 29.7143L40 0Z"
                fill="#121212"
              />
            </svg>
            <div className="our-team-btn-text fs-4 ms-5 fw-medium">
              聯絡我們
            </div>
          </a>
        </div>
        <div className="our-team-lg-btn d-none d-lg-block">
          <div className="d-flex justify-content-between align-items-center">
            <div className="fs-1 fw-bolder text-nowrap">有任何建議或想法</div>
            <div className="arrow-right fs-2 fw-bolder"></div>
            <div className="fs-1 fw-bolder">
              （
              <a href="#" className="our-team-btn fs-1 fw-bolder text-nowrap">
                聯絡我們
              </a>
              ）
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUsPage;