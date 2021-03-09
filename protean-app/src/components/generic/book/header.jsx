import React from 'react';

export function Header1({css, children}) {
  return (
    <h1 className={css}>
      {children}
    </h1>
  );
}

export function Header2({ css, children }) {
  return (
    <h2 className={css}>
      {children}
    </h2>
  );
}

export function Header3({ css, children }) {
  return (
    <h3 className={css}>
      {children}
    </h3>
  );
}

export function Header4({ css, children }) {
  return (
    <h4 className={css}>
      {children}
    </h4>
  );
}

export function Header5({ css, children }) {
  return (
    <h5 className={css}>
      {children}
    </h5>
  );
}

export function Header6({ css, children }) {
  return (
    <h6 className={css}>
      {children}
    </h6>
  );
}

Header1.defaultProps = {
  css: "leading-10 text-5xl font-bold",
}

Header2.defaultProps = {
  css: "leading-9 text-3xl font-semibold",
}

Header3.defaultProps = {
  css: "leading-7 text-xl font-semibold",
}

Header4.defaultProps = {
  css: "leading-6 text-base font-semibold",
}

Header5.defaultProps = {
  css: "leading-5 text-sm font-medium",
}

Header6.defaultProps = {
  css: "leading-4 text-xs font-medium",
}