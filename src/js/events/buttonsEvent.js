const allButtons = document.querySelectorAll('.sectionButton')

const closeAllWindows = (sectionSelected) => {
    allButtons.forEach(btn => {
        const sectionId = btn.dataset;
        const section = document.getElementById(sectionId.section);

        if ((sectionSelected != sectionId) && _hasClassName('sectionContentShow', section)) {
            _removeClassName('sectionContentShow', section)
            _addClassName('sectionContentHide', section)
        }
        _removeClassName('selected', btn)
    });
}

const btnClickHandler = (event) => {
    const sectionId = event.target.dataset;
    const btn = event.target;
    const section = document.getElementById(sectionId.section)

    closeAllWindows(sectionId);

    if (_hasClassName('sectionContentShow', section)) {
        _removeClassName('sectionContentShow', section)
        _addClassName('sectionContentHide', section)
        _removeClassName('selected', btn)
    } else {
        _addClassName('selected', btn)
        _addClassName('sectionContentShow', section)
        _removeClassName('sectionContentHide', section)
    }
}


const setEventsToButtons = () => {
    allButtons.forEach(button => {
        button.addEventListener('click', btnClickHandler);
    })
}

setEventsToButtons()