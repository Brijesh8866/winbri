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
              <div className="col-12">
                <div className="row">
                  <div className="col-12">
                    <div className="single-main">
                      <div className="row">
                        <div className="col-6">
                          <div className="news-head">
                            <img src="/assets/images/blog3.webp" alt="#" />
                          </div>
                        </div>
                        <div className="col-6">
                          <h1 className="news-title">
                            <a href="news-single.html">
                              Our Doorstep ECG Service
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              "Winbri Life Science" is a company that makes
                              provides an ECG tests at home in addition to
                              cardiologist-certified reports and
                              teleconsultation services. The ECG or the
                              Electrocardiogram test is one of the tests doctors
                              use to detect any abnormality of the electrical
                              activity of the heart. It records this as a heart
                              rhythm and electrical impulses, which helps
                              cardiologists to identify different heart
                              conditions. When I have to do ECG test?
                            </p>
                            <p>
                              <b>Chest Pain:</b> It's almost always accompanied
                              with other symptoms like dizziness, shortness of
                              breath or nausea, what could be a sign of a heart
                              problem.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text">
                        <div className="row">
                          <div className="col-6">
                            <p className="mt-2">
                              <b>Palpitations:</b> Tachycardia or a feeling of
                              missed beats.
                            </p>
                            <p>
                              <b>Dizziness or Fainting:</b> For instance if it's
                              unanswered question or repetitive it may show
                              heart rhythm disorder.
                            </p>
                            <p>
                              <b>Fatigue:</b> And if it persists without any
                              clear reason, it's likely a symptom of cardiac
                              illness.
                            </p>
                            <p>
                              <b>Monitoring Heart Health:</b> Individuals with
                              specific risk factors such as diabetes, obesity,
                              or smoking history will likely be advised to have
                              regular ECG tests which will enable monitoring of
                              heart progress. These are just some of the
                              indicators for an ECG test, and a physician may
                              recommend it for other reasons that should be
                              based on the patient's unique health condition and
                              symptoms.
                            </p>
                          </div>
                          <div className="col-6">
                            <p>
                              <b>High Blood Pressure (Hypertension):</b>{" "}
                              Monitoring of heart health may include testing ECG
                              regularly.
                            </p>
                            <p>
                              <b>Family History of Heart Disease:</b> Some
                              people with a family history of heart disease may
                              have regular ECG tests performed as a way of
                              preventing diseases in the early stage.
                            </p>
                            <p>
                              <b>Pre-surgical Evaluation:</b> ECG can be used in
                              pre-surgical evaluations to identify
                              cardiovascular issues and ensure patients are in a
                              good physical condition before procedures.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="sortorder px-3">
                          <h2>Top Cardiology Doctors available</h2>
                          <div className="clearfix" />
                        </div>
                        <div className="col-lg-8 col-12">
                          <div className="minLeftSide">
                            <div className="">
                              <div className="clearfix" />
                              <div className="doctor-main-card">
                                <div className="row">
                                  <div className="col-md-8">
                                    <div className="head-doctor">
                                      <ul className="d-flex">
                                        <li>
                                          <div className="doc-imgrat text-center">
                                            <img
                                              src="/assets/images/doctor/63cf67be55b85.jpg"
                                              alt="doctor"
                                            />
                                            <div className="rating-div">
                                              15 Year of Exp.
                                            </div>
                                          </div>
                                        </li>
                                        <li className="doctor-desc">
                                          <a
                                            className="save_speciality"
                                            data-link_rewrite="Cardiology"
                                            href="https://www.healthians.com/online-doctor-consultation/dr-anandmanaklal-chopda-cardiology"
                                          >
                                            <h2>Dr. Anand Manaklal Chopda</h2>
                                          </a>
                                          <p className="rating_digit">
                                            3.5{" "}
                                            <span className="fa fa-star star-checked" />
                                          </p>
                                          <p>
                                            <span>
                                              M.B.B.S, DM - Cardiology
                                            </span>
                                          </p>
                                          <div className="language_known">
                                            <span>Language known:</span> Hindi,
                                            English
                                          </div>
                                          <div className="next_slot">
                                            <span>Next available at:</span>{" "}
                                            05:30 PM, Today
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-md-4 col-xs-12 doctor-consult-div">
                                    <div className="doctor-fee">
                                      <p className="consult_title">
                                        Consultation Fee
                                      </p>
                                      <p className="sale-price">
                                        ₹589 <span> ₹ 1098</span>
                                      </p>
                                      <div className="view-profile">
                                        <a
                                          className="save_speciality"
                                          data-symptom_link="cardiology"
                                          data-link_rewrite="Cardiology"
                                          href="https://www.healthians.com/online-doctor-consultation/dr-anandmanaklal-chopda-cardiology"
                                        >
                                          View Profile
                                        </a>
                                      </div>
                                      <div className="book-appoint">
                                        <button
                                          className="book_consult_btn"
                                          data-link_rewrite="dr-anandmanaklal-chopda-cardiology"
                                          data-price={589}
                                          data-doc_name="Dr. Anand Manaklal Chopda"
                                          data-mrp={1098}
                                          data-doc_id={2250}
                                          data-speciality="cardiology"
                                          data-symptom="cardiology"
                                          data-doc_degree="M.B.B.S, DM - Cardiology"
                                        >
                                          Book an Appointment
                                        </button>
                                      </div>
                                    </div>
                                    <div
                                      id="term-doctor-modal"
                                      className="modal fade"
                                      role="dialog"
                                    >
                                      <div className="modal-dialog">
                                        {/* Modal content*/}
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <button
                                              type="button"
                                              className="close"
                                              data-dismiss="modal"
                                            >
                                              �
                                            </button>
                                          </div>
                                          <div className="modal-body">
                                            <div className="package-term">
                                              <h5>Terms &amp; Conditions</h5>
                                              1) You have to book a pathology
                                              test within 7 days of doctor
                                              consultation scheduled date to
                                              avail the cashback.
                                              <br />
                                              2) Cashback will be equal to
                                              Rs.199 or the doctor consultation
                                              charges whichever is lower.
                                              <br />
                                              3) Cashback will be credited to
                                              the
                                              <b>Healthians Wallet</b> post
                                              pathology (excluding Scans, COVID
                                              &amp; CGHS) report generation.
                                              <br />
                                              4) Cashback will be given only on
                                              the doctor consultation. (Not
                                              Dietitian Consultation)
                                              <br />
                                              5) Minimum order amount of
                                              pathology test should be Rs.1000
                                              (after tax and not including
                                              addon) to get the cashback. No
                                              pending amount should be there.
                                              <br />
                                              6) There is no restriction on the
                                              number of times a user can avail
                                              cashback.
                                              <br />
                                              7) Cashback will be credited based
                                              on customer phone number and not
                                              members.
                                              <br />
                                              8) This offer can be withdrawn
                                              anytime at sole discretion of the
                                              company with retrospective effect.
                                              <br />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="doctor-main-card">
                                <div className="row">
                                  <div className="col-md-8">
                                    <div className="head-doctor">
                                      <ul className="d-flex">
                                        <li>
                                          <div className="doc-imgrat text-center">
                                            <img
                                              src="/assets/images/doctor/6482b343cfee5.jpg"
                                              alt="doctor"
                                            />
                                            <div className="rating-div">
                                              32 Year of Exp.
                                            </div>
                                          </div>
                                        </li>
                                        <li className="doctor-desc">
                                          <a
                                            className="save_speciality"
                                            data-link_rewrite="Cardiology"
                                            href="https://www.healthians.com/online-doctor-consultation/dr-bhaskar-banik-cardiology"
                                          >
                                            <h2>Dr. Bhaskar Banik</h2>
                                          </a>
                                          <p className="rating_digit">
                                            5.0{" "}
                                            <span className="fa fa-star star-checked" />
                                          </p>
                                          <p>
                                            <span>
                                              M.B.B.S, Thyroid Disorders
                                            </span>
                                          </p>
                                          <div className="language_known">
                                            <span>Language known:</span> Hindi,
                                            English, Bengali
                                          </div>
                                          <div className="next_slot">
                                            <span>Next available at:</span>{" "}
                                            11:00 AM, Tomorrow
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-md-4 col-xs-12 doctor-consult-div">
                                    <div className="doctor-fee">
                                      <p className="consult_title">
                                        Consultation Fee
                                      </p>
                                      <p className="sale-price">
                                        ₹349 <span> ₹ 698</span>
                                      </p>
                                      <div className="view-profile">
                                        <a
                                          className="save_speciality"
                                          data-symptom_link="cardiology"
                                          data-link_rewrite="Cardiology"
                                          href="https://www.healthians.com/online-doctor-consultation/dr-bhaskar-banik-cardiology"
                                        >
                                          View Profile
                                        </a>
                                      </div>
                                      <div className="book-appoint">
                                        <button
                                          className="book_consult_btn"
                                          data-link_rewrite="dr-bhaskar-banik-cardiology"
                                          data-price={349}
                                          data-doc_name="Dr. Bhaskar Banik"
                                          data-mrp={698}
                                          data-doc_id={6153}
                                          data-speciality="cardiology"
                                          data-symptom="cardiology"
                                          data-doc_degree="M.B.B.S, Thyroid Disorders Management (Certificate Course), PGD, Diabetes Management (Certificate Course)"
                                        >
                                          Book an Appointment
                                        </button>
                                      </div>
                                    </div>
                                    <div
                                      id="term-doctor-modal"
                                      className="modal fade"
                                      role="dialog"
                                    >
                                      <div className="modal-dialog">
                                        {/* Modal content*/}
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <button
                                              type="button"
                                              className="close"
                                              data-dismiss="modal"
                                            >
                                              �
                                            </button>
                                          </div>
                                          <div className="modal-body">
                                            <div className="package-term">
                                              <h5>Terms &amp; Conditions</h5>
                                              1) You have to book a pathology
                                              test within 7 days of doctor
                                              consultation scheduled date to
                                              avail the cashback.
                                              <br />
                                              2) Cashback will be equal to
                                              Rs.199 or the doctor consultation
                                              charges whichever is lower.
                                              <br />
                                              3) Cashback will be credited to
                                              the
                                              <b>Healthians Wallet</b> post
                                              pathology (excluding Scans, COVID
                                              &amp; CGHS) report generation.
                                              <br />
                                              4) Cashback will be given only on
                                              the doctor consultation. (Not
                                              Dietitian Consultation)
                                              <br />
                                              5) Minimum order amount of
                                              pathology test should be Rs.1000
                                              (after tax and not including
                                              addon) to get the cashback. No
                                              pending amount should be there.
                                              <br />
                                              6) There is no restriction on the
                                              number of times a user can avail
                                              cashback.
                                              <br />
                                              7) Cashback will be credited based
                                              on customer phone number and not
                                              members.
                                              <br />
                                              8) This offer can be withdrawn
                                              anytime at sole discretion of the
                                              company with retrospective effect.
                                              <br />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="doctor-main-card">
                                <div className="row">
                                  <div className="col-md-8">
                                    <div className="head-doctor">
                                      <ul className="d-flex">
                                        <li>
                                          <div className="doc-imgrat text-center">
                                            <img
                                              src="/assets/images/doctor/6412c88e80c8c.jpg"
                                              alt="doctor"
                                            />
                                            <div className="rating-div">
                                              26 Year of Exp.
                                            </div>
                                          </div>
                                        </li>
                                        <li className="doctor-desc">
                                          <a
                                            className="save_speciality"
                                            data-link_rewrite="Cardiology"
                                            href="https://www.healthians.com/online-doctor-consultation/dr-gautam-singh-cardiology"
                                          >
                                            <h2>Dr. Gautam Singh</h2>
                                          </a>
                                          <p>
                                            <span>M.B.B.S, M.D.</span>
                                          </p>
                                          <div className="language_known">
                                            <span>Language known:</span> Hindi,
                                            English
                                          </div>
                                          <div className="next_slot">
                                            <span>Next available at:</span>{" "}
                                            05:30 PM, Today
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-md-4 col-xs-12 doctor-consult-div">
                                    <div className="doctor-fee">
                                      <p className="consult_title">
                                        Consultation Fee
                                      </p>
                                      <p className="sale-price">
                                        ₹2199 <span> ₹ 4398</span>
                                      </p>
                                      <div className="view-profile">
                                        <a
                                          className="save_speciality"
                                          data-symptom_link="cardiology"
                                          data-link_rewrite="Cardiology"
                                          href="https://www.healthians.com/online-doctor-consultation/dr-gautam-singh-cardiology"
                                        >
                                          View Profile
                                        </a>
                                      </div>
                                      <div className="book-appoint">
                                        <button
                                          className="book_consult_btn"
                                          data-link_rewrite="dr-gautam-singh-cardiology"
                                          data-price={2199}
                                          data-doc_name="Dr. Gautam Singh"
                                          data-mrp={4398}
                                          data-doc_id={5681}
                                          data-speciality="cardiology"
                                          data-symptom="cardiology"
                                          data-doc_degree="M.B.B.S, M.D."
                                        >
                                          Book an Appointment
                                        </button>
                                      </div>
                                    </div>
                                    <div
                                      id="term-doctor-modal"
                                      className="modal fade"
                                      role="dialog"
                                    >
                                      <div className="modal-dialog">
                                        {/* Modal content*/}
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <button
                                              type="button"
                                              className="close"
                                              data-dismiss="modal"
                                            >
                                              �
                                            </button>
                                          </div>
                                          <div className="modal-body">
                                            <div className="package-term">
                                              <h5>Terms &amp; Conditions</h5>
                                              1) You have to book a pathology
                                              test within 7 days of doctor
                                              consultation scheduled date to
                                              avail the cashback.
                                              <br />
                                              2) Cashback will be equal to
                                              Rs.199 or the doctor consultation
                                              charges whichever is lower.
                                              <br />
                                              3) Cashback will be credited to
                                              the
                                              <b>Healthians Wallet</b> post
                                              pathology (excluding Scans, COVID
                                              &amp; CGHS) report generation.
                                              <br />
                                              4) Cashback will be given only on
                                              the doctor consultation. (Not
                                              Dietitian Consultation)
                                              <br />
                                              5) Minimum order amount of
                                              pathology test should be Rs.1000
                                              (after tax and not including
                                              addon) to get the cashback. No
                                              pending amount should be there.
                                              <br />
                                              6) There is no restriction on the
                                              number of times a user can avail
                                              cashback.
                                              <br />
                                              7) Cashback will be credited based
                                              on customer phone number and not
                                              members.
                                              <br />
                                              8) This offer can be withdrawn
                                              anytime at sole discretion of the
                                              company with retrospective effect.
                                              <br />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="recommended-packages"
                                style={{ display: "none" }}
                              >
                                <h2>Fever Package recommended for you</h2>
                                <p>Full body health checkups in Gurgaon</p>
                              </div>
                              <div
                                className="owl-slider-wrapper"
                                style={{ display: "none" }}
                              >
                                <div
                                  id="suggestedpackages"
                                  className="owl-carousel"
                                >
                                  <div className="package-slider-item">
                                    <ul>
                                      <li>
                                        <h3>
                                          Healthy India 2022 Full Body Checkup
                                        </h3>
                                      </li>
                                      <li className="discount-div">
                                        <p className="discount-slider text-light-discount">
                                          50% off
                                        </p>
                                      </li>
                                    </ul>
                                    <p>Includes :46 Parameters</p>
                                    <p>
                                      Blood Glucose Fasting, Amylase Enzymatic,
                                      Serum, Complete Blood Count, Typhoid,
                                      Diabetes Screening...
                                    </p>
                                    <ul>
                                      <li>
                                        <p className="sale_price">
                                          <span>₹599</span>₹380
                                        </p>
                                      </li>
                                      <li className="slider-book">
                                        <a href="javascript:void(0)">
                                          Book Now
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="package-slider-item">
                                    <ul>
                                      <li>
                                        <h3>
                                          Healthy India 2022 Full Body Checkup
                                        </h3>
                                      </li>
                                      <li className="discount-div">
                                        <p className="discount-slider text-light-discount">
                                          50% off
                                        </p>
                                      </li>
                                    </ul>
                                    <p>Includes :46 Parameters</p>
                                    <p>
                                      Blood Glucose Fasting, Amylase Enzymatic,
                                      Serum, Complete Blood Count, Typhoid,
                                      Diabetes Screening...
                                    </p>
                                    <ul>
                                      <li>
                                        <p className="sale_price">
                                          <span>₹599</span>₹380
                                        </p>
                                      </li>
                                      <li className="slider-book">
                                        <a href="javascript:void(0)">
                                          Book Now
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="package-slider-item">
                                    <ul>
                                      <li>
                                        <h3>
                                          Healthy India 2022 Full Body Checkup
                                        </h3>
                                      </li>
                                      <li className="discount-div">
                                        <p className="discount-slider text-light-discount">
                                          50% off
                                        </p>
                                      </li>
                                    </ul>
                                    <p>Includes :46 Parameters</p>
                                    <p>
                                      Blood Glucose Fasting, Amylase Enzymatic,
                                      Serum, Complete Blood Count, Typhoid,
                                      Diabetes Screening...
                                    </p>
                                    <ul>
                                      <li>
                                        <p className="sale_price">
                                          <span>₹599</span>₹380
                                        </p>
                                      </li>
                                      <li className="slider-book">
                                        <a href="javascript:void(0)">
                                          Book Now
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="package-slider-item">
                                    <ul>
                                      <li>
                                        <h3>
                                          Healthy India 2022 Full Body Checkup
                                        </h3>
                                      </li>
                                      <li className="discount-div">
                                        <p className="discount-slider text-light-discount">
                                          50% off
                                        </p>
                                      </li>
                                    </ul>
                                    <p>Includes :46 Parameters</p>
                                    <p>
                                      Blood Glucose Fasting, Amylase Enzymatic,
                                      Serum, Complete Blood Count, Typhoid,
                                      Diabetes Screening...
                                    </p>
                                    <ul>
                                      <li>
                                        <p className="sale_price">
                                          <span>₹599</span>₹380
                                        </p>
                                      </li>
                                      <li className="slider-book">
                                        <a href="javascript:void(0)">
                                          Book Now
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="package-slider-item">
                                    <ul>
                                      <li>
                                        <h3>
                                          Healthy India 2022 Full Body Checkup
                                        </h3>
                                      </li>
                                      <li className="discount-div">
                                        <p className="discount-slider text-light-discount">
                                          50% off
                                        </p>
                                      </li>
                                    </ul>
                                    <p>Includes :46 Parameters</p>
                                    <p>
                                      Blood Glucose Fasting, Amylase Enzymatic,
                                      Serum, Complete Blood Count, Typhoid,
                                      Diabetes Screening...
                                    </p>
                                    <ul>
                                      <li>
                                        <p className="sale_price">
                                          <span>₹599</span>₹380
                                        </p>
                                      </li>
                                      <li className="slider-book">
                                        <a href="javascript:void(0)">
                                          Book Now
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-12">
                          <div className="form-col">
                            <div className="inner-form">
                              <h2>We are Here to Help!</h2>
                              <p>Get instant call back in few mins</p>
                              <form
                                action="https://www.healthians.com/callBackLead"
                                id="getACallBackModal_form"
                                name="add_address_form"
                                className="form-horizontal"
                                method="post"
                              >
                                <input
                                  type="hidden"
                                  id="gclid_field"
                                  name="gclid_field"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  name="_token"
                                  defaultValue="6U9xUe1s2hb1WSCWuD4ES9DjqQZxSjpAX7neRDML"
                                  autoComplete="off"
                                />
                                <input
                                  type="text"
                                  placeholder="Full Name*"
                                  name="gacb_name"
                                  id="gacb_name"
                                  maxLength={40}
                                  className="form-control"
                                  required=""
                                />
                                <input
                                  type="tel"
                                  placeholder="Enter 10-digit mobile no.*"
                                  minLength={10}
                                  maxLength={10}
                                  name="gacb_mobile"
                                  id="gacb_mobile"
                                  className="form-control"
                                  required=""
                                />
                                <select
                                  className="form-control"
                                  name="gacb_city"
                                  id="gacb_city"
                                >
                                  <option value={1724}>Surat</option>
                                  <option value={1974}>Ahemdabad</option>
                                </select>

                                <div className="doctor-fee">
                                  <div className="book-appoint">
                                    <button className="book_consult_btn">
                                      Book an Appointment
                                    </button>
                                  </div>
                                </div>
                                {/* <button class="appointment-btn">Book an Appointment</button> */}
                                <input
                                  type="hidden"
                                  name="utm_id"
                                  id="utm_id"
                                  defaultValue="vdoc_at_home_callback"
                                />
                                <input
                                  type="hidden"
                                  name="source"
                                  defaultValue="web"
                                />
                                <input
                                  type="hidden"
                                  name="remarks"
                                  id="vdoc_remarks"
                                  defaultValue="VDoc@Home Callback (Book an Appointment-Get instant call back in few mins)"
                                />
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-12">
                    <div className="single-main industries-details__tab">
                      <div className="row">
                        <div className="col-lg-6">
                          <ul
                            className="list-unstyled nav nav-tabs industries-details__tab-list"
                            id="serviceTabs"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link active"
                                data-bs-toggle="tab"
                                href="#service-1"
                                role="tab"
                              >
                                Call Us at 99799-60020/30
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#service-2"
                                role="tab"
                              >
                                Technician Reach with ECG kit on-time
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#service-3"
                                role="tab"
                              >
                                Take Patient's Complete ECG
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#service-4"
                                role="tab"
                              >
                                Upload ECG at Cloud-Based Sol.
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#service-5"
                                role="tab"
                              >
                                Expert Cardiologist will Check ECG
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#service-6"
                                role="tab"
                              >
                                Reports on Email, Text or Message
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <div className="tab-content" id="serviceTabsContent">
                            <div
                              className="tab-pane fade show active"
                              id="service-1"
                              role="tabpanel"
                            >
                              <div className="industries-details__tab-box">
                                <img
                                  src="/assets/images/15.webp"
                                  alt="Awesome Image"
                                />
                                <p>
                                  Call us at 99799-60020 | 99799-60030 |
                                  82007-88099 to book an immediate Appointment
                                  for ECG Test at Home.
                                </p>
                                <a href="#">
                                  Read More{" "}
                                  <i className="icofont-rounded-right" />
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="service-2"
                              role="tabpanel"
                            >
                              <div className="industries-details__tab-box">
                                <img
                                  src="/assets/images/15.webp"
                                  alt="Awesome Image"
                                />
                                <p>
                                  Our ECG Technician will reach on time with the
                                  ECG Kit at your home.
                                </p>
                                <a href="#">
                                  Read More{" "}
                                  <i className="icofont-rounded-right" />
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="service-3"
                              role="tabpanel"
                            >
                              <div className="industries-details__tab-box">
                                <img
                                  src="/assets/images/15.webp"
                                  alt="Awesome Image"
                                />
                                <p>
                                  We take a complete ECG test to detect abnormal
                                  heart rhythm, poor blood flow (ischemia), or
                                  to monitor medicine/pacemaker impact.
                                </p>
                                <a href="#">
                                  Read More{" "}
                                  <i className="icofont-rounded-right" />
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="service-4"
                              role="tabpanel"
                            >
                              <div className="industries-details__tab-box">
                                <img
                                  src="/assets/images/15.webp"
                                  alt="Awesome Image"
                                />
                                <p>
                                  ECG data is uploaded to a cloud-based system
                                  where expert cardiologists review it for
                                  faster, accurate reports.
                                </p>
                                <a href="#">
                                  Read More{" "}
                                  <i className="icofont-rounded-right" />
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="service-5"
                              role="tabpanel"
                            >
                              <div className="industries-details__tab-box">
                                <img
                                  src="/assets/images/15.webp"
                                  alt="Awesome Image"
                                />
                                <p>
                                  Expert cardiologists will verify your ECG
                                  report and send results with a verified
                                  signature.
                                </p>
                                <a href="#">
                                  Read More{" "}
                                  <i className="icofont-rounded-right" />
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="service-6"
                              role="tabpanel"
                            >
                              <div className="industries-details__tab-box">
                                <img
                                  src="/assets/images/15.webp"
                                  alt="Awesome Image"
                                />
                                <p>
                                  You will receive the accurate report via
                                  Email, Text, or WhatsApp message.
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
                  </div> */}
                </div>
              </div>
              {/* <div className="col-lg-4 col-12">
                <div className="main-sidebar">
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
              </div> */}
            </div>
          </div>
        </section>
      </>

      <HomeFooter />
    </>
  );
}

export default ECGService;
