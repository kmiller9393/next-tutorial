import React, { Component } from 'react';
import Link from 'next/link';

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <div>
          <Link href="/">
            <a title="Our API">Home</a>
          </Link>
          <Link href="/about">
            <a title="About NextJS">About NextJS</a>
          </Link>
        </div>
      </nav>
    );
  }
}
