import m from 'mithril';

//--- Types -----

interface AttrTypes {
    isOpen: boolean,
    icon?: string,
    title?: string,
    cssclass?: string,
}

interface StateTypes {
    isOpen: boolean,
}

//--- Funktionen -----

export const closeOnEsc = (state: StateTypes, e: KeyboardEvent) => {
    if(e?.keyCode === 27) {
        state.isOpen = false;
        m.redraw();
    }
};

export const Dropdown: m.Component<AttrTypes> = {

    oninit({attrs, state}: m.Vnode<AttrTypes, StateTypes>) {
        state.isOpen = attrs.isOpen || false;
        document.body.addEventListener('keydown', e => {
            closeOnEsc(state, e);
        });
    },

    view(v: m.Vnode<AttrTypes, StateTypes>) {
        const {isOpen} = v.state as StateTypes;
        const {title, icon, cssclass} = v.attrs as AttrTypes;
        const children = v.children as m.ChildArray;

        return(
            <article class={`dropdown ${isOpen ? 'dropdown--open':''} ${cssclass || ''}`}>
                <a href="javascript:" onclick={() => v.state.isOpen=!isOpen}>
                    {icon ? <i class={`fas ${icon} mr1`} aria-hidden="true"></i> : ''} {title || ''}
                </a>
                <div class="dropdown-items">
                    {children.map((content: any, index: number) => {
                        return (
                            <div key={`item-${index}`} class={`dropdown-item dropdown-item-${index}`}
                                onclick={() => {v.state.isOpen = !isOpen}}>
                                { content }
                            </div>
                        );
                    })}
                </div>
            </article>
        );
    }
}

export default Dropdown;