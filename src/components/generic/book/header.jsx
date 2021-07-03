import React from 'react';

export function Header1({css, children}) {
  return (
    <h1 className={css} id={children}>
      {children}
    </h1>
  );
}

export function Header2({ css, children }) {
  return (
    <h2 className={css} id={children}>
      {children}
    </h2>
  );
}

export function Header3({ css, children }) {
  return (
    <h3 className={css} id={children}>
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

export function Subtitle({ css, children }) {
  return (
    <p className={css}>
      {children}
    </p>
  );
}

Header1.defaultProps = {
  css: "col-span mb-5 leading-none text-7xl tracking-tighter font-bold text-important",
}

Header2.defaultProps = {
  css: "col-span mt-8 mb-5 leading-none text-3xl font-semibold text-important",
}

Header3.defaultProps = {
  css: "col-span mt-8 mb-3 leading-normal text-xl font-semibold text-important",
}

Header4.defaultProps = {
  css: "mb-5 leading-normal text-base font-semibold text-important",
}

Header5.defaultProps = {
  css: "mb-5 leading-normal text-sm font-medium text-important",
}

Header6.defaultProps = {
  css: "mb-5 leading-normal text-xs font-medium text-important",
}

Subtitle.defaultProps = {
  css: "-mb-8 text-base font-extrabold uppercase mono text-important",
}