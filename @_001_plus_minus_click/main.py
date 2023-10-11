# import flet as ft

from flet import Page
from flet import MainAxisAlignment
from flet import TextField
from flet import TextAlign
from flet import Row
from flet import IconButton
from flet import icons as Icons
from flet import app as APP

def main(page: Page):
    """doc"""

    page.title = "Flet counter example"
    page.vertical_alignment = MainAxisAlignment.CENTER
    step = 1
    txt_number = TextField(value="0", text_align=TextAlign.RIGHT, width=100)
    
    def minus_click(e):
        """doc"""
        #print(e)
        txt_number.value = str(int(txt_number.value) - step)
        page.update()
        
    def plus_click(e):
        """doc"""
        txt_number.value = str(int(txt_number.value) + step)
        page.update()  

    page.add(
        Row(
            [
                IconButton(Icons.REMOVE, on_click=minus_click),
                txt_number,
                IconButton(Icons.ADD, on_click=plus_click)
            ],
            alignment=MainAxisAlignment.CENTER,
        )
    )
# APP(target=main, view=ft.WEB_BROWSER)    
# APP(target=main)
    
# >>>print(e)
# <flet_core.control_event.ControlEvent object at 0x000001A699760FD0>