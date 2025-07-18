import { Helmet } from "react-helmet";
import "react-lazy-load-image-component/src/effects/blur.css";
import HomeHeader from "../../components/partials/Header/header";
import HomeFooter from "../../components/partials/Footer/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ECGService() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  const gallerySettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <>
      <Helmet>
        <title>One-Stop Solution For All Your Fitness Needs - FG Group</title>
        <meta
          name="description"
          content="FG Group Solely Works In The Health & Fitness Sector. We Provide Diet & Exercise Plans As Well As Health And Fitness Courses. We Also Offer Digital Marketing Courses For Fitness Professionals, And Ready-Made Meals For Healthy Living."
        />
        <meta
          name="keywords"
          content="best dietitian in surat, online dietitian consultation, gyms in surat, personal training gyms near me, certified nutritionist course, fitness trainer course in india, online fitness courses, nutritionist course online india, certification for fitness trainer, nutritionist online course, best digital marketing course, best digital marketing course online"
        />
        {/* <link
          rel="preload"
          href={`${process.env.PUBLIC_URL}/assets/images/img/website_intro_video1.mp4`}
          as="fetch"
          type="video/mp4"
        /> */}
      </Helmet>

      <HomeHeader />

      <>
        {/* Breadcrumbs */}
        <div className="breadcrumbs overlay">
          <div className="container">
            <div className="bread-inner">
              <div className="row">
                <div className="col-12">
                  <h2>Doorstep ECG Test</h2>
                  <ul className="bread-list">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">ECG Test</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Single News */}
        <section className="news-single section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="row">
                  <div className="col-12">
                    <div className="single-main">
                      <div className="news-head">
                        <img src="/assets/images/blog3.webp" alt="#" />
                      </div>
                      <h1 className="news-title">
                        <a href="news-single.html">Our Doorstep ECG Service</a>
                      </h1>
                      <div className="news-text">
                        <p>
                          "Winbri Life Science" is a company that makes provides
                          an ECG tests at home in addition to
                          cardiologist-certified reports and teleconsultation
                          services. The ECG or the Electrocardiogram test is one
                          of the tests doctors use to detect any abnormality of
                          the electrical activity of the heart. It records this
                          as a heart rhythm and electrical impulses, which helps
                          cardiologists to identify different heart conditions.
                          When I have to do ECG test?
                        </p>
                        <p>
                          <b>Chest Pain:</b> It's almost always accompanied with
                          other symptoms like dizziness, shortness of breath or
                          nausea, what could be a sign of a heart problem.
                        </p>
                        <p>
                          <b>Palpitations:</b> Tachycardia or a feeling of
                          missed beats.
                        </p>
                        <p>
                          <b>Dizziness or Fainting:</b> For instance if it’s
                          unanswered question or repetitive it may show heart
                          rhythm disorder.
                        </p>
                        <p>
                          <b>Fatigue:</b> And if it persists without any clear
                          reason, it's likely a symptom of cardiac illness.
                        </p>
                        <p>
                          <b>High Blood Pressure (Hypertension):</b> Monitoring
                          of heart health may include testing ECG regularly.
                        </p>
                        <p>
                          <b>Family History of Heart Disease:</b> Some people
                          with a family history of heart disease may have
                          regular ECG tests performed as a way of preventing
                          diseases in the early stage.
                        </p>
                        <p>
                          <b>Pre-surgical Evaluation:</b> ECG can be used in
                          pre-surgical evaluations to identify cardiovascular
                          issues and ensure patients are in a good physical
                          condition before procedures.
                        </p>
                        <p>
                          <b>Monitoring Heart Health:</b> Individuals with
                          specific risk factors such as diabetes, obesity, or
                          smoking history will likely be advised to have regular
                          ECG tests which will enable monitoring of heart
                          progress. These are just some of the indicators for an
                          ECG test, and a physician may recommend it for other
                          reasons that should be based on the patient's unique
                          health condition and symptoms.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="single-main industries-details__tab">
                      <div className="row">
                        <div className="col-lg-6">
                          <ul className="list-unstyled nav nav-tabs industries-details__tab-list">
                            <li className="active">
                              <a
                                className="nav-item nav-link"
                                data-toggle="tab"
                                href="#service-1"
                              >
                                Call Us at 99799-60020/30
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-item nav-link"
                                data-toggle="tab"
                                href="#service-2"
                              >
                                Technician Reach with ECG kit on-time
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-item nav-link"
                                data-toggle="tab"
                                href="#service-3"
                              >
                                Take Patient's Complete ECG
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-item nav-link"
                                data-toggle="tab"
                                href="#service-4"
                              >
                                Upload ECG at Cloud-Based Sol.
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-item nav-link"
                                data-toggle="tab"
                                href="#service-5"
                              >
                                Expert Cardiologist will Check ECG
                              </a>
                            </li>
                            <li>
                              <a
                                className="nav-item nav-link"
                                data-toggle="tab"
                                href="#service-6"
                              >
                                Reports on Email, Text or Message
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <div className="tab-content">
                            <div
                              className="tab-pane fade animated fadeInUp active"
                              id="service-1"
                            >
                              <div className="industries-details__tab-box">
                                <img
                                  decoding="async"
                                  src="/assets/images/15.webp"
                                  alt="Awesome Image"
                                />
                                <p>
                                  Call us at 99799-60020 | 99799-60030 |
                                  82007-88099 to book immediate Appointment for
                                  ECG Test at Home
                                </p>
                                <a href="#">
                                  Read More{" "}
                                  <i className="icofont-rounded-right" />
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade animated fadeInUp"
                              id="service-2"
                            >
                              <div className="industries-details__tab-box">
                                <img
                                  decoding="async"
                                  src="/assets/images/15.webp"
                                  alt="Awesome Image"
                                />
                                <p>
                                  ECG Technician will reach on booking time slot
                                  with ECG Kit at your Home.
                                </p>
                                <a href="#">
                                  Read More{" "}
                                  <i className="icofont-rounded-right" />
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade animated fadeInUp"
                              id="service-3"
                            >
                              <div className="industries-details__tab-box">
                                <img
                                  decoding="async"
                                  src="/assets/images/15.webp"
                                  alt="Awesome Image"
                                />
                                <p>
                                  Take Complete ECG Test to check or monitor
                                  abnormal heart rhythm. Detect the poor blood
                                  flow to the heart muscle (ischemia). Also,
                                  monitor the medicine or pacemaker effects on
                                  the heart.
                                </p>
                                <a href="#">
                                  Read More{" "}
                                  <i className="icofont-rounded-right" />
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade animated fadeInUp"
                              id="service-4"
                            >
                              <div className="industries-details__tab-box">
                                <img
                                  decoding="async"
                                  src="/assets/images/15.webp"
                                  alt="Awesome Image"
                                />
                                <p>
                                  Upload ECG Test at Cloud-Based Solution to
                                  which will be identify from our Expert
                                  Cardiologist to get on-time and faster
                                  accurate report.
                                </p>
                                <a href="#">
                                  Read More{" "}
                                  <i className="icofont-rounded-right" />
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade animated fadeInUp"
                              id="service-5"
                            >
                              <div className="industries-details__tab-box">
                                <img
                                  decoding="async"
                                  src="/assets/images/15.webp"
                                  alt="Awesome Image"
                                />
                                <p>
                                  Expert Cardiologists will check the ECG Report
                                  and send the Result with their Signature
                                </p>
                                <a href="#">
                                  Read More{" "}
                                  <i className="icofont-rounded-right" />
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade animated fadeInUp"
                              id="service-6"
                            >
                              <div className="industries-details__tab-box">
                                <img
                                  decoding="async"
                                  src="/assets/images/15.webp"
                                  alt="Awesome Image"
                                />
                                <p>
                                  You will get the Accurate Reports on your
                                  mobile Email, Text or Message.
                                </p>
                                <a href="#">
                                  Read More{" "}
                                  <i className="icofont-rounded-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="comments-form">
                      <h2 className="mb-2">Request a Free Quote</h2>
                      <p className="mb-4">
                        Please feel free to contact our friendly reception staff
                        with any general or medical inquiry. Our team will get
                        back to you at the earliest.
                      </p>
                      <form className="form">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-12">
                            <div className="form-group">
                              <i className="fa fa-user" />
                              <input
                                type="text"
                                name="first-name"
                                placeholder="First name"
                                required="required"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12">
                            <div className="form-group">
                              <i className="fa fa-user" />
                              <input
                                type="text"
                                name="last-name"
                                placeholder="Last name"
                                required="required"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12">
                            <div className="form-group">
                              <i className="fa fa-envelope" />
                              <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required="required"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12">
                            <div className="form-group">
                              <i
                                className="fa fa-mobile"
                                style={{ fontSize: 19 }}
                                aria-hidden="true"
                              />
                              <input
                                type="text"
                                name="mobile"
                                placeholder="Mobile No."
                                required="required"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12">
                            <div className="form-group">
                              <i
                                className="fa fa-suitcase"
                                style={{ fontSize: 15 }}
                                aria-hidden="true"
                              />
                              <select>
                                <option value="Select Service">
                                  Select Service
                                </option>
                                <option value="Infertility">Infertility</option>
                                <option value="Obstetric">Obstetric</option>
                                <option value="Gynecology">Gynecology</option>
                                <option value="Sonography">Sonography</option>
                                <option value="Laparoscopy">Laparoscopy</option>
                                <option value="Fetal Medicine">
                                  Fetal Medicine
                                </option>
                                <option value="Cancer Ditection">
                                  Cancer Ditection
                                </option>
                                <option value="Cosmetic Gynecology">
                                  Cosmetic Gynecology
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-12">
                            <div className="form-group">
                              <i
                                className="fa fa-location-arrow"
                                style={{ fontSize: 16 }}
                                aria-hidden="true"
                              />
                              <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                required="required"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group message">
                              <i className="fa fa-pencil" />
                              <textarea
                                name="message"
                                rows={7}
                                placeholder="Type Your Message Here"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group button">
                              <button type="submit" className="btn primary">
                                <i className="fa fa-send" />
                                Submit Comment
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="main-sidebar">
                  <div className="single-widget search">
                    <div className="form">
                      <input type="email" placeholder="Search Here..." />
                      <a className="button" href="#">
                        <i className="fa fa-search" />
                      </a>
                    </div>
                  </div>
                  <div className="single-widget recent-post">
                    <h3 className="title">Our Services</h3>
                    <div className="single-post">
                      <div className="image">
                        <img src="/assets/images/blog3.webp" alt="#" />
                      </div>
                      <div
                        className="content d-flex flex-column justify-content-center pl-0"
                        style={{ height: 80 }}
                      >
                        <h5>
                          <a href="ecg-test.html">ECG Test</a>
                        </h5>
                        <div>
                          <a href="ecg-test.html">
                            Read More <i className="icofont-rounded-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-post">
                      <div className="image">
                        <img src="/assets/images/blog3.webp" alt="#" />
                      </div>
                      <div
                        className="content d-flex flex-column justify-content-center pl-0"
                        style={{ height: 80 }}
                      >
                        <h5>
                          <a href="pft-test.html">PFT Test</a>
                        </h5>
                        <div>
                          <a href="pft-test.html">
                            Read More <i className="icofont-rounded-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-post">
                      <div className="image">
                        <img src="/assets/images/blog3.webp" alt="#" />
                      </div>
                      <div
                        className="content d-flex flex-column justify-content-center pl-0"
                        style={{ height: 80 }}
                      >
                        <h5>
                          <a href="x-ray-test.html">X-Ray Test</a>
                        </h5>
                        <div>
                          <a href="x-ray-test.html">
                            Read More <i className="icofont-rounded-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-post">
                      <div className="image">
                        <img src="/assets/images/blog3.webp" alt="#" />
                      </div>
                      <div
                        className="content d-flex flex-column justify-content-center pl-0"
                        style={{ height: 80 }}
                      >
                        <h5>
                          <a href="blood-test.html">Blood Test</a>
                        </h5>
                        <div>
                          <a href="blood-test.html">
                            Read More <i className="icofont-rounded-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-post">
                      <div className="image">
                        <img src="/assets/images/blog3.webp" alt="#" />
                      </div>
                      <div
                        className="content d-flex flex-column justify-content-center pl-0"
                        style={{ height: 80 }}
                      >
                        <h5>
                          <a href="full-body-test.html">Full Body Checkup</a>
                        </h5>
                        <div>
                          <a href="full-body-test.html">
                            Read More <i className="icofont-rounded-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-post">
                      <div className="image">
                        <img src="/assets/images/blog3.webp" alt="#" />
                      </div>
                      <div
                        className="content d-flex flex-column justify-content-center pl-0"
                        style={{ height: 80 }}
                      >
                        <h5>
                          <a href="ambulatory-test.html">Ambulatory Test</a>
                        </h5>
                        <div>
                          <a href="ambulatory-test.html">
                            Read More <i className="icofont-rounded-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-post">
                      <div className="image">
                        <img src="/assets/images/blog3.webp" alt="#" />
                      </div>
                      <div
                        className="content d-flex flex-column justify-content-center pl-0"
                        style={{ height: 80 }}
                      >
                        <h5>
                          <a href="holter-monitoring-test.html">
                            Holter Monitoring Test
                          </a>
                        </h5>
                        <div>
                          <a href="holter-monitoring-test.html">
                            Read More <i className="icofont-rounded-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-post">
                      <div className="image">
                        <img src="/assets/images/blog3.webp" alt="#" />
                      </div>
                      <div
                        className="content d-flex flex-column justify-content-center pl-0"
                        style={{ height: 80 }}
                      >
                        <h5>
                          <a href="audiometry-test.html">Audiometry Test</a>
                        </h5>
                        <div>
                          <a href="audiometry-test.html">
                            Read More <i className="icofont-rounded-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-post">
                      <div className="image">
                        <img src="/assets/images/blog3.webp" alt="#" />
                      </div>
                      <div
                        className="content d-flex flex-column justify-content-center pl-0"
                        style={{ height: 80 }}
                      >
                        <h5>
                          <a href="sleep-study-test.html">Sleep Study Test</a>
                        </h5>
                        <div>
                          <a href="sleep-study-test.html">
                            Read More <i className="icofont-rounded-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      <HomeFooter />
    </>
  );
}

export default ECGService;
