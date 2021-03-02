import React from 'react';

export default function Car ({ name, prodYear, price }) {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("h2", {}, prodYear),
    React.createElement("h2", {}, price),
  ]);
};
