export const findByTestAttr = ( comp, attr ) =>
{
    const wrapper = comp.find( `[data-test="${ attr }"]` );

    return wrapper;

};
