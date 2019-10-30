global.m = require('mithril');
const mq = require("mithril-query");
const test = require("ospec");

test.spec('Dropdown', () => {
    const DropdownView = require('../test/dropdown.view.js');
    const el1 = m('div.div1');
    const el2 = m('div.div2');
    const el3 = m('a.a1');

    const vnode = m(DropdownView, { title: 'Optionen', isOpen: true }, [ el1, el2, el3 ]);
    const Dropdown = mq(m(DropdownView, { title: 'Optionen' }, [ el1, el2, el3 ]));
    const Dropdown2 = mq(vnode);

    test('should initialize correctly', () => {
        test(Dropdown.should.not.have('.dropdown--open')).equals(true);
        test(Dropdown2.should.have('.dropdown--open')).equals(true);
        // 3 Elemente hinzugefügt
        test(Dropdown.find('.dropdown-item').length).equals(3);
    });

    test('should show/use node attrs as expected', () => {
        const Dropdown = mq(m(DropdownView, { title: 'Optionen', icon: 'fas-arrow-down' }, [ el1, el2, el3 ]));
        test(Dropdown.should.contain('Optionen')).equals(true);
        test(Dropdown.should.have('.fas-arrow-down')).equals(true);
    });

    test('should open & close on mouse click', () => {
        Dropdown.click('.dropdown-item-1');
        Dropdown2.click('.dropdown-item-0');
        test(Dropdown.should.have('.dropdown--open')).equals(true);
        test(Dropdown2.should.not.have('.dropdown--open')).equals(true);

        Dropdown2.click('a');
        test(Dropdown2.should.have('.dropdown--open')).equals(true);
    });

    test('should close on escape keydown', () => {
        vnode.instance.closeOnEsc(vnode, { keyCode: 27 });
        Dropdown2.redraw();
        test(Dropdown2.should.not.have('.dropdown--open')).equals(true);
    });
});
