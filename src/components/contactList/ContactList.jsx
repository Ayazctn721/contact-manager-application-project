import ContactCard from "../contactCard/ContactCard"
import { useGlobalStore } from "../../hooks/useGlobalStore"

function ContactList() {
    const { store, dispatch } = useGlobalStore();

    return (
        <div className="d-flex  justify-content-center align-items-center flex-column gap-3">
            {store.contacts.map((contact) => (
                <ContactCard
                    key={contact.id}
                    base64_image={contact.base64_image}
                    city={contact.city}
                    email={contact.email}
                    id={contact.id}
                    full_name={contact.full_name}
                    phone_number={contact.phone_number}
                    country={contact.country}
                    is_favorite={contact.is_favorite}
                />
            ))}
        </div>
    )
}

export default ContactList
