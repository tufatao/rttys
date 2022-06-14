const _default = function() {

    let $zoho = {}
    $zoho = {
        salesiq: {
            widgetcode: '7b2c91fe96cef85c7fac18be0ae2edab9fe8201a0ec90485256b1a2d8223af76b6fe7662e70a2efd0a3d0d42589d16a3',
            values: {},
            ready: function() {}
        }
    };
    // $zoho.salesiq = {
    //     widgetcode: '7b2c91fe96cef85c7fac18be0ae2edab9fe8201a0ec90485256b1a2d8223af76b6fe7662e70a2efd0a3d0d42589d16a3',
    //     values: {},
    //     ready: function() {}
    // };
    let d = document;
    const s = d.createElement('script');
    s.type = 'text/javascript';
    s.id = 'zsiqscript';
    s.defer = true;
    s.src = 'https://salesiq.zoho.com/widget?plugin_source=wordpress';
    const t = d.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);

    $zoho.salesiq.internalready = function() {
        // $zoho.salesiq.floatbutton.visible('hide');
    };
};
export { _default as default };