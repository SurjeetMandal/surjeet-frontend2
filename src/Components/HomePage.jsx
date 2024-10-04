import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

import logo from "../assets/mirandaLogo.svg";
import "../Style/app.scss";
import img1 from "../assets/mirandaImg1.jpeg";
import img2 from "../assets/mirandaImg2.webp";
import img3 from "../assets/mirandaImg3.jpeg";
import img4 from "../assets/mirandaImg4.jpeg";
import cutOut from "../assets/mirandaImgCutOut.png";
import img5 from "../assets/mirandaImg5.webp";
import img6 from "../assets/mirandaImg6.jpeg"
import myLogo from '../assets/My LOGO.jpg'

const HomePage = () => {
  const page1Ref = useRef(null); // Ref to #page1 div
  const scrollRef = useRef(null); // Ref for scroll container

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(page1Ref.current, {
      y: "100vh",
      scale: 0.4,
      duration: 0
    });
    tl.to(page1Ref.current, {
      y: "-160vh",
      scale: 0.4,
      duration: 1,
    });
    tl.to(page1Ref.current, {
      delay: 1,
      rotate: -360,
      y: "0vh",
      scale: 1,
      duration: 2,
      ease: "Power2.easeInOut"
    });

    // Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      resetNativeScroll: true, 
    });

    // Clean up Locomotive Scroll on component unmount
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div className='MAIN' ref={scrollRef}>
      <div id="page1" ref={page1Ref}>
        <div className="img">
          <div className="color_overlay">
            
            {/* Nav Bar */}
            <nav>
              <div className="img2">
                <div className="color_overlay">
                  <div className="container">
                    <div className="navContent">
                      <div className="item1">
                        <p>Amsterdam, NL</p>
                      </div>
                      <div className="item2">
                        <img className="logoImg" src={logo} alt="logo" />
                      </div>
                      <div className="item3">
                        <img
                          className="menuImg"
                          src="https://static-00.iconduck.com/assets.00/menu-veggie-burger-icon-1024x495-958cbvxn.png"
                          alt="menu"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* Above Hero Section */}
            <div className="above_hero container top_spacing">
              <div className="first">
                <div className="hideImg">
                  <img src={img1} alt="img1" />
                </div>
                <p className="heading">AVRO | KO<span> NEW</span></p>
                <p className="normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.
                </p>
              </div>
              <div className="second">
                <h1>ALL WORK!</h1>
                <p className="middle">A Featured selection of the latest work - of the years.</p>
                <p className="middle_nor">
                  <span>TIP!</span> Drag down to navigate
                </p>
              </div>
              <div className="third">
                <div className="hideImg">
                  <img src={img2} alt="img2" />
                </div>
                <p className="heading">THE ROGER HUB <span className="second_span">NEW</span></p>
                <p className="normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor consectetur adipisicing elit.
                </p>
              </div>
            </div>

            {/* Hero Section */}
            <div className="container top_spacing">
              <p className="hero_para">MIRANDA</p>
            </div>

            {/* Big Image Section */}
            <div className="big_img top_spacing">
              <div className="container main">
                <div className="text_content">
                  <p>INTRACTIVE <hr /> <span>ARTIST!</span> <hr /></p>
                  <img src={img4} alt="img4" />
                  <p className="full_para top_spacing">
                    <span>A</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hi this surjeet cloning this
                  </p>
                  <p className="full_para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Website to learn new skills like.
                  </p>
                </div>
                <div className="img_content">
                  <img src={img3} alt="img3" />
                  <p className="below_big_img top_spacing">
                    DIGITAL ART DIRECTOR <hr /> INTERACTIVE DESIGNER <hr /> CREATIVE DEVELOPER <hr /> BASED IN AMSTERDAM, NL. <hr />
                  </p>
                </div>
              </div>
            </div>

            {/* Hero-like Section */}
            <div className="hero_like_text_2 container top_spacing">
              <div className="para_div">
                <p className="hero_para">WEBSITE</p>
              </div>
              <div className="cutout">
                <img src={cutOut} alt="cutout" />
              </div>
            </div>

            {/* Next section */}
            <div className='container top_spacing'>

              <div className="Next_wrapper">

                <div className='Next_1'>
                  <div className="Next_1_above">
                    <div className="Next_1_box_1">
                      <p className="Next_1_p1">
                        UPCOMMING NEXT
                      </p>
                      <p className="Next_1_p2">
                        Fresh entry - A selected work from the latest digital releases.
                      </p>
                      <p className="Next_1_p3">
                        <span>TIP!</span> Click on the image explore
                      </p>
                    </div>
                    
                    <div className="Next_1_box_2">
                      <div className="imgcontainer">
                        <img src={img5} alt="" />
                      </div>
                      <div className="Next_1_box_2_txt">
                        <p className="imagecontainer_1">
                          UNEXPECTED TIME
                        </p>
                        <p className="imagecontainer_2">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, iure sequi quis dolores a, deserunt provident sit repellat voluptatem deleniti fuga,
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="Next_1_below">
                    <img src={img6} alt="" />
                  </div>

                </div>

                <div className="Next_2">

                  <div className="Next_2_wrapper">
                    <p className='Next_2_big_para'>THINK, CREATE</p>
                    <hr />
                    <p className='Next_2_para'>DELIVER</p>
                    <hr />
                    <p className="full_para top_spacing_2">
                    <span>A</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hi hello
                    </p>
                    <p className="full_para">
                      Lorem ipsum dolor sit this.
                    </p>
                    <p className="full_para top_spacing_2">
                      Lorem ipsum dolor sit this. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hi hello it surjeet here its made
                    </p>
                    <div className="ovel_shape">
                    <img src="https://cdn.prod.website-files.com/5f2429f172d117fcee10e819/61001a3509319b6ae39e156b_arrow-long.svg" alt="" />
                      <h1>ALL WORK</h1>
                    </div>
                  </div>
                  
                </div>
              </div>

            </div>

            {/* running text section */}
            <div className="running_txt top_spacing">
              <div className="run1">
                This clone is made by Surjeet Find me on <a href="https://www.linkedin.com/in/surjeet-mandal-a05871282/" target='_blank'>LINKEDIN</a>
              </div>
              <div className="run1">
                This clone is made by Surjeet Find me on <a href="https://www.linkedin.com/in/surjeet-mandal-a05871282/" target='_blank'>LINKEDIN</a>
              </div>
              <div className="run1">
                This clone is made by Surjeet Find me on <a href="https://www.linkedin.com/in/surjeet-mandal-a05871282/" target='_blank'>LINKEDIN</a>
              </div>
            </div>

            {/* footer section */}
            <div className="footer container">
              <div className="myName">
                <img src={myLogo} alt="" />
                SURJEET
              </div>
              <div className="linkedIn">
                <a href="https://www.linkedin.com/in/surjeet-mandal-a05871282/" target='_blank'>LINKEDIN</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;


