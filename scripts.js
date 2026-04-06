///////////////////////////////////////////////////////////////////////////////
////////////////////////// KOPIOWANIE TREŚCI DO SCHOWKA ///////////////////////
///////////////////////////////////////////////////////////////////////////////

document.addEventListener('click', (e) => {
    console.log('Klik!', e.target);

    const btn = e.target.closest('.btn-copy');
    if (!btn) {
        console.log('Brak .btn-copy');
        return;
    }

    console.log('Znaleziono button');

    const module = btn.closest('.copy-module');
    if (!module) {
        console.error('Brak .copy-module');
        return;
    }

    console.log('Znaleziono moduł');

    const selector = btn.dataset.copyTarget || module.dataset.copyTarget || '.tekst';
    console.log('Selector:', selector);

    const target = module.querySelector(selector);
    if (!target) {
        console.error('Nie znaleziono targetu');
        return;
    }

    console.log('Target OK:', target);

    let content = target.innerHTML;
    content = convertToEntities(content);
    copyToClipboard(content);
});


function copyToClipboard(text) {
    console.log('Próba kopiowania...');

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text)
            .then(() => console.log('✅ Skopiowano (clipboard API)'))
            .catch(err => {
                console.error('Clipboard API fail:', err);
                fallbackCopy(text);
            });
    } else {
        console.warn('Brak clipboard API → fallback');
        fallbackCopy(text);
    }
}


///////////////////////////////////////////////////////////////////////////////
//////////////////////////// KOPIOWANIE CECH //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
const przyciski = document.querySelectorAll('.btn-kopiuj');

przyciski.forEach(button => {
    button.addEventListener('click', () => {
        // Pobieramy zawartość HTML, a nie tylko tekst
        const tekst = button.parentElement.querySelector('.tekst').innerHTML;
        navigator.clipboard.writeText(tekst).catch(err => {
            console.error('Błąd kopiowania do schowka:', err);
        });
    });
});


let modulesWithComments = [];

function initModuleList(containerId, listId) {
    const container = document.getElementById(containerId);
    const list = document.getElementById(listId);
    list.innerHTML = '';
    modulesWithComments = [];

    const children = Array.from(container.childNodes);
    let pendingComment = null;

    children.forEach(node => {
        if (node.nodeType === Node.COMMENT_NODE) {
            pendingComment = node.data.trim();
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            modulesWithComments.push({
                element: node,
                comment: pendingComment
            });
            pendingComment = null;
        }
    });

    modulesWithComments.forEach((mod, index) => {
        let labelText = mod.comment || ('Moduł ' + (index + 1));

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.title = "Kliknij, aby skopiować kod modułu";

        // Pobieramy obrazek z modułu
        const imgInModule = mod.element.querySelector('img');
        if (imgInModule) {
            const img = document.createElement('img');
            img.src = imgInModule.src;
            img.alt = imgInModule.alt || '';
            img.style.display = 'block';
            img.style.width = '48px'; // możesz dostosować rozmiar
            btn.appendChild(img);
        }

        // Tekst labela
        btn.appendChild(document.createTextNode(labelText));

        btn.addEventListener('click', () => copyModuleCode(index));

        list.appendChild(btn);
    });

}

function copyModuleCode(index) {
    const mod = modulesWithComments[index];
    if (!mod) return;

    let code = '';
    if (mod.comment) {
        code += `<!--${mod.comment}-->\n`;
    }
    code += mod.element.outerHTML;

    navigator.clipboard.writeText(code).catch(err => {
        console.error('Błąd kopiowania do schowka:', err);
    });
}

window.onload = () => {
    initModuleList('modulesContainer', 'moduleList');
};


///////////////////////////////////////////////////////////////////////////////
////////////////////////// DYNAMICZNE GENEROWANIE CIĄGÓW /////////////////////
///////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    const resultDiv = document.getElementById('result');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const copyBtn = document.getElementById('generujCiag');

    // Aktualizacja wyniku na bieżąco
    function updateResult() {
        const selectedValues = [];
        checkboxes.forEach(cb => {
            if (cb.checked) selectedValues.push(cb.value);
        });
        resultDiv.textContent = selectedValues.join(', ');
    }

    // Nasłuchiwanie zmian checkboxów
    checkboxes.forEach(cb => {
        cb.addEventListener('change', updateResult);
    });

    // Funkcja czyszczenia checkboxów i divu
    function clearAll() {
        checkboxes.forEach(cb => {
            cb.checked = false;
            cb.dispatchEvent(new Event('change')); // wymusza aktualizację UI
        });
        resultDiv.textContent = '';
    }

    // Kliknięcie przycisku: kopiowanie + czyszczenie
    copyBtn.addEventListener('click', (e) => {
        e.preventDefault(); // zabezpieczenie, jeśli button w formie
        const text = resultDiv.textContent;

        if (text) {
            // Nowoczesne API Clipboard
            navigator.clipboard.writeText(text)
                .then(() => console.log('Skopiowano do schowka'))
                .catch(err => {
                    console.error('Błąd przy kopiowaniu:', err);

                    // Fallback dla środowisk bez HTTPS
                    const textarea = document.createElement('textarea');
                    textarea.value = text;
                    document.body.appendChild(textarea);
                    textarea.select();
                    try {
                        document.execCommand('copy');
                        console.log('Skopiowano (fallback)');
                    } catch (err) {
                        console.error('Fallback copy failed:', err);
                    }
                    document.body.removeChild(textarea);
                });
        }

        clearAll();
    });
});

$(document).on('inserted.bs.tooltip', function (e) {
    var $trigger = $(e.target);
    var tooltipId = $trigger.attr('aria-describedby');
    var $tooltip = $('#' + tooltipId);

    if ($trigger.is('i')) {
        $tooltip.addClass('tooltip-a');
    }

    if ($trigger.is('a')) {
        $tooltip.addClass('tooltip-b');
    }
});