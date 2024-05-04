import React from "react";
import { Row, Col } from "antd";

const SupportDetails = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(206, 219, 242, 0.9)", // Adjust the opacity
        backdropFilter: "blur(10px)", // Add a blur effect to the background
        padding: "20px",
        borderRadius: "8px",
        margin: "40px 0",
        width: "170%", // Adjust the width
        marginLeft: "-38%",
        marginRight: "-38%",
      }}
    >
      <Row justify="center" id="user-login">
        <Col span={20}>
          <h2 style={{ textAlign: "left" }}>User Login</h2>
          <p style={{ textAlign: "left" }}>
            • When you engage with our online shopping mall, your journey begins
            with a seamless user login process designed with your convenience
            and security in mind.
            <br />
            
            • Here's what you need to know:
            <br />
            • Accessing Your Account: Simply visit our website or open our app to start your
            shopping adventure. You'll be prompted to log in, providing you
            access to a world of products and personalized features tailored
            just for you.
            <br />
            • Secure Authentication: Your security is our priority.
            Enter your credentials, such as your username or email address,
            along with your password to verify your identity. For added
            protection, consider enabling two-factor authentication (2FA) for an
            extra layer of security.
            <br />
            • Tailored Experience: Once logged in, you
            unlock a treasure trove of personalized benefits. From saved
            addresses and payment methods to your order history, everything is
            tailored to make your shopping experience smooth and enjoyable. We
            take every measure to ensure your data is encrypted and safeguarded
            against any unauthorized access. Your trust is our greatest asset,
            and we're committed to providing you with a secure and delightful
            shopping experience every time you log in.
          </p>
        </Col>
      </Row>
      <Row justify="center" id="my-account">
        <Col span={20}>
          <h2 style={{ textAlign: "left" }}>My Account</h2>
          <p style={{ textAlign: "left" }}>
            • When you navigate to the "My Account" section of our online shopping
            mall, you're stepping into your personalized hub of convenience and
            control.
            <br />
            • Here's what awaits you:
            <br />
            • Personal Information Management:
            Update your details effortlessly. Whether it's your shipping
            address, contact information, or payment preferences, manage it all
            from one central location.
            <br />
            • Order Tracking: Keep tabs on your
            purchases with ease. Track your orders, view order history, and stay
            informed about the status of your deliveries.
            <br />
            • Wishlist and
            Favorites: Curate your shopping experience by saving items to your
            wishlist or marking products as favorites. Never lose sight of items
            you love, and easily revisit them whenever you're ready to make a
            purchase.
            <br />
            • Your account isn't just a place to log in; it's your
            gateway to a tailored shopping journey designed to make your
            experience seamless and enjoyable.
          </p>
        </Col>
      </Row>
      <Row justify="center" id="security">
        <Col span={20}>
          <h2 style={{ textAlign: "left" }}>Security</h2>
          <p style={{ textAlign: "left" }}>
            • Security is paramount in our online shopping mall. We've implemented
            robust measures to safeguard your sensitive information and provide
            you with peace of mind:
            <br />
            • Secure Authentication: Protect your account
            with a strong password and consider enabling two-factor
            authentication (2FA) for an extra layer of security.
            <br />
            • Encrypted
            Transactions: Every interaction you have with our platform is
            encrypted, ensuring that your payment information and personal
            details remain confidential.
            <br />
            • Continuous Monitoring: Our security
            team is constantly monitoring for suspicious activity, proactively
            thwarting any attempts at unauthorized access. Rest assured that
            when you shop with us, your security is our top priority.
          </p>
        </Col>
      </Row>
      <Row justify="center" id="e-commerce">
        <Col span={20}>
          <h2 style={{ textAlign: "left" }}>E-commerce</h2>
          <p style={{ textAlign: "left" }}>
            • Our online shopping mall is more than just a place to shop; it's a
            vibrant e-commerce ecosystem where convenience meets choice.
            <br />
            • Here's what sets us apart:
            <br />
            • Vast Product Selection: Explore a vast array of
            products from leading brands and emerging designers, all
            conveniently categorized for easy navigation.
            <br />
            • Seamless Checkout:
            Experience hassle-free checkout with multiple payment options and
            fast, reliable shipping methods.
            <br />
            • Customer Support: Have questions or
            need assistance? Our dedicated customer support team is here to
            help, ensuring a smooth and satisfying shopping experience from
            start to finish. Welcome to the world of e-commerce redefined, where
            every click brings you closer to discovering something
            extraordinary.
          </p>
        </Col>
      </Row>
      <Row justify="center" id="customization">
        <Col span={20}>
          <h2 style={{ textAlign: "left" }}>Customization</h2>
          <p style={{ textAlign: "left" }}>
            • At our online shopping mall, customization is key to creating a
            shopping experience that's uniquely yours.
            <br />
            • Here's how we tailor your
            journey:
            <br />
            • Personalized Recommendations: Discover new favorites
            tailored to your tastes and preferences with our intelligent
            recommendation engine.
            <br />
            • Flexible Settings: Customize your account
            settings to suit your preferences, from communication preferences to
            display options.
            <br />
            • Exclusive Offers and Promotions: Enjoy special
            discounts and promotions curated just for you based on your shopping
            history and interests. With customization at the forefront, every
            visit to our online shopping mall is an opportunity to uncover
            something tailored specifically to you.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default SupportDetails;
