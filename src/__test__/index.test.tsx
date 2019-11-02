import React from 'react';
import WaterMark from '../index';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe(`<WaterMark />`, () => {
  const wrapper = shallow(<WaterMark />);
  it('1. 包含一个p标签', () => {
    expect(wrapper.find('p').length).toBe(1);
  });

  it('2. 一个header的class为App-header', () => {
    expect(wrapper.find('header').hasClass('App-header')).toBeTruthy();
  });
});

// 当希望确保UI不会意外更改时，则可以使用snapshot来进行对比，如果快照不匹配，则会报错
describe(`测试<WaterMark />快照`, () => {
  const tree = shallow(<WaterMark />);
  it('1. 匹配快照', () => {
    expect(toJson(tree)).toMatchSnapshot();
  });
});
