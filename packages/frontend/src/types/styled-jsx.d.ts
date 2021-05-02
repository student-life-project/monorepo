/* eslint-disable */
/// <reference path="react.d.ts" />
import 'react';
// Augmentation of React
declare module 'react' {
  interface HTMLProps<T> {
    jsx?: boolean;
    global?: boolean;
  }

  interface StyleHTMLAttributes<HTMLStyleElement> {
    jsx?: boolean;
    global?: boolean;
  }
}
