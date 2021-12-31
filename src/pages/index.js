import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageResources from '../components/HomepageResources';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="pt-15 pb-15 ">
      <div className="container text-center py-20 md:py-30">
        <h1 className="text-3xl md:text-6xl tracking-wide capitalize">{siteConfig.title}</h1>
        <p className="text-xl">{siteConfig.tagline}</p>
        <div className="mt-10">
          <div className="home-buttons flex justify-center space-x-3">
            <div className="bg-primary hover:bg-btnHover py-2 px-5 rounded-md text-white hover:text-white font-semibold">
              <Link
                to="/docs/getting-started">
                Get started
              </Link>
            </div>
            <div className="bg-white py-2 px-5 rounded-md font-semibold">
              <Link
                to="https://demo.nodejscart.com">
                Try the live demo
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <a href="https://github.com/nodeonline/nodejscart" target="_blank"><svg className="text-text" style={{ width: "20px", height: "20px" }} viewBox="0 0 17 16" fill="none"><g clipPath="url(githublogo)"><path fill="currentColor" fillRule="evenodd" d="M8.18391.249268C3.82241.249268.253906 3.81777.253906 8.17927c0 3.46933 2.279874 6.44313 5.451874 7.53353.3965.0991.49563-.1983.49563-.3965v-1.3878c-2.18075.4956-2.67638-.9912-2.67638-.9912-.3965-.8922-.89212-1.1895-.89212-1.1895-.69388-.4957.09912-.4957.09912-.4957.793.0992 1.1895.793 1.1895.793.69388 1.2887 1.88338.8922 2.27988.6939.09912-.4956.29737-.8921.49562-1.0904-1.78425-.1982-3.5685-.8921-3.5685-3.96496 0-.89212.29738-1.586.793-2.08162-.09912-.19825-.3965-.99125.09913-2.08163 0 0 .69387-.19825 2.18075.793.59475-.19825 1.28862-.29737 1.9825-.29737.69387 0 1.38775.09912 1.98249.29737 1.4869-.99125 2.1808-.793 2.1808-.793.3965 1.09038.1982 1.88338.0991 2.08163.4956.59475.793 1.28862.793 2.08162 0 3.07286-1.8834 3.66766-3.66764 3.86586.29737.3965.59474.8921.59474 1.586v2.1808c0 .1982.0991.4956.5948.3965 3.172-1.0904 5.4518-4.0642 5.4518-7.53353-.0991-4.3615-3.6676-7.930002-8.02909-7.930002z" clipRule="evenodd"></path></g><defs><clipPath id="githublogo"><path fill="transparent" d="M0 0h15.86v15.86H0z" transform="translate(.253906 .0493164)"></path></clipPath></defs></svg></a>
          </div>
        </div>
      </div>
    </header >
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`NodeJs Cart | ${siteConfig.title}`}
      description="An Ecommerce platform using React">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageResources />
      </main>
    </Layout>
  );
}
