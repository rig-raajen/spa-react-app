import React from 'react'
import about1 from '../assets/img/about1.jpg';
import about2 from '../assets/img/about2.jpg';
import headingImage from '../assets/img/heading-image.png';
import service1 from '../assets/img/service1.jpg';
import service2 from '../assets/img/service2.jpg';
import service3 from '../assets/img/service3.jpg';
import service4 from '../assets/img/service4.jpg';
import reservation1 from '../assets/img/reservation1.png';
import counterIcon1 from '../assets/img/counter-icon1.png';
import counterIcon2 from '../assets/img/counter-icon2.png';
import counterIcon3 from '../assets/img/counter-icon3.png'
import counterIcon4 from '../assets/img/counter-icon4.png'
import testi1 from '../assets/img/testi1.jpg'
import featuresImg from '../assets/img/features-img.png'
import discountImg from '../assets/img/discount-img.jpg'
import team1 from '../assets/img/team1.jpg'
import team2 from '../assets/img/team2.jpg'
import team3 from '../assets/img/team3.jpg'
import team4 from '../assets/img/team4.jpg'
import pricingImage from '../assets/img/pricing-image.png'
import product1 from '../assets/img/product1.png'
import product2 from '../assets/img/product2.png'
import lpost1 from '../assets/img/lpost1.jpg'
import lpost2 from '../assets/img/lpost2.jpg'
import lpost3 from '../assets/img/lpost3.jpg'
import partner1 from '../assets/img/partner1.png'
import partner2 from '../assets/img/partner2.png'
import partner3 from '../assets/img/partner3.png'
import partner4 from '../assets/img/partner4.png'
import ScriptTag from 'react-script-tag';


function Homepage() {
    return (
        <>

            <section className="about-us-section" style={{background: "url(assets/img/about-bg2.png)"}}>
                <div className="container">
                    <div className="row">
                        <div className="custom-col-6">
                            <div className="about-us-image-wrapper image-wrapper-has-two-image">
                                <figure className="first-image">
                                    <img src={about1} alt="about1" className="" />

                                </figure>
                                <figure className="second-image">
                                    <img src={about2} alt="about2" className="" />
                                </figure>
                            </div>
                        </div>
                        <div className="custom-col-6">
                            <div className="about-us-content">
                                <header className="entry-header heading">
                                    <h2 className="entry-title"><span>The best </span> Beauty Spa & Wellness Salon
                                            </h2>
                                    <p>Hello. Our center has been present for over 20 years in the market. We
                                    make
                                                the most of all our customers.</p>
                                </header>
                                <p>Risus magna aenean, sagittis sit neque corporis,
                                integer praesent tristique eu amet mauris, a quisque, facilisis molestie a
                                lacus
                                quam elit. Nulla lacus conva lis. Vivamus nulla at in eros mi, magna
                                malesuada
                                            ut sed facilisis, metus proin.</p>
                                <p>Diam pharetra sociis quis per ad metus, pharetra libero, ac quis congue orci,
                                            quam inceptos pede enim est vitae tortor.</p>
                                <a href="#" className="box-button"> about us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service-section" style={{background: "url(assets/img/service-bg.png)"}}>
                <div className="container">
                    <header className="entry-header heading heading-center">
                        <h2 className="entry-title">
                            <span>Body and Mind </span> Beautiful Services We Have </h2>
                        <p>Placerat ac, mauris non tristique laoreet libero, ut elementum ut lacus in vel amet,
                        dolor mauris ut lectus. Eu ut, vel laoreet
                        aliquam, diam amet, integer erat morbi tristique mauris pede, in rutrum suspendisse
                        vel integer in etiam. Eleifend cras nulla,
                        sit phasellus dapibus sed wisi accumsan, quam tortor arcu ipsum nam et. Lobortis
                        ducimus sed pellentesque, turpis magni aliquam
                                    consectetuer erat</p>
                        <figure className="featured-image">
                            <img src={headingImage} alt="heading-image" className="" />
                        </figure>
                    </header>
                    <div className="post-wrapper post-wrapper-has-two-child">
                        <article className="post">
                            <figure className="featuerd-image">
                                <img src={service1} alt="service1" className="" />
                            </figure>
                            <div className="post-content">
                                <header className="entry-header">
                                    <h3 className="entry-title">
                                        <a href="#">hair salon</a>
                                    </h3>
                                </header>
                                <div className="entry-content">
                                    <a href="#" className="box-button"> read more</a>
                                </div>
                            </div>
                        </article>
                        <article className="post">
                            <figure className="featuerd-image">
                                <img src={service2} alt="service2" className="" />
                            </figure>
                            <div className="post-content">
                                <header className="entry-header">
                                    <h3 className="entry-title">
                                        <a href="#">welless spa</a>
                                    </h3>
                                </header>
                                <div className="entry-content">
                                    <a href="#" className="box-button"> read more</a>
                                </div>
                            </div>
                        </article>
                        <article className="post">
                            <figure className="featuerd-image">
                                <img src={service3} alt="service3" className="" />
                            </figure>
                            <div className="post-content">
                                <header className="entry-header">
                                    <h3 className="entry-title">
                                        <a href="#">physio therapy</a>
                                    </h3>
                                </header>
                                <div className="entry-content">
                                    <a href="#" className="box-button"> read more</a>
                                </div>
                            </div>
                        </article>
                        <article className="post">
                            <figure className="featuerd-image">
                                <img src={service4} alt="service4" className="" />
                            </figure>
                            <div className="post-content">
                                <header className="entry-header">
                                    <h3 className="entry-title">
                                        <a href="#">nail studio</a>
                                    </h3>
                                </header>
                                <div className="entry-content">
                                    <a href="#" className="box-button"> read more</a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section className="reservation-section" style={{background: "url(assets/img/reservation-bg.jpg)"}}>
                <div className="container">
                    <div className="reservation-content-wrapper">
                        <div className="reservation-content">
                            <header className="entry-header heading">
                                <h2 className="entry-title">
                                    <span>reservation </span> Book in Advance </h2>
                                <p>Please book in advance to get the best service from us. We wishing you a
                                            great day. Thanks!</p>
                            </header>
                            <p>Diam pharetra sociis quis per ad metus, pharetra libero, ac quis congue orci,
                                        quam inceptos pede enim est vitae tortor.</p>
                            <a href="#" className="box-button">book now</a>
                        </div>
                        <figure className="featured-image">
                            <img src={reservation1} alt="reservation1" className="" />
                        </figure>
                    </div>
                </div>
            </section>
            <section className="testimonial-section" style={{background: "url(assets/img/about-bg.png)"}}>
                <div className="container">
                    <div className="testimonial-section-wrapper">
                        <div className="counter-section">
                            <div className="counter-item-wrapper">
                                <div className="counter-item">
                                    <figure className="counter-icon">
                                        <img src={counterIcon1} alt="counter-icon1" className="" />
                                    </figure>
                                    <div className="count-detail">
                                        <span className="counter-value" data-count="640">0</span>
                                        <span className="counter-name">happy customer</span>
                                    </div>
                                </div>
                                <div className="counter-item">
                                    <figure className="counter-icon">
                                        <img src={counterIcon2} alt="counter-icon2" className="" />
                                    </figure>
                                    <div className="count-detail">
                                        <span className="counter-value" data-count="7">0</span>
                                        <span className="counter-name">our branches</span>
                                    </div>
                                </div>
                            </div>
                            <div className="counter-item-wrapper">
                                <div className="counter-item">
                                    <figure className="counter-icon">
                                        <img src={counterIcon3} alt="counter-icon3" className="" />
                                    </figure>
                                    <div className="count-detail">
                                        <span className="counter-value" data-count="35">0</span>
                                        <span className="counter-name">office member</span>
                                    </div>
                                </div>
                                <div className="counter-item">
                                    <figure className="counter-icon">
                                        <img src={counterIcon4} alt="counter-icon4" className="" />
                                    </figure>
                                    <div className="count-detail">
                                        <span className="counter-value" data-count="335">0</span>
                                        <span className="counter-name">repeated customer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-content-wrapper">
                            <header className="entry-header heading">
                                <h2 className="entry-title">
                                    <span>testimonials </span> Our Customers Riview </h2>
                                <p>A quisque, facilisis molestie a lacus quam elit. Nulla lacus conva lis.
                                Vivamus nulla at in eros mi, magna malesuada ut sed
                                            facilisis, metus proin.</p>
                            </header>
                            <div className="testimonial-slider">
                                <div className="testimonial-item">
                                    <div className="entry-content">
                                        <p>???Tincidunt dis. Tortor dignissim, velit in et blandit interdum dui
                                        vestibulum. Ut pede non, molestiae duis. Odio tortor vestibulum
                                                    nibh vel donec inei. Venen praesent non hymenaeos.???</p>
                                    </div>
                                    <div className="author-info-wrapper">
                                        <div className="author-info">
                                            <h3 className="author-name">Christina Doe</h3>
                                            <span className="author-designation">physio clents</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="entry-content">
                                        <p>??? Odio tortor vestibulum nibh vel donec inei. Venen praesent non
                                        hymenaeos. Tincidunt dis. Tortor dignissim, velit in et blandit
                                                    interdum dui vestibulum. Ut pede non, molestiae duis.???</p>
                                    </div>
                                    <div className="author-info-wrapper">
                                        <figure className="author-image">
                                            <img src={testi1} alt="testi1" className="" />
                                        </figure>
                                        <div className="author-info">
                                            <h3 className="author-name">katherine shea</h3>
                                            <span className="author-designation">body massage</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="entry-content">
                                        <p>???Velit in et blandit interdum dui
                                        vestibulum. Ut pede non, molestiae duis. Odio
                                        tortor vestibulum nibh vel donec inei. Venen praesent non
                                                    hymenaeos.???</p>
                                    </div>
                                    <div className="author-info-wrapper">
                                        <div className="author-info">
                                            <h3 className="author-name">john balt</h3>
                                            <span className="author-designation">physio clents</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="entry-content">
                                        <p>???Dignissim, velit in et blandit interdum dui
                                        vestibulum. Ut pede non, molestiae duis. Odio
                                        tortor vestibulum nibh vel donec inei. Venen praesent non
                                                    hymenaeos.???</p>
                                    </div>
                                    <div className="author-info-wrapper">
                                        <div className="author-info">
                                            <h3 className="author-name">suresh paudel</h3>
                                            <span className="author-designation">body pain</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features-section" style={{background: "url(assets/img/service-bg.png)"}}>
                <div className="container">
                    <header className="entry-header heading heading-center">
                        <h2 className="entry-title">
                            <span>features </span> Why Choose us</h2>
                        <p>Placerat ac, mauris non tristique laoreet libero, ut elementum ut lacus in vel amet,
                        dolor mauris ut lectus. Eu ut, vel laoreet
                        aliquam, diam amet, integer erat morbi tristique mauris pede, in rutrum suspendisse
                                    vel integer in etiam.</p>
                    </header>
                    <div className="features-content-wrapper">
                        <div className="features-post-wrapper">
                            <article className="post">
                                <span className="features-post-count"></span>
                                <div className="post-content">
                                    <header className="entry-header">
                                        <h3 className="entry-title">
                                            <a href="#">Friendly enviroment</a>
                                        </h3>
                                    </header>
                                    <div className="entry-content">
                                        <p>A quisque, facilisis molestie ae lacus quam elit. Nulla lacus un
                                        conva
                                                    lis lacus quam elit.</p>
                                    </div>
                                </div>
                            </article>
                            <article className="post">
                                <span className="features-post-count"></span>
                                <div className="post-content">
                                    <header className="entry-header">
                                        <h3 className="entry-title">
                                            <a href="#">Best specialties</a>
                                        </h3>
                                    </header>
                                    <div className="entry-content">
                                        <p>A quisque, facilisis molestie ae lacus quam elit. Nulla lacus un
                                        conva
                                        lis.
                                                </p>
                                    </div>
                                </div>
                            </article>
                            <article className="post">
                                <span className="features-post-count"></span>
                                <div className="post-content">
                                    <header className="entry-header">
                                        <h3 className="entry-title">
                                            <a href="#">reasonable price</a>
                                        </h3>
                                    </header>
                                    <div className="entry-content">
                                        <p>Ae lacus quam elit. Nulla lacus un conva A quisque, facilisis
                                        molestie
                                        lis.
                                                </p>
                                    </div>
                                </div>
                            </article>
                            <article className="post">
                                <span className="features-post-count"></span>
                                <div className="post-content">
                                    <header className="entry-header">
                                        <h3 className="entry-title">
                                            <a href="#">quality service</a>
                                        </h3>
                                    </header>
                                    <div className="entry-content">
                                        <p>Molestie ae lacus quisque, facilisis mquam elit lacus quisque. Nulla
                                        lacus un conva
                                        lis.
                                                </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <figure className="featured-image">
                            <img src={featuresImg} alt="features-img" className="" />
                        </figure>
                    </div>
                </div>
            </section>
            <section className="call-to-action">
                <div className="container">
                    <div className="discount-section">
                        <div className="discount-image">
                            <figure>
                                <img src={discountImg} alt="discount-img" className="" />
                            </figure>
                        </div>
                        <div className="discount-content">
                            <h3 className="discount-text"> <span className="discount-rate">50%</span>Discount</h3>
                            <h2 className="discount-title">on wellness spa</h2>
                            <p>A quisque, facilisis molestie a lacus quam elit. Nulla lacuses conva lis. Vivamus
                            nulla at in eros mi, magna malesuada ut
                                        sed facilisis, metus proin.</p>
                            <div className="discount-btn-wrapper">
                                <a href="#" className="box-button">book now</a>
                                <span>gift card</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-section" style={{background: "url(assets/img/about-bg.png)"}}>
                <div className="container">
                    <div className="team-section-wrapper">
                        <div className="team-content-wrapper">
                            <header className="entry-header heading">
                                <h2 className="entry-title">
                                    <span>Best Experts </span> Our Professional Team Members</h2>
                                <p>Hello. Our center has been present for over 20 years in the market. We make
                                            the most of all our customers.</p>
                            </header>
                            <p>A quisque, facilisis molestie a lacus quam elit. Nulla lacus conva lis. Vivamus
                            nulla at in eros mi, magna malesuada ut sed
                            facilisis, metus proin. Diam pharetra sociis quis per ad metus, pharetra qui
                            libero, ac quis congue orci, quam inceptos pede
                                        enim est vitae tortor.</p>
                            <p>Diam pharetra sociis quis per ad metus, pharetra libero, ac quis congue orci,
                                        quam inceptos pede enim est vitae tortor.</p>
                            <a href="#" className="box-button">View All Team Members</a>
                        </div>
                        <div className="team-item-wrapper">
                            <div className="team-item">
                                <div className="team-image-wrapper">
                                    <figure className="featured-image">
                                        <img src={team1} alt="team1" className="" />
                                    </figure>
                                </div>
                                <div className="team-content">
                                    <div className="team-content-info">
                                        <h6 className="author-designation">founder</h6>
                                        <h3 className="author-name"><a href="#">danish Doe</a> </h3>
                                    </div>
                                    <div className="inline-social-icons social-links">
                                        <ul>
                                            <li>
                                                <a href="https://facebook.com" title="facebook"
                                                    target="blank">facebook</a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com" title="twitter"
                                                    target="blank">twitter</a>
                                            </li>
                                            <li>
                                                <a href="https://youtube.com" title="youtube"
                                                    target="blank">youtube</a>
                                            </li>
                                            <li>
                                                <a href="https://instagram.com" title="instagram"
                                                    target="blank">instagram</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="team-item">
                                <div className="team-image-wrapper">
                                    <figure className="featured-image">
                                        <img src={team3} alt="team3" className="" />
                                    </figure>
                                </div>
                                <div className="team-content">
                                    <div className="team-content-info">
                                        <h6 className="author-designation">accountant</h6>
                                        <h3 className="author-name"><a href="#">roseline sam</a> </h3>
                                    </div>
                                    <div className="inline-social-icons social-links">
                                        <ul>
                                            <li>
                                                <a href="https://facebook.com" title="facebook"
                                                    target="blank">facebook</a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com" title="twitter"
                                                    target="blank">twitter</a>
                                            </li>
                                            <li>
                                                <a href="https://youtube.com" title="youtube"
                                                    target="blank">youtube</a>
                                            </li>
                                            <li>
                                                <a href="https://instagram.com" title="instagram"
                                                    target="blank">instagram</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="team-item">
                                <div className="team-image-wrapper">
                                    <figure className="featured-image">
                                        <img src={team4} alt="team4" className="" />
                                    </figure>
                                </div>
                                <div className="team-content">
                                    <div className="team-content-info">
                                        <h6 className="author-designation">manager</h6>
                                        <h3 className="author-name"><a href="#">jonathon lane</a> </h3>
                                    </div>
                                    <div className="inline-social-icons social-links">
                                        <ul>
                                            <li>
                                                <a href="https://facebook.com" title="facebook"
                                                    target="blank">facebook</a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com" title="twitter"
                                                    target="blank">twitter</a>
                                            </li>
                                            <li>
                                                <a href="https://youtube.com" title="youtube"
                                                    target="blank">youtube</a>
                                            </li>
                                            <li>
                                                <a href="https://instagram.com" title="instagram"
                                                    target="blank">instagram</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="team-item">
                                <div className="team-image-wrapper">
                                    <figure className="featured-image">
                                        <img src={team2} alt="team2" className="" />
                                    </figure>
                                </div>
                                <div className="team-content">
                                    <div className="team-content-info">
                                        <h6 className="author-designation">owner</h6>
                                        <h3 className="author-name"><a href="#">christina james</a> </h3>
                                    </div>
                                    <div className="inline-social-icons social-links">
                                        <ul>
                                            <li>
                                                <a href="https://facebook.com" title="facebook"
                                                    target="blank">facebook</a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com" title="twitter"
                                                    target="blank">twitter</a>
                                            </li>
                                            <li>
                                                <a href="https://youtube.com" title="youtube"
                                                    target="blank">youtube</a>
                                            </li>
                                            <li>
                                                <a href="https://instagram.com" title="instagram"
                                                    target="blank">instagram</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pricing-section" style={{background: "url(assets/img/about-bg.png)"}}>
                <div className="container">
                    <header className="entry-header heading heading-center">
                        <h2 className="entry-title">
                            <span>Best deals </span> Best Service with Good Price</h2>
                        <p>Placerat ac, mauris non tristique laoreet libero, ut elementum ut lacus in vel amet,
                        dolor mauris ut lectus. Eu ut, vel laoreet
                        aliquam, diam amet, integer erat morbi tristique mauris pede, in rutrum suspendisse
                                    vel integer in etiam.</p>
                        <figure className="featured-image">
                            <img src={headingImage} alt="heading-image" className="" />
                        </figure>
                    </header>
                    <div className="pricing-column-wrapper">
                        <div className="price-column ">
                            <div className="price-header">
                                <h3 className="pricing-title">Wellness Spa</h3>
                                <span className="price-number">$15.55 </span>
                                <figure className="featured-image">
                                    <img src={pricingImage} alt="pricing-image" className="" />
                                </figure>
                            </div>
                            <div className="price-table-content">
                                <div className="price-option-list">
                                    <p>A quisque, facilisis molestie ae lacus quam elit. Nulla lacus un conva
                                                lis.</p>
                                </div>
                            </div>
                            <a className="box-button" href="#"> book now </a>
                        </div>
                        <div className="price-column ">
                            <div className="price-header">
                                <span className="special-offer"> special-offer</span>
                                <h3 className="pricing-title">hair salon</h3>
                                <span className="price-number">$4.2 </span>
                                <figure className="featured-image">
                                    <img src={pricingImage} alt="pricing-image" className="" />
                                </figure>
                            </div>
                            <div className="price-table-content">
                                <div className="price-option-list">
                                    <p>A quisque, facilisis molestie ae lacus quam elit. Nulla lacus un conva
                                                lis.</p>
                                </div>
                            </div>
                            <a className="box-button" href="#"> book now </a>
                        </div>
                        <div className="price-column ">
                            <div className="price-header">
                                <h3 className="pricing-title">physio therapy</h3>
                                <span className="price-number">$22.4 </span>
                                <figure className="featured-image">
                                    <img src={pricingImage} alt="pricing-image" className="" />
                                </figure>
                            </div>
                            <div className="price-table-content">
                                <div className="price-option-list">
                                    <p>A quisque, facilisis molestie ae lacus quam elit. Nulla lacus un conva
                                    lis.
                                            </p>
                                </div>
                            </div>
                            <a className="box-button" href="#"> book now </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="products-section" style={{background: "url(assets/img/products-bg.jpg)"}}>
                <div className="container">
                    <div className="products-content-wrapper">
                        <header className="entry-header heading">
                            <h2 className="entry-title">
                                <span>shop </span>Our Best Products</h2>
                            <p>A quisque, facilisis molestie a lacus quam elit. Nulla lacus conva lis. Vivamus
                            nulla at in eros mi, magna malesuada ut sed
                                        facilisis, metus proin.</p>
                            <a href="#" className="box-button">view all products</a>
                        </header>
                        <div className="product-slider">
                            <div className="element-item">
                                <div className="product-list-wrapper">
                                    <div className="image-icon-wrapper">
                                        <figure className="featured-image">
                                            <a href="#">
                                                <img src={product1} alt="product1" className="" />
                                            </a>
                                        </figure>
                                    </div>
                                    <div className="list-info">
                                        <span className="price">
                                            <ins>
                                                <span className="woocommerce-Price-amount amount">
                                                    <span
                                                        className="woocommerce-Price-currencySymbol">??</span>12.00</span>
                                            </ins>
                                        </span>
                                        <header className="entry-header">
                                            <a href="#">
                                                <h3 className="entry-title">Rose Stem Repair
                                                Precious Oil
                                                        </h3>
                                            </a>
                                        </header>

                                        <a href="#" className="box-button">add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="element-item">
                                <div className="product-list-wrapper">
                                    <div className="image-icon-wrapper">
                                        <figure className="featured-image">
                                            <a href="#">
                                                <img src={product2} alt="product2" className="" />
                                            </a>
                                        </figure>
                                    </div>
                                    <div className="list-info">
                                        <span className="price">
                                            <ins>
                                                <span className="woocommerce-Price-amount amount">
                                                    <span
                                                        className="woocommerce-Price-currencySymbol">??</span>15.70</span>
                                            </ins>
                                        </span>
                                        <header className="entry-header">
                                            <a href="#">
                                                <h3 className="entry-title">Skin Care Rhubrb Nature Hyaluronic Serum
                                                        </h3>
                                            </a>
                                        </header>

                                        <a href="#" className="box-button">add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="element-item">
                                <div className="product-list-wrapper">
                                    <div className="image-icon-wrapper">
                                        <figure className="featured-image">
                                            <a href="#">
                                                <img src={product1} alt="product1" className="" />
                                            </a>
                                        </figure>
                                    </div>
                                    <div className="list-info">
                                        <span className="price">
                                            <ins>
                                                <span className="woocommerce-Price-amount amount">
                                                    <span
                                                        className="woocommerce-Price-currencySymbol">??</span>12.00</span>
                                            </ins>
                                        </span>
                                        <header className="entry-header">
                                            <a href="#">
                                                <h3 className="entry-title">Rose Stem Repair Precious Oil
                                                        </h3>
                                            </a>
                                        </header>

                                        <a href="#" className="box-button">add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="element-item">
                                <div className="product-list-wrapper">
                                    <div className="image-icon-wrapper">
                                        <figure className="featured-image">
                                            <a href="#">
                                                <img src={product2} alt="product2" className="" />
                                            </a>
                                        </figure>
                                    </div>
                                    <div className="list-info">
                                        <span className="price">
                                            <ins>
                                                <span className="woocommerce-Price-amount amount">
                                                    <span
                                                        className="woocommerce-Price-currencySymbol">??</span>15.70</span>
                                            </ins>
                                        </span>
                                        <header className="entry-header">
                                            <a href="#">
                                                <h3 className="entry-title">Skin Care Rhubrb Nature Hyaluronic Serum
                                                        </h3>
                                            </a>
                                        </header>

                                        <a href="#" className="box-button">add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="latest-post-section" style={{background: "url(assets/img/about-bg.png)"}}>
                <div className="container">
                    <header className="entry-header heading heading-center">
                        <h2 className="entry-title">
                            <span>Latest Updates </span>Our Tips and Tricks</h2>
                        <p>Placerat ac, mauris non tristique laoreet libero, ut elementum ut lacus in vel amet,
                        dolor mauris ut lectus. Eu ut, vel laoreet
                        aliquam, diam amet, integer erat morbi tristique mauris pede, in rutrum suspendisse
                                    vel integer in etiam.</p>
                    </header>
                    <div className="post-wrapper post-wrapper-has-three-child">
                        <article className="post">
                            <figure className="featuerd-image">
                                <img src={lpost1} alt="lpost1" className="" />
                            </figure>
                            <div className="post-content">
                                <header className="entry-header">
                                    <div className="entry-meta">
                                        <span className="cat-links">
                                            <a href="#">massage</a>
                                            <a href="#">oil</a>
                                        </span>
                                    </div>
                                    <h3 className="entry-title">
                                        <a href="#">Orci porttitor vivamus enim natus ut non</a>
                                    </h3>
                                </header>
                                <div className="entry-content">
                                    <a href="#" className="box-button"> read more</a>
                                </div>
                            </div>
                        </article>
                        <article className="post">
                            <figure className="featuerd-image">
                                <img src={lpost2} alt="lpost2" className="" />
                            </figure>
                            <div className="post-content">
                                <header className="entry-header">
                                    <div className="entry-meta">
                                        <span className="cat-links">
                                            <a href="#">massage</a>
                                            <a href="#">oil</a>
                                        </span>
                                    </div>
                                    <h3 className="entry-title">
                                        <a href="#">Orci porttitor vivamus enim natus ut non</a>
                                    </h3>
                                </header>
                                <div className="entry-content">
                                    <a href="#" className="box-button"> read more</a>
                                </div>
                            </div>
                        </article>
                        <article className="post">
                            <figure className="featuerd-image">
                                <img src={lpost3} alt="lpost3" className="" />
                            </figure>
                            <div className="post-content">
                                <header className="entry-header">
                                    <div className="entry-meta">
                                        <span className="cat-links">
                                            <a href="#">massage</a>
                                            <a href="#">oil</a>
                                        </span>
                                    </div>
                                    <h3 className="entry-title">
                                        <a href="#">Orci porttitor vivamus enim natus ut non</a>
                                    </h3>
                                </header>
                                <div className="entry-content">
                                    <a href="#" className="box-button"> read more</a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section className="partner-section">
                <div className="container">
                    <div className="partner-content-wrapper">
                        <header className="entry-header heading">
                            <h2 className="entry-title">
                                <span>partners </span>We Use Products of The best Brands Only</h2>
                        </header>

                        <div className="partner-slider">
                            <div className="partner-item">
                                <a href="#">
                                    <img src={partner1} alt="partner1" className="" />
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="#">
                                    <img src={partner2} alt="partner2" className="" />
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="#">
                                    <img src={partner3} alt="partner3" className="" />
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="#">
                                    <img src={partner4} alt="partner4" className="" />
                                </a>
                            </div>
                            <div className="partner-item">
                                <a href="#">
                                    <img src={partner3} alt="partner3" className="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="back-to-top">
                <button href="#masthead" title="Go to Top" className="fa-angle-up"></button>
            </div>

               {/* <!-- jQuery library  --> */}
    <ScriptTag src="assets/js/jquery.js" />

{/* <!-- slick  jquery plguin --> */}
<ScriptTag src="assets/js/slick.js" />

{/* <!-- jquery.meanmenu for responsive menu --> */}
<ScriptTag src="assets/js/jquery.meanmenu.js" />

{/* <!--ResizeSensor for to support sticky sidebar--> */}
<ScriptTag src="assets/js/ResizeSensor.js" />

{/* <!--theia-sticky-sidebar for sticky sidebar--> */}
<ScriptTag src="assets/js/theia-sticky-sidebar.js" />
<ScriptTag src="assets/js/jquery.countdown.js" />

{/* <!-- Custom script --> */}
<ScriptTag src="assets/js/custom.js" />

        </>
    )
}
export default Homepage
