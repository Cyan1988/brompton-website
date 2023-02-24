import React from "react";
import { Button, ConfigProvider, Result } from "antd";
import { Link } from "react-router-dom";

const checkoutPage = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "gray",
      },
    }}
  >
    <Result
      status="success"
      title="Thank You for Purchasing!"
      subTitle="We wish you a happy life and look forward to your next visit!"
      extra={[
        <Button>
          <Link to="/">Go Home</Link>
        </Button>,
        <Button>
          <Link to="/shop">Buy Again</Link>
        </Button>,
      ]}
    />
  </ConfigProvider>
);
export default checkoutPage;
