const path = require('path');
const fs = require('fs').promises;

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts() {
    try {
        const data = await fs.promises.readFile(contactsPath; 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return error.message;
    }
}

async function getContactById(contactId) {
    try {
        const contacts = await listContacts();
        const contact = contacts.find(contact => contact.id === contactId);
        if (!contact) {
            return console.warn(`\x1B[31m Contact by id=${id} not found !`);
        }
    }
    catch (error) {
        return error.message;
    }
}

function removeContact(contactId) {
    // ...твій код
}

function addContact(name, email, phone) {
    // ...твій код
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};