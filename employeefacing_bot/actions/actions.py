from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher


class ActionHelloWorld(Action):

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