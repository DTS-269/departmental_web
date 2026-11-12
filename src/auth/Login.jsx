import React from "react";
import Eyebrow from "../landing/components/Eyebrow";
import Arrow from "../landing/components/Arrow";
import PageIntro from "../landing/components/PageIntro";
import "../App.css";

const Login = () => {
  return (
    <main className="page-main admin-page">
      <PageIntro
        eyebrow="Administration"
        title={
          <>
            Welcome back
            <br />
            <span>to your workspace.</span>
          </>
        }
        description="Sign in to manage department news, projects, events, business ads, staff, and student executives."
      />
      <section className="admin-login-panel">
        <div className="admin-notice">
          <span aria-hidden="true">ⓘ</span>
          <p>
            <strong>Temporary frontend sign-in:</strong> Backend authentication
            is not connected yet. Any non-empty email and password will open
            this local preview; this does not protect the dashboard.
          </p>
        </div>
        <form className="admin-login-form">
          <div className="admin-login-heading">
            <Eyebrow>Admin area</Eyebrow>
            <h2>Sign in</h2>
          </div>
          <label htmlFor="admin-email">Email address</label>
          <input
            id="admin-email"
            name="email"
            type="email"
            autoComplete="username"
            placeholder="you@department.edu"
            required
          />
          <label htmlFor="admin-password">Password</label>
          <input
            id="admin-password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            required
          />
          <button
            className="button button-primary admin-login-submit"
            type="submit"
          >
            Continue to dashboard <Arrow />
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
