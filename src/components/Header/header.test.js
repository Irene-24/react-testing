import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils";
import Header from "./index";

const setUp = ( props = {} ) =>
{
    const comp = shallow( <Header { ...props } /> );
    return comp;
};

describe( "Header component", () => 
{
    let comp;
    beforeAll( () => 
    {
        comp = setUp();
    } );

    it( "Should render header without error", () =>
    {
        const wrapper = findByTestAttr( comp, "header" );

        expect( wrapper.length ).toBe( 1 );
    } );

    it( "Should render logo without error", () =>
    {
        const wrapper = findByTestAttr( comp, "img" );

        expect( wrapper.length ).toBe( 1 );
    } );

}
);
