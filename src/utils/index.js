import checkPropTypes from "check-prop-types";

export const findByTestAttr = ( comp, attr ) =>
{
    const wrapper = comp.find( `[data-test="${ attr }"]` );

    return wrapper;

};

export const checkProps = ( component, expectedProps ) =>
{
    const propsErr = checkPropTypes( component.propTypes, expectedProps, "props", component.name, null );

    return propsErr;
};
