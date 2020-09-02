import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestAttr } from "../../utils/";

const setUp = ( props = {} ) =>
{
    const comp = shallow( <Headline { ...props } /> );
    return comp;
};

describe( "Headline component", () =>
{
    describe( 'Have props', () =>
    {
        let wrapper;
        beforeAll( () => 
        {
            const props =
            {
                header: "Testing",
                desc: "Testing description"
            };

            wrapper = setUp( props );
        } );

        it( "should render header w/o errors", () =>
        {
            const h1 = findByTestAttr( wrapper, "header" );
            expect( h1.length ).toBe( 1 );
            expect( h1.text() ).toEqual( 'Testing' );
        } );

        it( "should render desc w/o errors", () =>
        {
            const p = findByTestAttr( wrapper, "desc" );
            expect( p.length ).toBe( 1 );
            expect( p.text() ).toEqual( 'Testing description' );
        } );

    } );

    describe( 'No props', () =>
    {
        let wrapper;
        beforeAll( () => 
        {
            wrapper = setUp();
        } );

        it( "should not render header w/o errors", () =>
        {
            const comp = findByTestAttr( wrapper, "headline" );
            expect( comp.length ).toBe( 0 );
        } );

    } );


} );
