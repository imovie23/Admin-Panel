import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Header from './index'
import '../../setupTest'

describe('Header', () => {
	it('should render correctly Travis CI', () => {
		const output = shallow(<Header />);
		expect(shallowToJson(output)).toMatchSnapshot()
	})
});
