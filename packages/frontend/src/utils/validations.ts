/* eslint-disable no-useless-escape */

export const rgxEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

export const rgxPassword =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/;

export const rgxPrice = /^[0-9]+([.])?([0-9]+)?$/;

export const rgxNumber = /^\d+$/;
