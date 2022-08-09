from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker,events
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet,FollowupAction,EventType
from rasa_sdk.forms import FormAction
from datetime import datetime,date,timedelta
from rasa_sdk.events import ReminderScheduled
from rasa_sdk import Action

import requests
alphavantage = "E8XWGIHEWDJ0XPGY"

class ActionGreet(Action):

    def name(self) -> Text:
        return "action_greet"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        username = "Alice"
        dispatcher.utter_message(f"Hello {username}! How may I assist you today?",
                                 buttons = [
                                     {"payload" : "/check_account", "title" : "Check Account Balance"},
                                     {"payload" : "/check_portfolio", "title" : "Portlio Status"},
                                     {"payload" : "/get_promo", "title" : "Existing Promotions"},
                                     {"payload" : "/get_agent", 'title' : "Chat with Agent"}
                                 ],
                                 button_type = "vertical")

        return []
    
    
class ActionCheckAccount(Action):
    
    def name(self) -> Text:
        return "action_check_account"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        # Simulating Retrieving info from db using python
        tg_id = tracker.sender_id
        print(tg_id)
        account_id = 5 # Read from database with corresponding tg_id
        bank_accounts = ['City Account 1', 'City Account 2']
        bank_balance = [10497, 5839]
        dispatcher.utter_message("Current Account Balance: \n" + ''.join(f"*{bank_accounts[i]}* : ${bank_balance[i]} \n" for i in range(len(bank_accounts))))

        return [FollowupAction(name = "action_menu_template")]

class ActionPortfolioCountry(Action):
    
    def name(self) -> Text:
        return "action_portfolio_country"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
            dispatcher.utter_message(f"Which Market?",
                                 buttons = [
                                     {"payload" : "/US_market", "title" : "US Market"},
                                     {"payload" : "/SG_market", "title" : "SG Market"},
                                     {"payload" : "/HK_market", "title" : "HK Market"}
                                 ],
                                 button_type = "vertical")
            return[]

class ActionUSportfolio(Action):
    
    def name(self) -> Text:
        return "action_US_portfolio"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        # Simulating Retrieving info from db using python
        tg_id = tracker.sender_id
        print(tg_id)
        account_id = 5 # Read from database with corresponding tg_id
        US_shares = ['COIN','TSLA','NVDA','MSFT']
        share_qty = [100,50,250,100]
        close_value = []
        total_value = []
        interval = "60min"
        for i in US_shares:
            symbol = i
            url = f'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={symbol}&interval={interval}&apikey={alphavantage}'
            r = requests.get(url)
            data = r.json()
            key = list(data["Time Series (60min)"].keys())[0]
            close_value.append(data["Time Series (60min)"][key]['4. close'])
            close_value = list(map(float, close_value))
        for i in range(len(US_shares)):
            total_value.append(close_value[i] * share_qty[i])
        
        print(total_value)
        
        dispatcher.utter_message("Current Portfolio: \n" + ''.join(f"*{US_shares[i] : <10}* : {share_qty[i]: ^5} : ${total_value[i]: >10} \n" for i in range(len(US_shares))))

        return [FollowupAction(name = "action_menu_template")]
    
    
class GetPromo(Action):
    
    def name(self) -> Text:
        return "action_promo"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
            dispatcher.utter_message(text = "Hey Alice, Here are the ongoing promotions. Check them out!", image = "https://sg.everydayonsales.com/wp-content/uploads/2021/04/Shopee-Citi-Credit-Card-Promo-350x350.jpg")
            return[FollowupAction(name = "action_menu_template")]
        
class getAgent(Action):
    
    def name(self) -> Text:
        return "action_get_agent"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
            dispatcher.utter_message(text = "Connecting you with an Agent now.")
            return []
                 







class MenuTemplate(Action):
    
    def name(self) -> Text:
        return "action_menu_template"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        dispatcher.utter_message("How may I help?",
                                 buttons = [
                                     {"payload" : "/check_account", "title" : "Check Account Balance"},
                                     {"payload" : "/check_portfolio", "title" : "Portlio Status"},
                                     {"payload" : "/get_promo", "title" : "Existing Promotions"},
                                     {"payload" : "/get_agent", 'title' : "Chat with Agent"}
                                 ],
                                 button_type = "vertical")
        
        return []