document.addEventListener('DOMContentLoaded', () => {
    let sections = document.querySelectorAll('.sortable');

    function updatePlaceholders() {
        sections.forEach(section => {
            let placeholder = section.querySelector('.empty-placeholder');
            let cards = section.querySelectorAll('.card');
            if (cards.length === 0) {
                placeholder.style.display = 'none';
            } else {
                placeholder.style.display = 'none';
            }
        });
    }

    sections.forEach(section => {
        new Sortable(section, {
            group: 'shared',
            animation: 150,
            ghostClass: 'sortable-ghost',
            onAdd: function (evt) {
                updatePlaceholders();
            },
            onRemove: function (evt) {
                updatePlaceholders();
            },
            onEnd: function (evt) {
                let itemEl = evt.item;
                let newIndex = evt.newIndex;
                let oldIndex = evt.oldIndex;
                let cardId = itemEl.getAttribute('data-id');
                let data = {
                    cardId: cardId,
                    newIndex: newIndex,
                    oldIndex: oldIndex,
                    newSection: evt.to.getAttribute('id'),
                    oldSection: evt.from.getAttribute('id')
                };

                $.ajax({
                    url: '/api/cards/move',
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(data),
                    success: function (response) {
                        console.log('Card moved successfully:', response);
                        updatePlaceholders();
                    },
                    error: function (xhr, status, error) {
                        console.error('Error moving card:', error);
                    }
                });
            }
        });
    });

    updatePlaceholders();
});
