from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher


class Start(Action):

    def name(self) -> Text:
        return "action_start"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        dispatcher.utter_message(text="Hello Thomas, How may I assist you today?",
                                 buttons = [
                                     {"payload" : "/check_outstanding", "title" : "Check Outstanding Clients"},
                                     {"payload" : "/check_emails", "title" : "Check High-Priority Emails"},
                                     {"payload" : "/check_events", "title" : "Check upcoming Calendar Events"},
                                     {"payload" : "/contact_client", "title" : "Contact Clients"}
                                 ],
                                 button_type = "vertical")
        return []


class OutstandingClient(Action):
    
    def name(self) -> Text:
        return "action_outstanding_clients"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
        clients = {"Jade" : ["Bank Card Application", "13th August"], "Josh" : ["Bank Card Deactivation", "14th August"]}

        dispatcher.utter_message("*Pending Attention* \n \n" + "".join(f"Client *{list(clients.keys())[i]}* requires *{clients[list(clients.keys())[i]][0]}*, task assigned on *{clients[list(clients.keys())[i]][1]}*\n \n" for i in range(len(clients))))
        return []
    

class checkEmail(Action):
    
    def name(self) -> Text:
        return "action_check_email"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
        num_email = 2
        email = ['Alex@outlook.com', 'Janice@outlook.com']
        
        dispatcher.utter_message(f"{num_email} *High Priority Emails* from: \n \n" + "\n \n".join(email[i] for i in range(len(email)))) 

        return []
    
    
class checkEvent(Action):
    
    def name(self) -> Text:
        return "action_check_promo"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
                
        dispatcher.utter_message(text = "Ongoing Promotions : \n ", image = "https://sg.everydayonsales.com/wp-content/uploads/2021/04/Shopee-Citi-Credit-Card-Promo-350x350.jpg") 

        return []


class ClientList(Action):
    
    def name(self) -> Text:
        return "action_client_list"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        dispatcher.utter_message(text="Which client to contact?",
                                 buttons = [
                                     {"payload" : "/Bob", "title" : "Bob"},
                                     {"payload" : "/Tom", "title" : "Tom"},
                                     {"payload" : "/Ryan", "title" : "Ryan"},
                                 ],
                                 button_type = "vertical")
        return []
    
    
class contactBob(Action):
    
    def name(self) -> Text:
        return "action_contact_bob"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        dispatcher.utter_message(text="Send Message to Bob now!",
                                 buttons = [
                                     {"payload" : "/Bob_send", "title" : "Whatsapp Bob", "url" :"https://wa.me/93266791?text=Hi%20Bob!%20I%20am%20contacting%20you%20with%20regards%20to%20the%20recent%20insurance%20policy"},
                                 ],
                                 button_type = "inline")
        return []
    