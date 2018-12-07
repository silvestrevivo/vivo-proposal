import React from 'react'
import Link from 'next/link';
import Router from 'next/router';

Router.onRouteChangeStart = () => {
  console.log('onRouteChangeStart triggered')
  // here starts the animation = transition
}
Router.onRouteChangeComplete = () => {
  console.log('onRouteChangeComplete triggered')
  // here finishs the animation = transition
}
Router.onRouteChangeError = () => {
  console.log('onRouteChangeError triggered')
}

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link href="/index">
        <a>Home</a>
      </Link>
    </div>
  )
}

export default About
