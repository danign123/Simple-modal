

const modal = (body) => {
    return `<div tabindex="10" class="modal">
    <p class="modal-title ${body.type || 'info'}">
        <i class="modal-title-icon" data-feather="${body.modal_icon || 'info'}"></i>
        ${body.title || "Information"}
    </p>
    <p class="modal-description">
        ${body.description || "Twój koszyk został zaaktualizowany"}
    </p>
    <div class="modal-buttons">
        <button class="modal-accept modal-action-btn">${body.accept_btn || "Ok"}</button>
        <button class="modal-decline modal-action-btn">${body.decline_btn || "Anuluj"}</button>
    </div>
    <button class="modal-close-icon"><i data-feather="x"></i></button>
    </div>`
}

const createModal = (value) => {
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    modalContainer.innerHTML = modal(value);
    document.body.appendChild(modalContainer);

    const closeIcon = 
        document.querySelector('.modal-close-icon');
        closeIcon.addEventListener('click', () => {
            const modal = document.querySelector('.modal-container');
            modal.remove();
            document.body.style.overflow = 'auto';
        });

    const closeButtons =
        document.querySelectorAll('.modal-action-btn');
        closeButtons.forEach((btn) => 
            btn.addEventListener('click', () => {
                const modal = document.querySelector('.modal-container');
                modal.remove();
                document.body.style.overflow = 'auto';
            }));

    const modalActive = 
        document.querySelector('.modal');
        modalActive.focus();
        modalActive.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const modal = document.querySelector('.modal-container');
                modal.remove();
                document.body.style.overflow = 'auto';
            }
        });

    const modalActiveContainer = 
        document.querySelector('.modal-container');
        modalActiveContainer.addEventListener('click', (e) => {
            if (e.target === modalActiveContainer) {
                modalActiveContainer.remove();
                document.body.style.overflow = 'auto';
            }
        });

    feather.replace();
    document.body.style.overflow = 'hidden';
};

const addToBasket = 
    document.querySelector('.action-btn');
    addToBasket.addEventListener('click', () => {    
        createModal({ 
        type: "warning",
        modal_icon: "alert-circle",
        title: "Warning!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        accept_btn: "Ok",
        decline_btn: "Anuluj"
        });
        console.log('Dodano do koszyka!');
    });
    
const actionTwoBtn = 
    document.querySelector('.action-two-btn');
    actionTwoBtn.addEventListener('click', () => {
        createModal({ 
            type: "success",
            modal_icon: "check-circle",
            title: "Success!",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            accept_btn: "Ok",
            decline_btn: "Anuluj"
        });
    });

const actionThreeBtn = 
    document.querySelector('.action-three-btn');
    actionThreeBtn.addEventListener('click', () => {
        createModal({});
    });








    
