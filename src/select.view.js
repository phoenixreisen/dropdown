const Select = {

    oninit(v) {
        const { isOpen } = v.attrs;
        v.state.isOpen = isOpen || false;
        document.body.addEventListener('keydown', (e) => {
            Select.closeOnEsc(v, e);
        });
    },

    closeOnEsc: (v, e) => {
        if(e && e.keyCode === 27) {
            v.state.isOpen = false;
            m.redraw();
        }
    },

    view(v) {
        const { isOpen } = v.state;
        const { title, icon, cssclass } = v.attrs;

        return(
            <article class={`select ${isOpen ? 'select--open':''} ${cssclass || ''}`}>
                <a href="javascript:" onclick={() => { v.state.isOpen=!isOpen; }}>
                    {icon ? <i class={`fas ${icon} mr1`} aria-hidden="true"></i> : ''} {title || ''}
                </a>
                <div class="select-items">
                    { v.children.map((content, index) => {
                        return (
                            <div key={`item-${index}`} class={`select-item select-item-${index}`}
                                onclick={() => { v.state.isOpen = !isOpen; }}>
                                { content }
                            </div>
                        );
                    })}
                </div>
            </article>
        );
    }
}

if(typeof module !== 'undefined') {
    module.exports = Select;
}