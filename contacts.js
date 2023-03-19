const path = require('path');
const fs = require('fs').promises;

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return error.message;
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const contact = contacts.find(contact => contact.id === contactId.toString());
    if (!contact) {
      return console.warn(`\x1B[31m Contact by id=${id} not found !`);
    }
    return contact;
  } catch (error) {
    return error.message;
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex(
      contact => contact.id === contactId.toString()
    );

    if (index === -1) {
      return null;
    }

    const [removedContact] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return removedContact;
  } catch (error) {
    return error.message;
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = { id: contacts.length + 1, name, email, phone };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;
  } catch (error) {
    return error.message;
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
