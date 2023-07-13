#!/usr/bin/node

exports.esrever = function (list) {
  const listLen = list.length;
  const newList = [];

  for (let i = listLen - 1; i >= 0; i--) {
    newList.push(list[i]);
  }

  return newList;
};
