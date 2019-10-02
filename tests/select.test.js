global.m = require('mithril');
const mq = require("mithril-query");
const test = require("ospec");

test.spec('Select', () => {
    const SelectView = require('../test/select.view.js');
    const el1 = m('div.div1');
    const el2 = m('div.div2');
    const el3 = m('a.a1');

    const vnode = m(SelectView, { title: 'Optionen', isOpen: true }, [ el1, el2, el3 ]);
    const Select = mq(m(SelectView, { title: 'Optionen' }, [ el1, el2, el3 ]));
    const Select2 = mq(vnode);

    test('should initialize correctly', () => {
        test(Select.should.not.have('.select--open')).equals(true);
        test(Select2.should.have('.select--open')).equals(true);
        // 3 Elemente hinzugefügt
        test(Select.find('.select-item').length).equals(3);
    });

    test('should show/use node attrs as expected', () => {
        const Select = mq(m(SelectView, { title: 'Optionen', icon: 'fas-arrow-down' }, [ el1, el2, el3 ]));
        test(Select.should.contain('Optionen')).equals(true);
        test(Select.should.have('.fas-arrow-down')).equals(true);
    });

    test('should open & close on mouse click', () => {
        Select.click('.select-item-1');
        Select2.click('.select-item-0');
        test(Select.should.have('.select--open')).equals(true);
        test(Select2.should.not.have('.select--open')).equals(true);

        Select2.click('a');
        test(Select2.should.have('.select--open')).equals(true);
    });

    test('should close on escape keydown', () => {
        vnode.instance.closeOnEsc(vnode, { keyCode: 27 });
        Select2.redraw();
        test(Select2.should.not.have('.select--open')).equals(true);
    });
});
