document.addEventListener('DOMContentLoaded', (event) => {
    let sections = document.querySelectorAll('.sortable');

    function updatePlaceholders() {
        sections.forEach((section) => {
            let placeholder = section.querySelector('.empty-placeholder');
            let cards = section.querySelectorAll('.card');
            if (cards.length === 0) {
                placeholder.style.display = 'block';
            } else {
                placeholder.style.display = 'none';
            }
        });
    }

    sections.forEach((section) => {
        new Sortable(section, {
            group: 'shared', // Enable drag-and-drop between sections
            animation: 150,
            emptyInsertThreshold: 5, // Make the area larger to improve drop capability in empty lists
            onEnd: function (evt) {
                let itemEl = evt.item; // dragged HTMLElement
                let newIndex = evt.newIndex; // new index within parent
                let oldIndex = evt.oldIndex; // old index within parent

                // Get the card ID from the data attribute
                let cardId = itemEl.getAttribute('data-id');

                // Prepare the data to be sent to the backend
                let data = {
                    cardId: cardId,
                    newIndex: newIndex,
                    oldIndex: oldIndex,
                    newSection: evt.to.getAttribute('id'),
                    oldSection: evt.from.getAttribute('id')
                };

                // Make an API call to notify the backend
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

    // Initial check for placeholders
    updatePlaceholders();
});
