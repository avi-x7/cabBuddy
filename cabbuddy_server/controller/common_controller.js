import contact from '../models/contact.model.js'

export const addContact = async(request, response) => {

    //data reciving from front end React Contact.jsx
    const contactObject = request.body
    console.log(contactObject);
    //{userName:"scott",userEmail:"scott@gmail.com","message":"how to join"}
    //object destructing

    const { userName, userEmail, message } = contactObject
    try {
        const contactDoc = new contact({ userName, userEmail, message })
        await contactDoc.save()//it will store data into contact model
        // response.send("contact Added sussessfull")
        response.status(201).json ({"message":'Thanks for contacting us'})

    }
    catch (error) {
        console.log(error, message);

    }

}
 