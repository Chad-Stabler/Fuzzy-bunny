import { 
    createBunny, 
    getFamilies, 
    checkAuth, 
    logout 
} from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    // prevent default
    const data = new FormData(form);
    // get the name and family id from the form
    await createBunny({ family_id: data.get('family-id'), name: data.get('bunny-name') });
    // use createBunny to create a bunny with this name and family id
    
    form.reset();
    location.replace('../families');
});

window.addEventListener('load', async () => {
    // let's dynamically fill in the families dropdown from supabase
    // grab the select HTML element from the DOM
    const select = document.querySelector('select');
    // go get the families from supabase
    const families = await getFamilies();
    // for each family
    for (let family of families) {
        const newOp = document.createElement('option');

        newOp.value = family.id;

        newOp.textContent = family.name;
        
        select.append(newOp);
    }
    // create an option tag

    // set the option's value and text content

    // and append the option to the select
});


checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
